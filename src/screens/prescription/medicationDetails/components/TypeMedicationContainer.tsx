import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { EMedicationShapeType } from "@/types/medication";
import { SvgPill } from "@/assets/images/svgs";

const MedicationTypeCard = ({
  id,
  onPress,
  isShapeSelected,
}: {
  id: number;
  onPress: () => void;
  isShapeSelected: boolean;
}) => {
  const SvgIcon = () => {
    switch (id) {
      case 0:
        return <SvgPill width={50} height={50} />;
      default:
        return <SvgPill width={50} height={50} />;
    }
  };
  return (
    <TouchableOpacity
      className={`w-20 h-20 rounded-lg  mr-2 items-center justify-center ${
        isShapeSelected ? "border-blue_2 border-2 bg-blue_2/2 el0" : "bg-grey_3"
      }`}
      onPress={onPress}
    >
      <SvgIcon />
    </TouchableOpacity>
  );
};

type TypeContainerProps = {
  medicationTypeSelected: string;
  setMedicationTypeSelected: React.Dispatch<React.SetStateAction<string>>;
};

const TypeContainer = ({
  medicationTypeSelected,
  setMedicationTypeSelected,
}: TypeContainerProps) => {
  const medicationShapes = Object.values(EMedicationShapeType);

  return (
    <View className="h-20">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={medicationShapes}
        renderItem={({ item }) => (
          <MedicationTypeCard
            shape={item}
            onPress={() => setMedicationTypeSelected(item)}
            isShapeSelected={medicationTypeSelected === item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TypeContainer;
