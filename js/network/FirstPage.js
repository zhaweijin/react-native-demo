/**
 * Created by dm-md on 2018/10/12.
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, BackHandler} from 'react-native';
import Api from '../common';

class FirstPage extends Component{
    // 在 navigator 的第一个组件中 （ 官方术语 ： 我们在App这一级别 ） 绑定事件 ， 按back键回退导航栈的功能
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.navigator) {
                let routes = this.props.navigator.getCurrentRoutes();
                let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象
                if (lastRoute.onHardwareBackPress) {// 先执行route注册的事件
                    let flag = lastRoute.onHardwareBackPress();
                    if (flag === false) {// 返回值为false就终止后续操作
                        return true;
                    }
                }
                if (routes.length === 1) {// 在第一页了,2秒之内点击两次返回键，退出应用

                    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                        //最近2秒内按过back键，可以退出应用。
                        return false;
                    }
                    this.lastBackPressed = Date.now();
                    Api.toast('再按返回退出应用');
                    return true;
                } else {
                    this.props.navigator.pop();
                }
            }
            return true;
        });
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',()=>{});
        }
    }


    render(){
        return (
            <TWebView />
        );
    }
}
