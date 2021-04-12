import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login'
import List from './components/List'
import List2 from './components/List2'
import Favorites from './components/Favorites'
import CreateAccount from './components/CreateAccount'
import News from './components/News'
import MortgageCalc from './components/MortgageCalculator';
import NewsDetail from './components/NewsDetail'

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Login}
          options={{
            title: 'Log In',
            headerStyle: {
              // backgroundColor: 'darkslateblue'
            }
          }}
        />
        <Stack.Screen 
          name="Watchlist"
          component={List}
        />
        <Stack.Screen 
          name="Favorites"
          component={Favorites}
        />
        <Stack.Screen 
          name="Create Account"
          component={CreateAccount}
        />
        <Stack.Screen 
          name="News"
          component={News}
        />
        <Stack.Screen 
          name="Mortgage Calculator"
          component={MortgageCalc}
        />
        <Stack.Screen 
          name="Story Detail"
          component={NewsDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>   
  );
};