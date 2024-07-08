import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import FeedHeader from "@/components/headers/headerFeed/HeaderFeed";
import useAuthStore from "@/stores/AuthStore";
import colors from "@/constants/colors";

import { MainScreen } from "@/screens/main";
import { LoginScreen, RecoveryPassScreen } from "@/screens/login";
import { CalendarScreen } from "@/screens/calendar";
import { PrescriptionScreen } from "@/screens/prescription";
import { ProfileScreen } from "@/screens/profile";
import { OnboardScreen } from "@/screens/onboard";
import { SettingsScreen } from "@/screens/settings";
import {
  MedicationScreen,
  MedicationDetailsScreen,
} from "@/screens/medication";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const routesNames = {
  LoginScreen: "LoginScreen",
  RecoveryPassScreen: "RecoveryPassScreen",
  AuthRoute: "AuthRoute",
  MainRoute: "MainRoute",
  CalendarRoute: "CalendarRoute",
  MainScreen: "MainScreen",
  CalendarScreen: "CalendarScreen",
  PrescriptionScreen: "PrescriptionScreen",
  ProfileScreen: "ProfileScreen",
  SettingsScreen: "SettingsScreen",
  OnboardScreen: "OnboardScreen",
  MedicationScreen: "MedicationScreen",
  MedicationDetailsScreen: "MedicationDetailsScreen",
};

function MainStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={MainScreen} name={routesNames.MainScreen} />
      <HomeStack.Screen
        component={OnboardScreen}
        name={routesNames.OnboardScreen}
      />
      <HomeStack.Screen
        component={MedicationScreen}
        name={routesNames.MedicationScreen}
      />
      <HomeStack.Screen
        component={MedicationDetailsScreen}
        name={routesNames.MedicationDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={CalendarScreen}
        name={routesNames.CalendarScreen}
      />
    </HomeStack.Navigator>
  );
}

function PrescriptionStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={PrescriptionScreen}
        name={routesNames.PrescriptionScreen}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={ProfileScreen}
        name={routesNames.ProfileScreen}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={SettingsScreen}
        name={routesNames.SettingsScreen}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          display: "none",
        },
        headerStyle: {
          backgroundColor: colors.red,
        },
      }}
    >
      <Tab.Screen
        name={routesNames.MainRoute}
        component={MainStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.CalendarRoute}
        component={CalendarStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.PrescriptionScreen}
        component={PrescriptionStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.ProfileScreen}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

function AuthStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={LoginScreen}
        name={routesNames.LoginScreen}
      />
      <HomeStack.Screen
        component={RecoveryPassScreen}
        name={routesNames.RecoveryPassScreen}
      />
    </HomeStack.Navigator>
  );
}

function MainRoute() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          header: () => <FeedHeader />,
          headerShown: true,
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
}

const RootStack = createStackNavigator();

const Router: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {}, [isAuthenticated]);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <RootStack.Screen
            name={routesNames.MainRoute}
            component={MainRoute}
          />
        ) : (
          <RootStack.Screen
            name={routesNames.AuthRoute}
            component={AuthStackScreen}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
