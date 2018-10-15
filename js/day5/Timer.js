/**
 * Created by dm-md on 2018/10/10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';

var t=0;

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log("timeout...test");
        this.timer = setTimeout(()=>{
            console.log("timeout...5000");
        },5000);

        this.timer2 = setInterval(()=>{
            t = t + 1;
            console.log("time interval...."+t);
        },1000);


    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.timer2 && clearInterval(this.timer2);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:30}}>Timer</Text>
                </View>
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
