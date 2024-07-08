import Text from "@/components/Text/Text";
import React from "react";

type ErrorInputMsgProps = {
  light?: boolean;
  children: React.ReactNode;
  error?: string;
  touch?: boolean;
};

const ErrorInputMsg: React.FC<ErrorInputMsgProps> = ({
  light = false,
  children,
  error,
  touch,
}) => {
  return (
    <Text className={`${light ? "text-white" : "text-blue_1"} h-5`}>
      {error && touch ? children : ""}
    </Text>
  );
};

export default ErrorInputMsg;
