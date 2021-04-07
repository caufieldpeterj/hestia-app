
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './Header'
import Footer from './Footer'

export default List = ({navigation}) => {
  return (
    <View>
      <Header />
      <View style={styles.list}>
        <Text>
          List of all available homes from our db
        </Text>
      </View>
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
    justifyContent: "center", 
    alignItems: "center" 
  }
})