/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; //引入图标

type Props = {};
export default class IconTest extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to js page!</Text>

                <Icon name='home' size={30} color='blue'/>

                <Icon name="qq" size={50} color="#52C0FE"/>

                <Icon.Button name="facebook" size={100} backgroundColor="#3b5998" onPress={()=>{alert("icon button")}}>
                    Login with Facebook
                </Icon.Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
