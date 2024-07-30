import { View } from "react-native";
import React from "react";
import Text from "@/components/Text/Text";
import ButtonTextChevron from "@/components/buttons/ButtonTextChevron";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import TimelineScheduleTimeCard from "./TimelineScheduleTimeCard";

enum TimePeriodGetTypeEnum {
  GetTime = 1,
  GetDuration = 2,
  GetFrequency = 3,
}

const TimelineSchedule = () => {
  const [timePeriod, setTimePeriod] = React.useState<String[]>(["07:00"]);
  const [duration, setDuration] = React.useState<string>("");
  const [frequency, setFrequency] = React.useState<string>("");

  const openModalPicker = (typeModal: number) => {
    console.log("open Modal TimePicker", typeModal);
  };

  return (
    <View style={{ width: "100%" }}>
      <Text medium style={{ marginBottom: 8 }}>
        Timeline & Schedule
      </Text>
      <TimelineScheduleTimeCard
        value={timePeriod}
        handleButtonPress={() => openModalPicker(TimePeriodGetTypeEnum.GetTime)}
      />
      <ButtonTextChevron
        placeholder="Duration"
        value={duration}
        setValue={() => openModalPicker(TimePeriodGetTypeEnum.GetDuration)}
      />
      <ButtonTextChevron
        placeholder="Frequency"
        value={frequency}
        setValue={() => openModalPicker(TimePeriodGetTypeEnum.GetFrequency)}
      />
    </View>
  );
};

export default TimelineSchedule;
