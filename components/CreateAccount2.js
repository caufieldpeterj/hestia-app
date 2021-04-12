import React, { Component } from 'react'
import {View, Button, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){

    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder='name'
                    onChangeText={(name)=> this.setState({ name })}
                />
                <TextInput
                    placeholder='email'
                    onChangeText={(email)=> this.setState({ email })}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({ password })}
                />
                <Button
                    round 
                    uppercase 
                    color="darkslateblue"  
                    onPress={()=> this.onSignUp()}
                    title='Sign Up'>
                        Sign Up
                </Button>
            </View>
        )
    }
}

export default Registration;