import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { routesNames } from "@/navigation";
import { MedicationType } from "@/types/medication";
import { format } from "date-fns";

const MedicationCard = ({ medication }: { medication: MedicationType }) => {
  console.log(medication);
  const navigation = useNavigation();
  const { createdOn } = medication;
  return (
    <View className="bg-red p-2  w-full h-20 flex-row items-center justify-center">
      <View className="flex-col items-end justify-start px-2 bg-blue-200 h-full">
        <Text>{format(createdOn, "k")}:00</Text>
        <Text>{format(createdOn, "aaa")}</Text>
      </View>
      <TouchableOpacity
        className="flex-col bg-blue-700 flex-1 h-full items-center justify-center"
        onPress={() =>
          navigation.navigate(routesNames.MedicationDetailsScreen as never)
        }
      >
        <Text>Medication</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedicationCard;
