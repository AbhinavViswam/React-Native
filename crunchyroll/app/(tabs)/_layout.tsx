import { Tabs } from 'expo-router';
import React from 'react';
import { homeIcon, profileIcon, savedIcon, searchIcon } from "@/constants/image";
import { Image, View, StyleSheet, Text } from 'react-native';

const TabIcon = ({ focused, name, image }: { focused: boolean; name: string; image: any }) => {
    return (
        <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
            <Image source={image} style={[styles.icon, { tintColor: focused ? "white" : "black" }]} />
            {focused && <Text style={styles.iconText}>{name}</Text>}
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Home" image={homeIcon} />,
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Search" image={searchIcon} />,
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Saved" image={savedIcon} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Profile" image={profileIcon} />,
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        height: 56,
        backgroundColor: "#FFF",
        position: "absolute",
        borderRadius:25,
        marginBottom:20,
        width:"95%",
        marginLeft:10
    },
    iconWrapper: {
        marginTop:17,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "350%", 
        height: "200%", 
        borderRadius: 30,
        backgroundColor: "transparent",
        paddingHorizontal: 15,
    },
    iconWrapperActive: {
        backgroundColor: "#F47521", 
    },
    icon: {
        width: 26,
        height: 26,
    },
    iconText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 8,
    },
});

export default TabLayout;