import { View, Text, Image } from "react-native";
import React from "react";
import { logoWhite } from "@/assets/images/images";

const LogoAndTitleAnimation = () => {
  return (
    <View className="flex-1 w-full h-full items-center justify-center">
      <Image source={logoWhite} className="w-40 h-40" />
      <Text className="color-white text-4xl font-extrabold mt-4">
        Solar Mind
      </Text>
    </View>
  );
};

export default LogoAndTitleAnimation;
