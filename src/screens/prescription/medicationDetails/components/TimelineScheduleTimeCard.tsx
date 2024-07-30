import { View } from "react-native";
import React from "react";
import Text from "@/components/Text/Text";
import ButtonTextChevron from "@/components/buttons/ButtonTextChevron";
import ButtonIcon from "@/components/buttons/ButtonIcon";

const TimelineScheduleTimeCard = ({
  value,
  handleButtonPress,
  handleRemoveTime,
}: {
  value: String[];
  handleButtonPress: () => void;
  handleRemoveTime: () => void;
}) => {
  return (
    <View className="flex-row items-center justify-start mb-5">
      <ButtonIcon
        className="bg-grey_2 w-10 h-10 rounded-sm"
        onPress={() => handleButtonPress()}
      >
        <Text className="text-white font-semibold text-xl">+</Text>
      </ButtonIcon>
      <>
        {value?.map((time, index) => (
          <View
            key={index}
            className="bg-grey_1 flex-row items-center justify-center p-2"
          >
            <Text className="text-grey_2">{time}</Text>
            <ButtonIcon className="w-5 h-5" onPress={() => handleButtonPress()}>
              <Text className="text-red font-bold">x</Text>
            </ButtonIcon>
          </View>
        ))}
      </>
    </View>
  );
};

export default TimelineScheduleTimeCard;
