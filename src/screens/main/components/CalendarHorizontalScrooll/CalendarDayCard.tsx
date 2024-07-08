import { Text, TouchableOpacity } from "react-native";
import React from "react";
type CalendarDayCardProps = {
  active: number;
  setActive: () => void;
  index: number;
};
const CalendarDayCard = ({
  active,
  setActive,
  index,
}: CalendarDayCardProps) => {
  return (
    <TouchableOpacity
      className={`w-12 h-14 flex items-center justify-center mx-1 rounded-xl ${active == index ? "bg-blue_1" : "bg-white"} `}
      onPress={setActive}
    >
      <Text
        className={`${active == index ? "text-grey_1" : "text-blue_1"} text-xs`}
      >
        Wed
      </Text>
      <Text
        className={`${active == index ? "text-white font-black" : "text-blue_1"} mt-1 `}
      >
        3
      </Text>
    </TouchableOpacity>
  );
};

export default CalendarDayCard;
