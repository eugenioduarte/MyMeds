import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Router from "@/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import NotificationProvider from "@/providers/NotificationProvider";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000097" }}>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </NotificationProvider>
    </SafeAreaView>
  );
}
