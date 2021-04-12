import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'galio-framework';

// adding navigation prop to the List component, all Stack.Screen components have this prop
export default List = ({navigation}) => {
  // isLoading is the state variable, setLoading is the function we can use to modify state.. useState method to initialize state variable (isLoading) to true
  const [isLoading, setLoading] = useState(true);
  
  // homeData is the state variable, setData is the function we can use to modify state.. useState method initializes state variable (homeData) to empty array which holds data returned from the server which will be JSON object
  const [homeData, setData] = useState([]);
  
  console.log(homeData);
  
  navigation.reset({
    index: 0,
    routes: [{ name: 'Watchlist'}]
  })

  // useEffect hook allows us to load data from a remote source, similar to componentDidMount and other lifecyle methods
    // 1st argument - fetch method (defaults to GET), which returns a promise
    // 2nd argument - empty array, indicating useEffect should only run once
  useEffect(() => {
    fetch('https://hestia-flask.herokuapp.com/api/v1/homes')
      // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
      // grab data from the request
      .then((response) => response.json())
      // receives json from the response, using setData method to store data in the homeData state variable
      .then((json) => setData(json.data))
      // catch to deal with any errors, IMPORTANT AS errors will fail silently
      .catch((error) => console.error(error))
      // set the data loading state variable to conditionally render the view below
      .finally(()=> setLoading(false));
  }, []);
  
  const r = 0.03;
  const downPayment = 0.2;


  const homeItem = ({item, onPress}) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Favorites', {item})}>    
        <View style={styles.list}>  
          {/* <Text>{item.source.name} | {item.publishedAt}</Text> */}
          {/* <Text>{item.title}</Text> */}
          <Text>{item.city}</Text>
          <Text>{item.state}</Text>
          <Text>{item.price}</Text>
          {/* 20% Down */}
          <Text>{item.price*downPayment}</Text>
          
          {/* 30 yr Fixed Mortgage */}
          {/* M = P[r(1+r)^n/((1+r)^n)-1)] */}
          {/* <Text>{item.price*(1-downPayment)*(r*((1+r)^360))}</Text> */}
          
        
        </View>
      </TouchableOpacity>
    )
  }
      
  
  return (
    <View>
      <View style={styles.header}>
        <Text style={StyleSheet.white}>City</Text>
        <Text>State</Text>
        <Text>Price</Text>
        <Text>20% Down</Text>
      </View> 
      {isLoading ? <Text>"Loading..."</Text> : (
        <FlatList 
          data={homeData}
          renderItem={homeItem}
          keyExtractor={(item) => item.created_at}
          // onPress={()=> navigation.navigate('Favorites')}
        />
      )}

      {/* <Button 
        title="To Favorites"
        onPress={() => navigation.navigate('Favorites')}
      /> */}
      <View style={styles.footer}>
        <Button 
          round 
          uppercase 
          color="darkslateblue" 
          title="News"
          onPress={() => navigation.navigate('News')}>
            News
        </Button>
        
        <Button
          round 
          uppercase 
          color="darkslateblue"  
          title="Mortgage Calculator"
          onPress={() => navigation.navigate('Mortgage Calculator')}>
            Mortgage Calculator
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: { 
    flex: 0, 
    justifyContent: "space-between", 
    alignItems: "center",
    flexDirection: "row" ,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1 
  },
  header: {
    flex: 0, 
    justifyContent: "space-between", 
    alignItems: "center",
    flexDirection: "row" ,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: '#8aa1f4',
    color: 'white'
  },
  footer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
})