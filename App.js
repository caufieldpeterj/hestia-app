import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import Login from './components/Login'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default App = () => {
  return (
    <NavigationContainer>
      <View>
        {/* <Login /> */}
        <Header />      
        <List />
        {/* <Footer /> */}
      </View>
    </NavigationContainer>   
  );
};
