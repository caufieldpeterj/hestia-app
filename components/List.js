import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


const DATA = [
  {
    id: '0',
    bedrooms: '3',
    bathrooms: '2.5',
    sq_ft: '350',
    price: '$250,000'
  },
  {
    id: '1',
    bedrooms: '9',
    bathrooms: '1.5',
    sq_ft: '750',
    price: '$1,250,000'
  },
  {
    id: '2',
    bedrooms: '30',
    bathrooms: '12.5',
    sq_ft: '50000',
    price: '$5,250,000'
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.price, textColor]}>{item.price}</Text>
  </TouchableOpacity>
);

const List = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default List;
