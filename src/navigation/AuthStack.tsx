import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import EmailVerificationScreen from '../screens/auth/EmailVerificationScreen';
import EmailVerifiedScreen from '../screens/auth/EmailVerifiedScreen';
import UploadProfileScreen from '../screens/auth/UploadProfileScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
      initialRouteName="SignIn"
      screenOptions={{ 
        headerShown: false,
        gestureEnabled: true, 
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
      <Stack.Screen name="EmailVerified" component={EmailVerifiedScreen} />
      <Stack.Screen name="UploadProfilePic" component={UploadProfileScreen} />
    </Stack.Navigator>
  );
}