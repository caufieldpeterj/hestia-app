import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

// adding navigation prop to the List component, all Stack.Screen components have this prop
export default News = ({navigation}) => {
  // isLoading is the state variable, setLoading is the function we can use to modify state.. useState method to initialize state variable (isLoading) to true
  const [isLoading, setLoading] = useState(true);
  
  // homeData is the state variable, setData is the function we can use to modify state.. useState method initializes state variable (homeData) to empty array which holds data returned from the server which will be JSON object
  const [newsData, setData] = useState([]);
  
  console.log(newsData);
  
  // useEffect hook allows us to load data from a remote source, similar to componentDidMount and other lifecyle methods
    // 1st argument - fetch method (defaults to GET), which returns a promise
    // 2nd argument - empty array, indicating useEffect should only run once
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-03-27&sortBy=publishedAt&apiKey=274c45eb4b434fe7aa059e831292debb')
      // grab data from the request
      .then((response) => response.json())
      // receives json from the response, using setData method to store data in the homeData state variable
      .then((json) => setData(json.articles))
      // catch to deal with any errors, IMPORTANT AS errors will fail silently
      .catch((error) => console.error(error))
      // set the data loading state variable to conditionally render the view below
      .finally(()=> setLoading(false));
  }, []);
  
  const newsStories = ({item, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>    
        <View style={styles.list}>  
          {/* <Image source={item.urlToImage}></Image> */}
          <Text>{item.title}</Text>
          <Text>{item.url}</Text>
        </View>
      </TouchableOpacity>
    ) 
  }
      
  
  return (
    <View>
      {isLoading ? <Text>"Loading..."</Text> : (
        <FlatList 
          data={newsData}
          renderItem={newsStories}
          keyExtractor={(item) => item.url}
          onPress={()=> navigation.navigate('Favorites')}
        />
      )}
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