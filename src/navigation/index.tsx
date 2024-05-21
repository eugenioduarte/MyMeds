import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import LoginScreen from "../screens/00_authScreen/Login";
import { FeedScreen } from "../screens/01_feedScreen/index";
import { NewsScreen } from "@/screens/02_newsScreen/index";
import { EventsScreen } from "@/screens/03_eventsScreen/index";
import {
  ProfileScreen,
  ForumScreen,
  ChatScreen,
} from "../screens/04_profileScreen/index";
import { HandBookScreen } from "../screens/05_handBookScreen/index";

import SettingsScreen from "../screens/settingsScreen/Settings";
import FeedHeader from "@/components/headers/headerFeed/HeaderFeed";
import DrawerContent from "@/components/drawerContent/DrawerContent";
import useAuthStore from "@/stores/AuthStore";
import { Auth, signOut } from "firebase/auth";
import { auth } from "@/service/firebase";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const routesNames = {
  LoginScreen: "LoginScreen",
  MainRoute: "MainRoute",
  FeedScreen: "FeedScreen",
  NewsScreen: "NewsScreen",
  EventsScreen: "EventsScreen",
  ProfileScreen: "ProfileScreen",
  HandBookScreen: "HandBookScreen",
  SettingsScreen: "SettingsScreen",
  ForumScreen: "ForumScreen",
  ChatScreen: "ChatScreen",
};

function FeedStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={FeedScreen} name={routesNames.FeedScreen} />
    </HomeStack.Navigator>
  );
}

function NewsStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen component={NewsScreen} name={routesNames.NewsScreen} />
    </HomeStack.Navigator>
  );
}

function EventsStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={EventsScreen}
        name={routesNames.EventsScreen}
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
      <HomeStack.Screen
        component={ForumScreen}
        name={routesNames.ForumScreen}
      />
      <HomeStack.Screen component={ChatScreen} name={routesNames.ChatScreen} />
    </HomeStack.Navigator>
  );
}

function HandBookStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        component={HandBookScreen}
        name={routesNames.HandBookScreen}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen
        name={routesNames.SettingsScreen}
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
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
          backgroundColor: "#f4511e",
        },
      }}
    >
      <Tab.Screen
        name={routesNames.FeedScreen}
        component={FeedStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.NewsScreen}
        component={NewsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routesNames.EventsScreen}
        component={EventsStackScreen}
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
      <Tab.Screen
        name={routesNames.HandBookScreen}
        component={HandBookStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
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

function MainRoute() {
  useEffect(() => {}, []);

  const handleLogout = async () => {
    // await logout();
  };

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
            name={routesNames.LoginScreen}
            component={LoginScreen}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
