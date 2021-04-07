
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableWithoutFeedback } from 'react-native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import Header from './Header'
import Footer from './Footer'

// adding navigation prop to the List component, all Stack.Screen components have this prop
export default List = ({navigation}) => {
  // isLoading is the state variable, setLoading is the function we can use to modify state.. useState method to initialize state variable (isLoading) to true
  const [isLoading, setLoading] = useState(true);
  
  // homeData is the state variable, setData is the function we can use to modify state.. useState method initializes state variable (homeData) to empty array which holds data returned from the server which will be JSON object
  const [homeData, setData] = useState([]);
  
  console.log(homeData);
  
  // useEffect hook allows us to load data from a remote source, similar to componentDidMount and other lifecyle methods
    // 1st argument - fetch method (defaults to GET), which returns a promise
    // 2nd argument - empty array, indicating useEffect should only run once
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-03-07&sortBy=publishedAt&apiKey=')
      // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
      // grab data from the request
      .then((response) => response.json())
      // receives json from the response, using setData method to store data in the homeData state variable
      .then((json) => setData(json.articles))
      // catch to deal with any errors, IMPORTANT AS errors will fail silently
      .catch((error) => console.error(error))
      // set the data loading state variable to conditionally render the view below
      .finally(()=> setLoading(false));
  }, []);

  const homeItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>    
        <View>  
          <Text>{item.source.name} | {item.publishedAt}</Text>
          <Text>{item.title}</Text>
        </View>
        {/* <Text>{item.title}</Text> */}
      </TouchableWithoutFeedback>
    )
  }
      
  
  return (
    <View>
      {/* <Header /> */}
      {/* <View style={styles.list}>
        <Text>City</Text>
        <Text>State</Text>
        <Text>Price</Text>
        <Text>BR</Text>
        <Text>BA</Text>
        <Text>SqFt</Text>
      </View> */}
      {/* <View style={styles.list}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>{data.price}</Text>
        <Text>{data.bedrooms}</Text>
        <Text>{data.bathrooms}</Text>
        <Text>{data.sq_ft}</Text>
      </View> */}
      {isLoading ? <Text>"Loading..."</Text> : (
        <FlatList 
          data={homeData}
          renderItem={homeItem}
          keyExtractor={(item) => item.url}
        />
      )}



      <Button 
        title="To Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      <Footer />
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
  }
})