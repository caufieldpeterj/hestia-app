import React, {useState} from 'react';
// import react native components
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';

const DATA = [
  {
    id: 0, 
    text: 'Boca 1'
  },
  {
    id: 1, 
    text: 'Boca 2'
  },
  {
    id: 3, 
    text: 'Boca 3'
  },
  {
    id: 4, 
    text: 'Boca 4'
  }
]

const YourApp = () => {
  // setting state
  // state will be called items, and a function to manipulate the state called setItems
  const [items, setItems] = useState([
    // hardcoding listings below

  ]);

  return (
      // view component, container supports layout with flexbox... kinda like div
      <View style={styles.container}>
        <Header />
        <FlatList data={items} renderItem={ ({item}) => <Text>{item.text}</Text>} 
        />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,

  }
})

export default YourApp;
