import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import homeScreen from "../screens/home/homeScreen";
import searchScreen from "../screens/search/searchScreen";
import notifications from "../screens/notifications/notifications";
import chatScreen from "../screens/chats/chatScreen";
import { AppColors } from "../styles/colors";


const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
 return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.black,
        tabBarInactiveTintColor: AppColors.textGrey,
        tabBarShowLabel: false,
    }}
    >

        <Tab.Screen 
            name="Home"
            component={homeScreen}
            options={{
                tabBarIcon: ({color, size}) => <Fontisto name="home" size={size} color={color} />,
                title: "Home"
            }}
        />

        <Tab.Screen 
            name="Search"
            component={searchScreen}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="search" size={size} color={color} />,
                title: "Search"
            }}
        />

        <Tab.Screen 
            name="Notification"
            component={notifications}
            options={{
                tabBarIcon: ({color, size}) => <MaterialIcons name="notifications" size={size} color={color} />
            }}
        />

        <Tab.Screen 
            name="Chats"
            component={chatScreen}
            options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="message-text" size={size} color={color} />
            }}
        />

    </Tab.Navigator>
 )   
}