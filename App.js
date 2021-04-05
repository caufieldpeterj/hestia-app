import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Header from './components/Header'
import List from './components/List'


const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <List />
    </SafeAreaView>
  );
};

export default App;
