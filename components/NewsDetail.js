import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'galio-framework';

export default function NewsDetail({route, navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [newsData, setData] = useState([]);
    const { url } = route.params;
    const story = newsData.find(post => post.url === url);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=274c45eb4b434fe7aa059e831292debb')
          // grab data from the request
          .then((response) => response.json())
          // receives json from the response, using setData method to store data in the homeData state variable
          .then((json) => setData(json.articles))
          // catch to deal with any errors, IMPORTANT AS errors will fail silently
          .catch((error) => console.error(error))
          // set the data loading state variable to conditionally render the view below
          .finally(()=> setLoading(false));
      }, []);

      return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size='large' color='darkslateblue' backgroundColor="black"/> : (
                <ScrollView>
                    <Text style={{color: 'white'}}>{story.title}</Text>
                    <Image 
                        style={styles.image} 
                        source={{ uri: story.urlToImage}}
                    />
                    <Text style={{color: 'white'}}>{story.description}</Text>
                    {/* <Button 
                        round 
                        uppercase 
                        color="darkslateblue" 
                        onPress={()=> navigation.navigate('Webview')}>
                            Read Full Story
                    </Button> */}
                </ScrollView>
        )}
        </View>
      )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        borderColor: 'grey',
        backgroundColor: 'black',
        flex: 1,
        color: 'white'
    },
    image: {
        height: 250,
        width: '100%',
        paddingBottom: 25,
        
    }
})

