import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login'
import List from './components/List'
import Favorites from './components/Favorites'

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Login}
        />
        <Stack.Screen 
          name="Watchlist"
          component={List}
        />
        <Stack.Screen 
          name="Favorites"
          component={Favorites}
        />
      </Stack.Navigator>
    </NavigationContainer>   
  );
};