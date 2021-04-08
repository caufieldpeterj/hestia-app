import React, {useState} from 'react';
// import react native components
import { Text, TextInput, View, Image, Button, StyleSheet, StatusBar } from 'react-native';

export default Login = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
      // view component, container supports layout with flexbox... kinda like div
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <Header /> */}
        <Text style={styles.text}>Hestia Sign Up</Text>
        <TextInput
          style={styles.textboxes}
          placeholder="First Name"
          defaultValue={text}
          onChangeText={text => setText(text)}

        />
        <TextInput 
          style={styles.textboxes}
          placeholder='Last Name'
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <TextInput 
          style={styles.textboxes}
          placeholder='Email'
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <TextInput 
          style={styles.textboxes}
          placeholder='Password'
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <TextInput 
          style={styles.textboxes}
          placeholder='Phone Number'
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <Button 
          style={styles.button}
          title="Create Account" 
          onPress={() =>
            navigation.navigate('Home')
          }
        />
        <Text style={{color: 'lightgrey'}}>Terms and Conditions</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    // backgroundColor: 'darkslateblue'
  },
  textboxes: {
    height: 30,
    width: 200,
    borderColor: 'black',
    borderWidth: 1.5,
    marginTop: 10
  },
  img: {
    width: 200, 
    height: 200 
  },
  text: {
    fontSize: 35,
    // color: 'white'
  }
})