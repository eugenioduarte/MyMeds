import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { routesNames } from "@/navigation";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import { EPrincipalHeaderType } from "@/types/global";
import useUserStore from "@/stores/HeaderStore";

type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

const GoAddMedication = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  return (
    <ButtonIcon
      className="bg-grey_1 w-11 h-11"
      onPress={() => {
        navigation.navigate(routesNames.PrescriptionScreen, {
          screen: routesNames.MedicationDetailsScreen,
        });
      }}
    >
      <Text className="text-blue_1 font-semibold text-xl">+</Text>
    </ButtonIcon>
  );
};

const OpenMenuDrawer = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <ButtonIcon
      onPress={() => navigation.openDrawer()}
      className="bg-grey_1 w-11 h-11"
    >
      <Text className="text-blue_1 font-semibold">ES</Text>
    </ButtonIcon>
  );
};

const GoBackButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <ButtonIcon
      onPress={() => navigation.openDrawer()}
      className="bg-grey_1 w-11 h-11"
    >
      <Text className="text-blue_1 font-semibold">ES</Text>
    </ButtonIcon>
  );
};

const HeaderButton = ({ typeButton }: { typeButton: EPrincipalHeaderType }) => {
  switch (typeButton) {
    case EPrincipalHeaderType.DrawerMenu:
      return <OpenMenuDrawer />;
    case EPrincipalHeaderType.AddMedication:
      return <GoAddMedication />;
    case EPrincipalHeaderType.backLastScreen:
      return <GoBackButton />;
    default:
      return <></>;
  }
};

const TextContainer = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  if (title === "") {
    return null;
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-blue_1 text-sm font-medium">{title}</Text>
      {subtitle !== "" && (
        <Text className="text-grey_2 text-xs font-light">{subtitle}</Text>
      )}
    </View>
  );
};

export default function PrincipalFeed() {
  const { headerButtonSetup, headerTextSetup } = useUserStore();
  console.log(headerTextSetup);
  return (
    <View className="flex-row items-center justify-between bg-white">
      <HeaderButton typeButton={headerButtonSetup.firstButtonType} />
      <TextContainer
        title={headerTextSetup.title}
        subtitle={headerTextSetup.subtitle}
      />
      <HeaderButton typeButton={headerButtonSetup.secondButtonType} />
    </View>
  );
}
