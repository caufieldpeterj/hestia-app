import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './Header'
import Footer from './Footer'

export default Favorites = ({ navigation }) => {
  return (
    <View>
      {/* <Header /> */}
      <View style={styles.faves}>
        <Text>
          Here are my favorited houses
        </Text>
        <Button 
        title="Back to Watchlist Favorites"
        onPress={() => navigation.navigate('Watchlist')}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  faves: { 
    flex: 0, 
    justifyContent: "center", 
    alignItems: "center" 
  }
})