import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Importe suas telas
import LoginScreen from "../screens/loginScreen/Login";
import FeedScreen from "../screens/feedScreen/Feed";
import SettingsScreen from "../screens/settingsScreen/Settings";
import ProfileScreen from "../screens/profileScreen/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import React from "react";
import FeedHeader from "@/components/headers/headerFeed/HeaderFeed";

// Crie os stacks
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

// Crie as funções dos componentes para os stacks
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={LoginScreen} name="Login" />
      <HomeStack.Screen component={FeedScreen} name="Feed" />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  );
}

// Crie o componente de navegação com tabs
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

// Crie o drawer navigator e inclua os tabs como uma das telas
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          header: () => <FeedHeader />, // Usa o FeedHeader como componente de cabeçalho
          headerShown: true, // Certifique-se de habilitar a visualização do cabeçalho
        }}
      />
    </Drawer.Navigator>
  );
}

const Router = () => <MyDrawer />;

export default Router;
