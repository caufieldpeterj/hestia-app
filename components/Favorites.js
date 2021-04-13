import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Block } from 'galio-framework';


export default function Favorites ({ route, navigation }) {
  const {item} = route.params
  console.log(item)
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.faves}>       
        <Text style={styles.text}>City: {item.city}</Text>
        <Text style={styles.text}>State: {item.state}</Text>
        <Text style={styles.text}>Bedrooms: {item.bedrooms}</Text>
        <Text style={styles.text}>Bathrooms: {item.bathrooms}</Text>
        <Text style={styles.text}>SqFt: {item.sq_ft}</Text>
        <Text style={styles.text}>Asking Price: {item.price}</Text>
        <Text style={styles.text}>Down Payment (20%):{item.down_pmt}</Text>
        <Text style={styles.text}>Est. Mo. Mortgage: {item.est_mtge}</Text>
        <Button
          round 
          uppercase 
          color="darkslateblue" 
          title="Back to Watchlist"
          onPress={() => navigation.navigate('Watchlist')}
        >Back to Watchlist</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  faves: { 
    flex: 0, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  text: {
    color: 'white',
    padding: 15,
    fontSize: 20
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    color: 'white'
  }
})