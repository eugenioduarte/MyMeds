import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { routesNames } from "@/navigation";

const MedicationCard = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-red p-2  w-full h-20 flex-row items-center justify-center">
      <Text>data</Text>
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
