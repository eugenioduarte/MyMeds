import { FlatList, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import CalendarDayCard from "./CalendarDayCard";
import { useDateContext } from "@/hooks";
import Text from "@/components/Text/Text";

const CalendarDayContainer = () => {
  const { selectedDate, setSelectedDate } = useDateContext();
  const [days, setDays] = useState<Date[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const firstDayOfMonth = startOfMonth(selectedDate);
    const lastDayOfMonth = endOfMonth(selectedDate);
    const monthDays = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    });
    setDays(monthDays);
    const todayIndex = monthDays.findIndex(
      (day) => format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
    ) as number;

    setActiveIndex(todayIndex === -1 ? null : todayIndex);
  }, [selectedDate.getMonth() || selectedDate.getDate()]);

  useEffect(() => {
    if (activeIndex !== null) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: activeIndex,
          viewPosition: 0.5,
        });
      }, 100);
    }
  }, [activeIndex]);

  const renderItem = ({ item, index }: { item: Date; index: number }) => {
    return (
      <CalendarDayCard
        date={item}
        active={activeIndex === index}
        setActive={() => {
          setSelectedDate(item);
          setActiveIndex(index);
        }}
      />
    );
  };

  const renderButtonSide = (isFront: Boolean) => {
    const newDate = isFront
      ? subMonths(selectedDate, 1)
      : addMonths(selectedDate, 1);

    return (
      <TouchableOpacity
        className="bg-blue_1 rounded-xl p-2 items-center justify-center mx-2"
        onPress={() => {
          setSelectedDate(newDate);
        }}
      >
        <Text light>{format(newDate, "MMM")}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="py-2 h-20">
      <FlatList
        ref={flatListRef}
        horizontal
        data={days}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: 200,
          offset: 55 * index,
          index,
        })}
        contentContainerStyle={{ paddingHorizontal: 10, alignItems: "center" }}
        ListHeaderComponent={() => renderButtonSide(true)}
        ListFooterComponent={() => renderButtonSide(false)}
      />
    </View>
  );
};

export default CalendarDayContainer;
