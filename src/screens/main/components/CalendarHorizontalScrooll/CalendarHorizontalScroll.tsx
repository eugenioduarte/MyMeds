import { View, Text } from "react-native";
import React from "react";
import CalendarDayContainer from "./CalendarDayContainer";

const CalendarHorizontalScroll = () => {
  return (
    <View className="w-full flex items-start justify-start p-2">
      <Text className="text-grey_2 text-md">January 3</Text>
      <Text className="text-black text-xl font-semibold">Today reminders</Text>
      <CalendarDayContainer />
    </View>
  );
};

export default CalendarHorizontalScroll;
