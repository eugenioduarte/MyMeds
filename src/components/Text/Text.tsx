import { Text as RNText, TextProps as RNTextProps } from "react-native";
import React from "react";
import { styled } from "nativewind";

type TextProps = RNTextProps & {
  className?: string;
  dark?: boolean;
  light?: boolean;
  variant?: "title" | "subtitle" | "body";
};

const defaultTextStyle = "text-blue_1 text-xl font-normal";

const variants = {
  title: "text-3xl font-bold",
  subtitle: "text-2xl font-semibold",
  body: "text-base font-normal",
};

const StyledText = styled(RNText);

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  dark,
  light,
  variant = "body",
  style,
  ...props
}) => {
  const variantStyle = variants[variant];

  return (
    <StyledText
      className={`${defaultTextStyle} ${variantStyle} ${className} ${dark ? "text-blue_1" : ""} ${light ? "text-white" : ""}`}
      style={style}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;