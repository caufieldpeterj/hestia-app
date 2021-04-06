import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import magnifying_icon from '../assets/white-magnifying-glass-1.png';
import profile_icon from '../assets/profile_4.png';

export default Header = () => {
    return (
    <View style={styles.header}>
        <Image 
            source={profile_icon}
            style={styles.profile}
        />
        <Text style={styles.text}>Market</Text>
        <Image 
          source={magnifying_icon}
            style={styles.magnify}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'darkslateblue',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'center',
        height: 60,
        paddingTop: 10,
        marginTop: 50        
    },
    text: {
        color: 'white',
        fontSize: 27,
        fontFamily: 'AlNile-Bold',
        paddingTop: 10
    },
    magnify: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    profile: {
        width: 40,
        height: 40,
        marginLeft: 10
    }
});