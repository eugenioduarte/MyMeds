import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

export default function HeaderFeed() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  return (
    <View className="p-2 bg-red-500 flex items-start justify-between">
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>open</Text>
      </TouchableOpacity>
    </View>
  );
}
