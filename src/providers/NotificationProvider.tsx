import React, { createContext, useContext, useState, ReactNode } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type NotificationContextType = {
  notify: (message: string) => void;
  error: (message: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const notify = (message: string) => {
    setNotifications([...notifications, message]);
    setTimeout(() => {
      setNotifications((current) => current.filter((msg) => msg !== message));
    }, 3000);
  };

  const error = (message: string) => {
    setErrors([...errors, message]);
    setTimeout(() => {
      setErrors((current) => current.filter((msg) => msg !== message));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify, error }}>
      {children}
      <View style={styles.container}>
        {notifications.map((msg, index) => (
          <View key={index} style={styles.notification}>
            <Text style={styles.text}>{msg}</Text>
          </View>
        ))}
        {errors.map((msg, index) => (
          <View key={index} style={[styles.notification, styles.error]}>
            <Text style={styles.text}>{msg}</Text>
          </View>
        ))}
      </View>
    </NotificationContext.Provider>
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
    backgroundColor: "green",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  error: {
    backgroundColor: "red",
  },
  text: {
    color: "white",
  },
});

export default NotificationProvider;
