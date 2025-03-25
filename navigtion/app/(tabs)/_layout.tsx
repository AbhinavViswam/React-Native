import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Profile, Saved, Search, Home } from "@/constants/image";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={Home}
                style={[styles.icon, { tintColor: focused ? "#FB923C" : "#333" }]}
                resizeMode="contain"
              />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={Search}
              style={[styles.icon, { tintColor: focused ? "#FB923C" : "#333" }]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={Saved}
              style={[styles.icon, { tintColor: focused ? "#FB923C" : "#333" }]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={Profile}
              style={[styles.icon, { tintColor: focused ? "#FB923C" : "#333" }]}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    height: 60,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  iconContainer: {
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "#FB923C",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default _layout;
