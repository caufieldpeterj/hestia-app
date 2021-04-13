import React,  { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';

export default function Webview ({route, navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [newsData, setData] = useState([]);
    const {url} = route.params
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
      <WebView
        source={{ uri: story.url }}
        style={{ marginTop: 20 }}
      />
    );
  }