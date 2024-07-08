import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { routesNames } from "@/navigation";
import ButtonIcon from "@/components/buttons/ButtonIcon";

type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

const GoAddMedication = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  return (
    <ButtonIcon
      className="bg-grey_1"
      onPress={() => {
        navigation.navigate(routesNames.PrescriptionScreen, {
          screen: routesNames.MedicationDetailsScreen,
        });
      }}
    >
      <Text className="text-blue_1 font-semibold">+</Text>
    </ButtonIcon>
  );
};

const OpenMenuDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <ButtonIcon onPress={() => navigation.openDrawer()} className="bg-grey_1">
      <Text className="text-blue_1 font-semibold">ES</Text>
    </ButtonIcon>
  );
};

export default function PrincipalFeed() {
  return (
    <View className="flex-row items-center justify-between bg-white">
      <OpenMenuDrawer />
      <GoAddMedication />
    </View>
  );
}
