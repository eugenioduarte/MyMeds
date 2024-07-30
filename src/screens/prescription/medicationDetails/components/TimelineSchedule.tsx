import { View } from "react-native";
import React from "react";
import Text from "@/components/Text/Text";
import ButtonTextChevron from "@/components/buttons/ButtonTextChevron";
import TimelineScheduleTimeCard from "./TimelineScheduleTimeCard";
import ModalTimePicker from "@/components/modals/ModalTimePicker";
import ModalDurationPicker from "@/components/modals/ModalDurationPicker";

enum TimePeriodGetTypeEnum {
  GetTime = 1,
  GetDuration = 2,
  GetFrequency = 3,
}

const TimelineSchedule = () => {
  const [timePeriod, setTimePeriod] = React.useState<String[]>(["07:00"]);
  const [duration, setDuration] = React.useState<string>("");
  const [frequency, setFrequency] = React.useState<string>("");

  const [timePickerModalVisible, setTimePickerModalVisible] =
    React.useState(false);
  const [durationPickerModalVisible, setDurationPickerModalVisible] =
    React.useState(false);

  const openModalPicker = (typeModal: number) => {
    switch (typeModal) {
      case TimePeriodGetTypeEnum.GetTime:
        setTimePickerModalVisible(true);
        break;

      default:
        break;
    }
  };

  const handleRemoveTime = (index: number) => {
    const newTimePeriod = timePeriod.filter((_, i) => i !== index);
    setTimePeriod(newTimePeriod);
  };

  return (
    <View style={{ width: "100%" }}>
      <Text medium style={{ marginBottom: 8 }}>
        Timeline & Schedule
      </Text>
      <TimelineScheduleTimeCard
        value={timePeriod}
        handleButtonPress={() => openModalPicker(TimePeriodGetTypeEnum.GetTime)}
        handleRemoveTime={(index) => {
          handleRemoveTime(index);
        }}
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
      <ModalTimePicker
        visible={timePickerModalVisible}
        closeModal={() => setTimePickerModalVisible(false)}
      />
      <ModalDurationPicker
        visible={durationPickerModalVisible}
        closeModal={() => setDurationPickerModalVisible(false)}
      />
    </View>
  );
};

export default TimelineSchedule;
