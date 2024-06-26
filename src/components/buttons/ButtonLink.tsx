import { Text, Pressable, PressableProps } from "react-native";
import React from "react";
import { styled } from "nativewind";

type ButtonLinkProps = PressableProps & {
  text: string;
  dark: boolean;
  handleLink: () => void;
  textClassName?: string;
};

const StyledText = styled(Text);

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  dark,
  handleLink,
  textClassName = "",
  className = "",
  ...props
}) => {
  return (
    <Pressable onPress={handleLink} className={className} {...props}>
      <StyledText
        className={`${dark ? "text-blue_1" : "text-white"} p-2 text-lg ${textClassName}`}
      >
        {text}
      </StyledText>
    </Pressable>
  );
};

export default ButtonLink;
