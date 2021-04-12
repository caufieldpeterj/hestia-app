import React, {useState} from 'react';
// import react native components
import { Text, TextInput, View, Image, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Button } from 'galio-framework';
// import fire_icon from '../assets/fire_2.png'
import home_icon from '../assets/home_2.png'
import backgroundImage from '../assets/cool-background.png'

export default Login = ({ navigation }) => {
  const [text, setText] = useState('');
  return (
      // view component, container supports layout with flexbox... kinda like div
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.text}>HESTIA</Text>
        <Image 
          source={
            home_icon
            // fire_icon
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
          round 
          uppercase 
          color="darkslateblue"
          title="Login" 
          onPress={() =>
            navigation.navigate('Watchlist')
          }>
            Login
        </Button>
        
        <Button 
          round 
          uppercase 
          color="darkslateblue"
          title="Create Your Account"
          onPress={()=> 
            navigation.navigate('Create Account')
          }>
            Create Account
        </Button>

        <Button 
          round 
          uppercase 
          color="darkslateblue"
          title="Continue as Guest" 
          onPress={() =>
            navigation.navigate('Watchlist')
          }
        >Continue as Guest
        </Button>
        </ImageBackground>
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
    height: 180
  },
  text: {
    fontSize: 75,
    // color: 'white'
    color: 'darkslateblue'
  },
  background: {
    flex: 1,
    width: 420,
    justifyContent: 'center',
    alignItems: 'center'
  }
})