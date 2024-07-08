import { View, Text, Image } from "react-native";
import React from "react";
import { logoWhite } from "@/assets/images/images";

type LogoAndTitleAnimationProps = {
  showTitle?: Boolean;
  size?: number;
};

const LogoAndTitleAnimation = ({
  showTitle = true,
  size = 40,
}: LogoAndTitleAnimationProps) => {
  return (
    <View className="flex-1 w-full h-full items-center justify-center">
      <Image source={logoWhite} className={`w-${size} h-${size}`} />
      {showTitle && (
        <Text className="color-white text-4xl font-extrabold mt-4">
          Solar Mind
        </Text>
      )}
    </View>
  );
};

export default LogoAndTitleAnimation;
