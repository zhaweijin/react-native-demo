/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


type Props = {};
export default class ChatScreen extends Component<Props> {

    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text style={styles.welcome}>Chat with {params.user}</Text>
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
    text: {
        fontSize: 30,
        backgroundColor: 'red',
        margin: 10,
    }
});
