import React, {Component} from 'react';
import { View } from 'react-native';
// 使用自定义的组件
//import Greeting from './Greeting';   //导入方法一
import { Greeting } from './Greeting'; //导入方法二
export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name="Rexxar"/>
                <Greeting name="Jaina"/>
                <Greeting name="Valeera"/>
            </View>
        );
    }
}