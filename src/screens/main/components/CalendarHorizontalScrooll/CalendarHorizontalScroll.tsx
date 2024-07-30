import { View, Text } from "react-native";
import React from "react";
import CalendarDayContainer from "./CalendarDayContainer";
import {
  addDays,
  format,
  formatRelative,
  isAfter,
  isBefore,
  subDays,
} from "date-fns";
import { useDateContext } from "@/hooks/CalendarContext";

const CalendarHorizontalScroll = () => {
  const { selectedDate } = useDateContext();

  const getRelativeLabel = (date: Date) => {
    const today = new Date();
    const threeDaysAgo = subDays(today, 5);
    const threeDaysFromNow = addDays(today, 5);

    if (isBefore(date, threeDaysAgo) || isAfter(date, threeDaysFromNow)) {
      return format(date, "dd, MMMM:");
    }

    const relativeDate = formatRelative(date, today);
    return (
      relativeDate.split(" at ")[0].charAt(0).toUpperCase() +
      relativeDate.split(" at ")[0].slice(1)
    );
  };

  return (
    <View className="w-full flex items-start justify-start p-2 mt-5 ">
      <Text className="text-grey_2 text-md">
        {format(selectedDate, "MMMM, dd")}
      </Text>
      <View className="flex-row items-center justify-between  w-full">
        <Text className="text-black text-xl font-semibold">
          {getRelativeLabel(selectedDate)} reminders
        </Text>
        <Text className="text-black text-xl font-normal">
          {format(selectedDate, "yyyy")}
        </Text>
      </View>
      <CalendarDayContainer />
    </View>
  );
};

export default CalendarHorizontalScroll;
