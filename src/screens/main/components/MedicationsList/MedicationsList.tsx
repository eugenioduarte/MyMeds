import { View, Text, ScrollView } from "react-native";
import React from "react";
import ButtonRect from "@/components/buttons/ButtonRect";
import MedicationCard from "./MedicationCard/MedicationCard";

const MedicationsList = () => {
  return (
    <View className="bg-blue-500 w-full h-full flex items-start justify-start p-2">
      <View className="flex-row">
        <ButtonRect
          btnText="Active"
          btnStyle="w-20 bg-red h-10 mx-1"
          textStyle="text-xs"
        />
        <ButtonRect
          btnText="archive"
          btnStyle="w-20 bg-red h-10 mx-1"
          textStyle="text-xs"
        />
      </View>
      <Text>MedicationsList</Text>

      <MedicationCard />
    </View>
  );
};

export default MedicationsList;
