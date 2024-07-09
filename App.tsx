import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Router from "@/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import NotificationProvider from "@/providers/NotificationProvider";
import LoadingProvider from "@/providers/LoadingProvider";
import { I18n } from "i18n-js";
import { translations } from "@/locales/localization";
import { I18nProvider } from "@/hooks";
import { white } from "@/constants/colors";

export default function App() {
  const queryClient = new QueryClient();

  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
      <I18nProvider i18n={i18n}>
        <LoadingProvider>
          <NotificationProvider>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </NotificationProvider>
        </LoadingProvider>
      </I18nProvider>
    </SafeAreaView>
  );
}
