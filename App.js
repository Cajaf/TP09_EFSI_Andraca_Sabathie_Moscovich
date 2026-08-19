import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import Perfil from './screens/perfil';

const Tab = createBottomTabNavigator();

function TabIcon({ routeName, color }) {
  const iconSource = routeName === 'Home' ? require('./assets/home.png') : require('./assets/perfilDefault.png');

  return (
    <Image
      source={iconSource}
      style={[styles.tabIcon, { tintColor: color }]}
      resizeMode="contain"
    />
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#8e8e8e',
            tabBarStyle: styles.tabBar,
            tabBarIcon: ({ color }) => <TabIcon routeName={route.name} color={color} />,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: '#fff',
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});
