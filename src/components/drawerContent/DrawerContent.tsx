import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Custom Drawer Content</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
