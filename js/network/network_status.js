/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, NetInfo, Linking} from 'react-native';
import Api from '../common'

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo: null,
        };
    }

    componentDidMount() {
        //检测网络是否连接
        NetInfo.isConnected.fetch().done((isConnected)=>{
            this.setState({isConnected});
            console.log("isConnected=="+isConnected);
        })

        //检测网络连接信息
        NetInfo.fetch().done((connectionInfo)=>{
            this.setState({connectionInfo});
            console.log("connectionInfo=="+connectionInfo);
        })

        //监听网络变化事件
        NetInfo.addEventListener('change',(status)=>{
            console.log("add network change=="+status);
        })

    }

    componentWillUnmount() {
        NetInfo.removeEventListener('change',(status)=>{
        })
    }


    goWeixin() {
        Linking.canOpenURL('weixin://')
            .then((supported) => {
                if (supported) {
                    Linking.openURL('weixin://');
                } else {
                    Api.toast(`请先安装XXX`);
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>this.goWeixin()}>跳转到微信</Text>
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
