import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import RidesScreen from '../screens/RidesScreen';
import ProfileScreens from '../screens/ProfileScreens';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = '';
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Services') {
              iconName = 'layers-outline';
            } else if (route.name === 'Rides') {
              iconName = 'car-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1D4ED8',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
     <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
<Tab.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
<Tab.Screen name="Rides" component={RidesScreen} options={{ headerShown: false }} />
<Tab.Screen name="Profile" component={ProfileScreens} options={{ headerShown: false }} />
         </Tab.Navigator>
  );
}
