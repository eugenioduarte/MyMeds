import React from "react";
import { TextInput as TextInputDefault, TextInputProps } from "react-native";

interface TextInputDeProps extends TextInputProps {
  text: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputDeProps> = ({
  text,
  onChangeText,
  ...rest
}) => {
  return (
    <TextInputDefault
      className="bg-grey_1 h-12  px-4 m-1 rounded-md"
      onChangeText={onChangeText}
      value={text}
      {...rest}
    />
  );
};

export default TextInput;
