import * as React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../screens/landing-screen/index';
import EnquiryScreen from '../screens/enquiry-screen/index';
import SignInScreen from '../screens/signin-screen/index';
import SignUpScreen from '../screens/signup-screen/index';
import SettingsScreen from '../screens/welcome-screen/index';
import ProductScreen from '../screens/product-screen/index';

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      headermode={'false'}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="setting"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="product"
        component={ProductScreen}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="menu" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="enquiry"
        component={EnquiryScreen}
        options={{
          tabBarLabel: 'Enquiry',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="enquiry" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const RootNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};
export default RootNavigation;
