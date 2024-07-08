import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { blue_1 } from "@/constants/colors";

type ButtonIconProps = TouchableOpacityProps & {
  onPress?: () => void;
  children?: React.ReactNode;
  size?: number;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  onPress,
  children,
  size = 8,
  ...props
}) => {
  return (
    <TouchableOpacity
      testID="button"
      {...props}
      className={`mx-2 rounded-full items-center justify-center bg-white  ${"w-" + size + " h-" + size}`}
      onPress={onPress}
    >
      {children ? (
        children
      ) : (
        <AntDesign name="arrowleft" size={24} color={blue_1} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
