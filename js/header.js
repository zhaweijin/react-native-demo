import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>hangge.com</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        marginTop:20,
        height:50,
        //borderBottomWidth:3/PixelRatio.get(),
        borderBottomColor:'#2D9900',
        alignItems:'center', /*使Text组件水平居中*/
        justifyContent:'center' /*使Text组件垂直居中*/
    },
    font:{
        color:"#2D9900",
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center' /*使文字在Text组件中居中*/
    },
});
