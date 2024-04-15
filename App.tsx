import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Router from "@/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
