import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { routesNames } from "@/navigation";

export default function FeedScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 flex-row items-start justify-start">
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() => navigation.navigate(routesNames.NewsScreen)}
      >
        <Text>News</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() => navigation.navigate(routesNames.EventsScreen)}
      >
        <Text>calendar</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() =>
          navigation.navigate(routesNames.ProfileScreen, {
            screen: routesNames.ForumScreen,
          })
        }
      >
        <Text>Group</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() =>
          navigation.navigate(routesNames.ProfileScreen, {
            screen: routesNames.ChatScreen,
          })
        }
      >
        <Text>Chat</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() => navigation.navigate(routesNames.ProfileScreen)}
      >
        <Text>Profile</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-red p-2"
        onPress={() => navigation.navigate(routesNames.HandBookScreen)}
      >
        <Text>handbook</Text>
      </Pressable>
    </View>
  );
}
