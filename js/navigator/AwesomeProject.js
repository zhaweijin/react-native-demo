/**
 * Created by dm-md on 2018/10/8.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
export default class AwesomeProject extends Component {
    //告知Navigator 模块切换时的效果
    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }
    //根据传递的信息, 处理界面的切换
    renderScene(router, navigator) {
        //this._navigator = navigator;
        switch (router.name) {
            case 'Page1':
                return <Page1 navigator={navigator}/>;
            case 'Page2':
                return <Page2 navigator={navigator}/>;
            case 'Page3':
                return <Page3 navigator={navigator}/>;
            case 'Page4':
                return <Page4 navigator={navigator}/>;
        }
    }
    render() {
        return (
            //根View
            <Navigator
                initialRoute={{name:'Page1'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}
//AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

