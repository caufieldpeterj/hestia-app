import React, {useState} from 'react';
// import react native components
import { Text, TextInput, View, Image, Button, StyleSheet, StatusBar } from 'react-native';
import fire_icon from '../assets/fire_2.png'

export default Login = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
      // view component, container supports layout with flexbox... kinda like div
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        {/* <Header /> */}
        <Text style={styles.text}>Hestia</Text>
        <Image 
          source={
            fire_icon
            // { uri: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1706/sudowoodo170600012/79987125-campfire-vector-icon-illustration-isolated-on-white-crossed-logs-and-fire-flame-in-cartoon-style-.jpg' }
            
            }
            style={styles.img}
        />
        <TextInput
          style={styles.textboxes}
          placeholder="Email"
          defaultValue={text}
          onChangeText={text => setText(text)}

        />
        <TextInput 
          style={styles.textboxes}
          placeholder='Password'
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <Button 
          style={styles.button}
          title="Login" 
          onPress={() =>
            navigation.navigate('Watchlist')
          }
        />
        <Button 
          title="Create Your Account"
          style={styles.button}
          onPress={()=> 
            navigation.navigate('Create Account')
          }
        />
        <Button 
          style={styles.button}
          title="Continue as Guest" 
          onPress={() =>
            navigation.navigate('Watchlist')
          }
        />
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
    width: 135, 
    height: 180
  },
  text: {
    fontSize: 75,
    // color: 'white'
    color: 'darkslateblue'

  }
})