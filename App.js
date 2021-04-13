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
// import Webview from './components/Webview';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
          name="Watchlist"
          component={List}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
          name="Select Listing"
          component={Favorites}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
          name="Create Account"
          component={CreateAccount}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}
        />
        <Stack.Screen 
          name="News"
          component={News}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}          
        />
        <Stack.Screen 
          name="Mortgage Calculator"
          component={MortgageCalc}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}          
        />
        <Stack.Screen 
          name="Story Detail"
          component={NewsDetail}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}          
        />
        {/* <Stack.Screen 
          name="Webview"
          component={Webview}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>   
  );
};