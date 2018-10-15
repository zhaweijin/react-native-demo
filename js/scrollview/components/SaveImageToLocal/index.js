/**
 * Created by dm-md on 2018/10/9.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    CameraRoll,
} from 'react-native';

//网络图片地址
var imgURL = "http://www.hangge.com/blog/images/logo.png";
import Api from '../../../common';

const PubSub = require('pubsub-js');    //用户组件间通讯，类似EventBus







//默认应用的容器组件
export default class App extends Component {

    constructor(props){
        super(props);
        Api.requestCameraPermission();
        this._onCallback = this._onCallback.bind(this);

    }

    componentDidMount() {
        this.handleEvent();
    }
    //渲染
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.img}
                           source={{uri: imgURL}}
                           resizeMode="contain" />
                </View>
                <View>
                    <Text onPress={this.saveImg.bind(this, imgURL)}
                          onCallback={this._onCallback} style={[styles.saveImg]}>
                        保存图片到相册
                    </Text>
                </View>
            </View>
        );
    }

    _onCallback(){
        alert("回调完成");
    }


    handleEvent() {
        console.log("222222");
        var mySubscriber = function (msg, data) {
            console.log(msg, data);
        };

        var token = PubSub.subscribe('MYTOPIC', mySubscriber);
    }




    //保存图片
    saveImg(img) {

        console.log("33333");
        //Api.DownloadImage(img);

        //Api.writeFile("carter");

        //Api.readFile();


        Api.Toast("toast test");
    }
}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems:'center'
    },
    image:{
        borderWidth:1,
        width:300,
        height:100,
        borderRadius:5,
        borderColor:'#ccc'
    },
    img:{
        height:98,
        width:300,
    },
    saveImg:{
        height:30,
        padding:6,
        textAlign:'center',
        backgroundColor:'#3BC1FF',
        color:'#FFF',
        marginTop:10,
    }
});