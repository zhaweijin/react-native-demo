/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

/**
 *  Image test*********************
 */

type Props = {};

let nativeImageSource = require('nativeImageSource');

export default class extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            row: false,
            me:'carter',
            isNativeImage:true,
        };

        this._refresh_mode = this._refresh_mode.bind(this,this.state.row)
        /**
         * bind(this) 的作用是，省去书写"（）=> " 语句，而只需要写绑定的参数就行
         *
         * @type {()}
         */
        this.onclickOne = this.onclickOne.bind(this);
        this._show = this._show.bind(this,"试试");

    }

    _refresh_mode(t) {
        this.setState({
          row: !t
        })
    }

    _show(text){
      alert('确认登录？'+text)
    }

    onclickOne(){
        alert("bind auto tips");
    }


    render() {
        let android_app_icon: {
            android:'ic_launcher',
        }
        if(this.state.isNativeImage) {
            return (
                <View style={styles.column_container}>
                  <Image style={styles.imageBigStyle}
                         source={ nativeImageSource({
                           android:'mipmap/ic_launcher',
                           width: 60,
                           height:60,
                         })}/>

                </View>
            );
        }else{
            return (
                <View style={this.state.row?styles.row_container:styles.column_container}>
                  <TouchableOpacity onPress={this._refresh_mode}>
                    <Text>press me switch mode</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.touch_style}
                                    onPress={ ()=> this.onclickOne()}>
                    <Text>press bind</Text>
                  </TouchableOpacity>

                  <Text style={styles.welcome}>Welcome to day!</Text>
                  <Image style={styles.imageStyle} source={require('../image/549.png')}/>
                  <Image style={styles.imageStyle} source={require('../image/5410.png')}/>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    row_container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    column_container:{
        flex: 1,
        flexDirection:'column',
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
    imageStyle: {
        width: 50,
        height: 50,
    },

    imageBigStyle: {
        width: 200,
        height: 200,
    },

    touch_style: {
        width: 100,
        height: 50,
        backgroundColor: 'gray'
    }


});
