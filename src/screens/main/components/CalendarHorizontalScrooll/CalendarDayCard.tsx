import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { format } from "date-fns";
type CalendarDayCardProps = {
  active: boolean;
  setActive: () => void;
  date?: Date;
};
const CalendarDayCard = ({
  active,
  setActive,
  date = new Date(),
}: CalendarDayCardProps) => {
  const dayOfWeek = format(date, "EEE");
  const currentDay = format(date, "dd");
  return (
    <TouchableOpacity
      className={`w-12 h-14 flex items-center justify-center mx-1 rounded-xl ${active ? "bg-blue_1" : "bg-white"} `}
      onPress={setActive}
    >
      <Text className={`${active ? "text-grey_1" : "text-blue_1"} text-xs`}>
        {dayOfWeek}
      </Text>
      <Text
        className={`${active ? "text-white font-black" : "text-blue_1"} mt-1 `}
      >
        {currentDay}
      </Text>
    </TouchableOpacity>
  );
};

export default CalendarDayCard;
