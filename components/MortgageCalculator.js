import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'galio-framework';

export default MortgageCalc = ({ route, navigation }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.faves}>
            <TextInput
              style={styles.textboxes}
              placeholder="Price"
              defaultValue={text}
              onChangeText={text => setText(text)}>
                Asking Price:
            </TextInput>
            
            <TextInput
              style={styles.textboxes}
              placeholder="Interest Rate"
              defaultValue={text}
              onChangeText={text => setText(text)}>
                Interest Rate: 
            </TextInput>

            <TextInput
              style={styles.textboxes}
              placeholder="Term"
              defaultValue={text}
              onChangeText={text => setText(text)}>
                Term: 
            </TextInput>

          <View style={styles.footer}></View>
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
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  container: {
    backgroundColor: 'black', 
    flex: 1
  },
  footer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textboxes: {
    color: 'white',
    fontSize: 20
  }
})