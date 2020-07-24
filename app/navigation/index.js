import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../screens/landing-screen/index';
import SignInScreen from '../screens/signin-screen/index';
// import SettingsScreen from '../screens/home-screen/index';

const Stack = createStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function StoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
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
          tabBarLabel: 'Discover',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="newspaper" size={size} />
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
