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
import {
    Platform, StyleSheet, Text, View, Image,
    ActivityIndicator, Button, Switch
} from 'react-native';

var t = 0;

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            value: false,
            disabled: false,
            changeTxt: '切换Switch',
        }
    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',paddingLeft:20}}>
                    <Button title={this.state.value?'关闭':'打开'}
                            onPress={()=>{this.setState({value:!this.state.value});}}></Button>
                    <Switch style={{marginLeft:20}} value={this.state.value} onTintColor='red' tintColor='blue'
                            thumbTintColor='black'/>
                </View>

                <View style={{flexDirection:'row',paddingLeft:20,marginTop:20}}>
                    <Button title={this.state.disabled?'启用':'禁用'}
                            onPress={()=>{this.setState({disabled:!this.state.disabled});}}></Button>
                    <Switch style={{marginLeft:20}} value={true} disabled={this.state.disabled}/>
                </View>

                <View style={{flexDirection:'row',paddingLeft:20,marginTop:20}}>
                    <Text>{this.state.changeTxt}</Text>
                    <Switch value={this.state.value} onValueChange={(value)=>{
                        this.setState({
                            value:value,
                            changeTxt:value?'switch 打开了':'switch 关闭了'
                        });
                    }}/>
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
