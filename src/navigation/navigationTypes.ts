import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  AuthRoute: undefined;
  MainRoute: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  RecoveryPassScreen: undefined;
};

export type MainStackParamList = {
  MainScreen: undefined;
  OnboardScreen: undefined;
  MedicationScreen: undefined;
  MedicationDetailsScreen: undefined;
};

export type CalendarStackParamList = {
  CalendarScreen: undefined;
};

export type PrescriptionStackParamList = {
  PrescriptionScreen: undefined;
  AddMedication: undefined;
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

export type SettingsStackParamList = {
  SettingsScreen: undefined;
};

export type DrawerParamList = {
  Tabs: undefined;
  Settings: undefined;
};

export type TabParamList = {
  MainRoute: undefined;
  CalendarRoute: undefined;
  PrescriptionScreen: undefined;
  ProfileScreen: undefined;
};

export type AuthStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AuthRoute"
>;
export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;
export type CalendarStackNavigationProp =
  StackNavigationProp<CalendarStackParamList>;
export type PrescriptionStackNavigationProp =
  StackNavigationProp<PrescriptionStackParamList>;
export type ProfileStackNavigationProp =
  StackNavigationProp<ProfileStackParamList>;
export type SettingsStackNavigationProp =
  StackNavigationProp<SettingsStackParamList>;
export type DrawerNavigationPropType = DrawerNavigationProp<DrawerParamList>;
export type TabNavigationPropType = BottomTabNavigationProp<TabParamList>;
