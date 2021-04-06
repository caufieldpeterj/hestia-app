import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import home_icon from '../assets/home_2.png';

export default Footer = () => {
    return (
    <View style={styles.footer}>
        <Image 
          source={home_icon}
            style={styles.home}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    // footer: {
    //     display: 'flex',
    //     flex: 0,
    //     alignContent: 'flex-end',
    //     alignItems: 'flex-end'
    // },
    
    home: {
        width: 50,
        height: 50,
        backgroundColor: 'darkslateblue',
        borderRadius: 45,
        marginRight: 20,
        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});