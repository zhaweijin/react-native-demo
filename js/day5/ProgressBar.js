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
import {Platform, StyleSheet, Text, View, Image,
    ActivityIndicator, ProgressViewIOS, ProgressBarAndroid} from 'react-native';

var count=0;

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            value:0,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            count = count + 0.1;
            if(parseInt(count)==1){
                count=0;
            }
            console.log("count=="+count);
            this.setState({
                    value: count,
                })
        }, 1000)
    }


    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        if(Platform.OS==='android'){
            return (
                <View >
                    <Text style={styles.welcome}>
                        ProgressViewAndroid使用实例
                    </Text>
                    <ProgressBarAndroid />
                    <ProgressBarAndroid animating={false}/>
                    <ProgressBarAndroid color='red'/>
                    <ProgressBarAndroid styleAttr={'Horizontal'} indeterminate={true} />
                    <ProgressBarAndroid styleAttr={'Horizontal'} indeterminate={false} progress={0.5}/>
                    <ProgressBarAndroid styleAttr={'SmallInverse'}/>
                    <ProgressBarAndroid styleAttr={'Horizontal'} indeterminate={false} progress={this.state.value}/>
                </View>
            );
        }else{
            return (
                <View >
                    <Text style={styles.welcome}>
                        ProgressViewIOS使用实例
                    </Text>
                    <ProgressViewIOS ref="progress1" style={styles.progressView}  progress={this.state.value}/>
                    <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>
                    <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={0.4}/>
                    <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6}/>
                    <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8}/>
                </View>
            );
        }
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
    progressView: {
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
    },
});
