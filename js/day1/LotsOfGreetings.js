import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
// 使用自定义的组件
import { Greeting } from './Greeting'
export default class extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}