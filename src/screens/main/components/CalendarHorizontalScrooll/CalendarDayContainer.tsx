import { FlatList, StyleSheet, View, Button } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  format,
} from "date-fns";
import CalendarDayCard from "./CalendarDayCard";

const CalendarDayContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [days, setDays] = useState<Date[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const firstDayOfMonth = startOfMonth(currentMonth);
    const lastDayOfMonth = endOfMonth(currentMonth);
    const monthDays = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    });
    setDays(monthDays);
    const todayIndex = monthDays.findIndex(
      (day) => format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
    );

    setActiveIndex(todayIndex === -1 ? 0 : todayIndex);
  }, [currentMonth]);

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

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => subMonths(prevMonth, 1));
  };

  const renderItem = ({ item, index }: { item: Date; index: number }) => {
    return (
      <CalendarDayCard
        date={item}
        active={activeIndex === index}
        setActive={() => setActiveIndex(index)}
      />
    );
  };

  return (
    <View className="bg-red h-40">
      <View style={styles.buttonContainer}>
        <Button title="Previous Month" onPress={handlePrevMonth} />
        <Button title="Next Month" onPress={handleNextMonth} />
      </View>
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
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  contentContainer: {
    paddingHorizontal: 50,
  },
});

export default CalendarDayContainer;
