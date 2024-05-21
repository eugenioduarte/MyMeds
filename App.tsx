import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Router from "@/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
