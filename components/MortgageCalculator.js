import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'galio-framework';
export default MortgageCalc = ({ route, navigation }) => {
  return (
    <View>
        <View style={styles.faves}>
            <Button
                round 
                uppercase 
                color="darkslateblue" 
                title="Back to Watchlist"
                onPress={() => navigation.navigate('Watchlist')}
            >Back to Watchlist</Button>
        </View>
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