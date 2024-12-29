import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import StayInAreaScreen from '../screens/Home/StayInAreaScreen';
import RideDetailsScreen from '../screens/Home/RideDetailsScreen';
import RideArrivalScreen from '../screens/Home/RideArrivalScreen';
import ChooseDriverScreen from '../screens/Home/ChooseDriverScreen';
import ChatScreen from '../screens/Home/ChatScreen';
import ReserveRideScreen from '../screens/Home/ReserveRideScreen';


const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
      <Stack.Screen
        name="StayInAreaScreen"
        component={StayInAreaScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
         <Stack.Screen
        name="RideDetailsScreen"
        component={RideDetailsScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
        <Stack.Screen
        name="RideArrivalScreen"
        component={RideArrivalScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
       <Stack.Screen
        name="ChooseDriverScreen"
        component={ChooseDriverScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
       <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
        <Stack.Screen
        name="ReserveRideScreen"
        component={ReserveRideScreen}
        options={{ headerShown: false }} // Hide header for main screen
      />
      
    </Stack.Navigator>
  );
}
