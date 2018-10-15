/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,Button} from 'react-native';



type Props = {};
export default class HomeScreen extends Component<Props> {

    static navigationOptions = {
        title: '标题',
        headerTitleStyle: {fontSize: 18, color: 'red',flex:1,textAlign:'center'},
        headerStyle: {height: 48, backgroundColor: '#fff'},
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={styles.text}>我靠，这React-native的坑，真的是太深了，掉进去，爬不出来</Text>
                <Button
                    onPress={() => navigate('Chat', {user:'R'})}
                    title="Chat with Lucy"
                />
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



