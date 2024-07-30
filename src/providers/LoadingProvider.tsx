import colors from "@/constants/colors";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";

type LoadingContextType = {
  notifyLoading: (flag: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

const NotificationProvider = ({
  children,
  isFullScreen,
}: {
  children: ReactNode;
  isFullScreen?: boolean;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const notifyLoading = (flag: boolean) => {
    setLoading(flag);
  };

  return (
    <LoadingContext.Provider value={{ notifyLoading }}>
      {children}

      {loading && (
        <View className=" absolute flex-1 h-full w-full items-center justify-center">
          <BlurView
            intensity={100}
            tint="light"
            className="p-4 items-center justify-center rounded-xl overflow-hidden"
          >
            <LottieView
              autoPlay
              loop={false}
              style={{
                width: 200,
                height: 200,
              }}
              source={require("@assets/animations/pill_animation.json")}
            />
            <Text className="p-2 text-white font-bold text-2xl">
              Loading ...
            </Text>
          </BlurView>
        </View>
      )}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1000,
  },
  notification: {
    backgroundColor: colors.blue_2,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  error: {
    backgroundColor: colors.red,
  },
});

export default NotificationProvider;
