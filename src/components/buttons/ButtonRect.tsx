import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonRectProps = TouchableOpacityProps & {
  onPress?: () => void;
  btnText: string;
  btnStyle?: string;
  textStyle?: string;
};

const defaultBtnStyle = "w-60 bg-white";
const defaultTextStyle = "text-blue_1";

const ButtonRect: React.FC<ButtonRectProps> = ({
  onPress,
  btnText,
  btnStyle = defaultBtnStyle,
  textStyle = defaultTextStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      testID="button"
      {...props}
      className={`${btnStyle} rounded-md px-4 py-2 items-center justify-center`}
      onPress={onPress}
    >
      <Text className={`${textStyle} text-xl font-normal`}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRect;
