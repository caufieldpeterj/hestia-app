import React, {useState} from 'react';
// import react native components
import { Text, TextInput, View, Image, Button, ScrollView, StyleSheet } from 'react-native';

const Login = () => {
  const [text, setText] = useState('');
  return (
      // view component, container supports layout with flexbox... kinda like div
      <View style={styles.container}>
        {/* <Header /> */}
        <Text style={styles.text}>Hestia</Text>
        <Image 
          source={{
            uri: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1706/sudowoodo170600012/79987125-campfire-vector-icon-illustration-isolated-on-white-crossed-logs-and-fire-flame-in-cartoon-style-.jpg'
            }}
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
          placeholder="Password"
          // defaultValue={text}
          // onChangeText={text => setText(text)}        
        />
        <Button title="Login"/>
        <Button title="Create Your Account"/>
        <Text>Skip</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
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
    fontSize: 75
  }
})

export default Login;