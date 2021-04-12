import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

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
  
  const tableData = {
    tableHead: ['City', 'State', 'Price', 'Est Mtge', '20% Down']
  }

  const homeItems = ({item, onPress}) => {
    <Table>
        <Rows>

        </Rows>
    </Table>
  }

  return (
    <View>
      <View>
        <Table>
            <Row data={tableData.tableHead}/>
            <Rows data={homeItems}/>
        </Table>
      </View> 
      <Button 
        title="To Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      <Button 
        title="News"
        onPress={() => navigation.navigate('News')}
      />
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