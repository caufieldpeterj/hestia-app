import React from 'react';
import { Text, View, Image } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 75}}>
        Hestia
      </Text>
      <Image 
        source={{
          uri: 'https://previews.123rf.com/images/sudowoodo/sudowoodo1706/sudowoodo170600012/79987125-campfire-vector-icon-illustration-isolated-on-white-crossed-logs-and-fire-flame-in-cartoon-style-.jpg'
          }}
          style={{width: 200, height: 200 }}
      />
      <button>Sign In</button>
      <button>Create Account</button>
      <button>Continue as Guest</button>
    </View>
  );
}

export default YourApp;
