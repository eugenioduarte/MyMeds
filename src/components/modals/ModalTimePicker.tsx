import { Modal, TouchableOpacity, View, FlatList } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { BLUR_VALUE } from "@/constants/variables";
import Text from "@/components/Text/Text";

const ModalTimePicker = ({
  visible,
  closeModal,
}: {
  visible: boolean;
  closeModal: () => void;
}) => {
  const [selectedHours, setSelectedHours] = React.useState<string[]>([]);

  const hours = Array.from(Array(24).keys()).map(
    (hour) => `${hour.toString().padStart(2, "0")}:00`
  );

  const handleSelectHour = (hour: string) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours((prev) => prev.filter((h) => h !== hour));
      return;
    }
    setSelectedHours((prev) => [...prev, hour]);
  };

  return (
    <Modal
      visible={visible}
      style={{ backgroundColor: "red", opacity: 0.5 }}
      transparent
    >
      <View className="flex-1 items-center justify-center ">
        <BlurView
          intensity={BLUR_VALUE}
          tint="light"
          className="flex-1 p-4 items-center justify-center rounded-xl overflow-hidden h-full w-full"
        >
          <TouchableOpacity onPress={closeModal}>
            <Text>Select times</Text>
          </TouchableOpacity>
          <View style={{ maxHeight: 600 }}>
            <FlatList
              data={hours}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectHour(item)}
                  className={`${selectedHours.includes(item) ? "bg-blue_1" : "bg-grey_2"} m-1 w-40 h-10 flex items-center justify-center rounded-lg`}
                  accessibilityLabel={`Select time ${item}`}
                >
                  <Text light>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              numColumns={2}
            />
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalTimePicker;
