import React, { cloneElement } from 'react';
// import react native components
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
      <View style={styles.header}>
          <Text style={styles.text}>
              Available Listings
          </Text>
      </View>

  );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'darkslateblue',
        alignItems: 'center',
        height: 60,
        padding: 15
    },
    text: {
        color: 'white'
    }
});

export default Header;