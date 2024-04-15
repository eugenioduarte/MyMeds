import React from "react";
import { View, StyleSheet } from "react-native";

const SolarSystem = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      {/* Sol */}
      <View className="w-10 h-10 bg-yellow-200 rounded-full absolute" />

      {/* Planetas */}
      <View style={[styles.orbit, styles.orbit1]}>
        <View className="w-5 h-5 bg-blue-500 rounded-full" />
      </View>
      <View style={[styles.orbit, styles.orbit2]}>
        <View className="w-3 h-3 bg-green-500 rounded-full" />
      </View>
      <View style={[styles.orbit, styles.orbit3]}>
        <View className="w-2 h-2 bg-red-500 rounded-full" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orbit: {
    position: "absolute",
    borderRadius: "50%",
  },
  orbit1: {
    width: 80,
    height: 80,
    animation: "rotate1 10s linear infinite",
  },
  orbit2: {
    width: 120,
    height: 120,
    animation: "rotate2 15s linear infinite",
  },
  orbit3: {
    width: 160,
    height: 160,
    animation: "rotate3 20s linear infinite",
  },
});

export default SolarSystem;
