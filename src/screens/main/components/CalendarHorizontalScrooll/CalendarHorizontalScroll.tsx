import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CalendarDayContainer from "./CalendarDayContainer";
import { format, formatRelative } from "date-fns";
import { useLoading } from "@/providers/LoadingProvider";

const CalendarHorizontalScroll = () => {
  const { notifyLoading } = useLoading();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const getRelativeLabel = (date: Date) => {
    const relativeDate = formatRelative(date, new Date());
    return (
      relativeDate.split(" at ")[0].charAt(0).toUpperCase() +
      relativeDate.split(" at ")[0].slice(1)
    );
  };

  useEffect(() => {
    notifyLoading(true);
    // setTimeout(() => {
    //   notifyLoading(false);
    // }, 2000);
  }, []);

  return (
    <View className="w-full flex items-start justify-start p-2">
      <Text className="text-grey_2 text-md">
        {format(selectedDate, "MMMM, dd")}
      </Text>
      <Text className="text-black text-xl font-semibold">
        {getRelativeLabel(selectedDate)} reminders
      </Text>
      <CalendarDayContainer />
    </View>
  );
};

export default CalendarHorizontalScroll;
