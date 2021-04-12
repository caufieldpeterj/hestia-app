import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Block } from 'galio-framework';


export default Favorites = ({ route, navigation }) => {
  const {item} = route.params
  console.log(item)
  return (
    <View>
      {/* <Header /> */}
      <View style={styles.faves}>       
        <Text>City: {item.city}</Text>
        <Text>State: {item.state}</Text>
        <Text>Bedrooms: {item.bedrooms}</Text>
        <Text>Bathrooms: {item.bathrooms}</Text>
        <Text>Sq. Ft.:{item.sq_ft}</Text>
        <Text>Asking Price:{item.price}</Text>
        <Text>Down Payment (20%):{item.down_pmt}</Text>
        <Text>Est. Mo. Mortgage:{item.est_mtge}</Text>
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
    color: 'white'
  }
})