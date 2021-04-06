
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default List = () => {
  return (
    <View style={styles.list}>
      <Text>
        Try editing me! 🎉
      </Text>
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