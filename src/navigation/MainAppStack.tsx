import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createStackNavigator();

export default function MainAppStack () {
    return(
        <Stack.Navigator
         screenOptions={{ 
        headerShown: false,
      }}
        >
            <Stack.Screen name="AuthStack" component={AuthStack}/>
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs}/>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    title: "Profile",
                }}
            />
        </Stack.Navigator>
    )
}
