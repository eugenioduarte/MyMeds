import React, { ReactNode } from "react";
import { View, ViewProps } from "react-native";

interface ContainerProps extends ViewProps {
  children: ReactNode;
  dark?: boolean;
}

const Container: React.FC<ContainerProps> = ({ dark, children, ...props }) => {
  return (
    <View
      {...props}
      className={`p-2 flex-1 items-start justify-start ${dark ? "bg-blue_1" : "bg-white"}`}
    >
      {children}
    </View>
  );
};

export default Container;
