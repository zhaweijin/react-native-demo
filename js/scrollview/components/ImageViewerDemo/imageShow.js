import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    CameraRoll,
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
const images = [
    {
        url: 'http://192.168.31.107:80/c.jpg',
    },
    {
        url: 'http://192.168.31.107:80/b.jpg',
    },
    {
        url: 'http://192.168.31.107:80/a.jpg',
    },
    {
        url: 'http://192.168.31.107:80/d.jpg',
    },
];

var curentImage = 1;
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

async function requestCameraPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title': 'Cool Photo App camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera")
        } else {
            console.log("camera permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}

export default class Component06 extends Component {

    constructor(props){
        super(props);
        this.state = {
            animating: true,
        };
        this.renderLoad = this.renderLoad.bind(this);
        this.savePhoto = this.savePhoto.bind(this);
        requestCameraPermission()
    }





    renderLoad(){
        return (
            <View style={{ marginTop: (screenHeight / 2) - 20 }}>
                <ActivityIndicator animating={this.state.animating} size={"large"} />
            </View>
        )
    }

    savePhoto(url) {
        alert("url--"+url);
        //let index = this.props.curentImage;
        //let url = this.props.imaeDataUrl[index];
        /*let promise = CameraRoll.saveToCameraRoll(url);
        promise.then(function (result) {
            alert("已保存到系统相册")
        }).catch(function (error) {
            alert('保存失败！\n' + error);
        });*/
    }


    click(){
        alert("url===");
    }

    render() {
        return (
            <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>

                <ImageViewer
                    imageUrls={images}
                    enableImageZoom={true} // 是否开启手势缩放
                    saveToLocalByLongPress={true}  //长按拉起保存,不要开启调试模式，不然就变成点击长按了
                    //index={curentImage} // 初始显示第几张 0,1,2...
                    //failImageSource={"http://192.168.31.107:80/e.jpg"} // 加载失败图片
                    //loadingRender={this.renderLoad} //加载中显示的view
                    //enableSwipeDown={false}  //true 允许手动拖到屏幕底下
                    menuContext={{ "saveToLocal": "a保存图片", "cancel": "b取消" }}
                    onChange={(index) => { console.log("current index----"+index)}} // 图片切换时触发
                    onClick={this.click.bind(this)}  // 图片单击事件
                    onSave={(url) => { this.savePhoto(url) }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});