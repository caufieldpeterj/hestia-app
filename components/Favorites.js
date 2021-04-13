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
        <View style={styles.row}> 
          <Text style={styles.text}>City: </Text>
          <Text style={styles.value}>{item.city}</Text>
        </View>  
        <View style={styles.row}>
          <Text style={styles.text}>State: </Text>
          <Text style={styles.value}>{item.state}</Text>
        </View>   
        <View style={styles.row}>
          <Text style={styles.text}>Bedrooms: </Text>
          <Text style={styles.value}>{item.bedrooms}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Bathrooms: </Text>
          <Text style={styles.value}>{item.bathrooms}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>SqFt: </Text>
          <Text style={styles.value}>{item.sq_ft}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Asking Price: </Text>
          <Text style={styles.value}>{item.price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Down Payment (20%):</Text>
          <Text style={styles.value}>{item.down_pmt}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Est. Mo. Mortgage: </Text>
          <Text style={styles.value}>{item.est_mtge}</Text>
        </View>
        <View style={{flex: 1, alignContent: 'center', marginLeft: 110}}>
          <Button
            round 
            uppercase 
            color="darkslateblue"
            title="Back to Watchlist"
            onPress={() => navigation.navigate('Watchlist')}
          >Save Listing</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  faves: { 
    flex: 0, 
    justifyContent: "center", 
    alignItems: "flex-start" 
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
  },
  row: {
    flexDirection: "row",
  },
  value: {
    fontSize: 20,
    color: 'white',
    paddingTop: 15,
    
  }
})