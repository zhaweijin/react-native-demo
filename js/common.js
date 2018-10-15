import {Alert} from 'react-native'
import { Platform, CameraRoll } from 'react-native';
import RNFS from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';
import Toast from 'react-native-root-toast'

export const age = 24;
export var name = "zhaweijin"

function press() {
    return alert("点击登录")
}

const PubSub = require('pubsub-js');

export function userConfirm() {
    Alert.alert('标题',
        '内容',
        [
            {
                text: '我知道了',
                onPress: bb(),
            }

        ]
    );
}




const api = {
    bb(){
         console.log("alert press .......bbbbb");
    },


    aa(){
        console.log("alert press .......aaaaaa");
    },

    DownloadImage(uri){
        if (!uri) return null;
        return new Promise((resolve, reject) => {
            let timestamp = (new Date()).getTime();//获取当前时间错
            let random = String(((Math.random() * 1000000) | 0))//六位随机数
            let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
            const downloadDest = `${dirs}/${timestamp+random}.jpg`;

            const formUrl = uri;
            const options = {
                fromUrl: formUrl,
                toFile: downloadDest,
                background: true,
                begin: (res) => {
                    // console.log('begin', res);
                    // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
                },
            };
            try {
                const ret = RNFS.downloadFile(options);
                ret.promise.then(res => {
                    console.log('success', res);
                    console.log('file://' + downloadDest)
                    var promise = CameraRoll.saveToCameraRoll(downloadDest);
                    promise.then(function(result) {
                         alert('保存成功！地址如下：\n' + result);
                    }).catch(function(error) {
                        //console.log('error', error);
                         alert('保存失败！\n' + error);
                    });
                    resolve(res);
                }).catch(err => {
                    reject(new Error(err))
                });
            } catch (e) {
                reject(new Error(e))
            }
        })
    },


    async requestPermission(permission) {
        try {
            const granted = await PermissionsAndroid.request(
                permission,
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
    },


    /*将文本写入本地 txt*/
    writeFile(content) {
        // create a path you want to write to
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath;
        const path = dirs + '/test.txt';

        // write the file
        RNFS.writeFile(path, content, 'utf8')
            .then((success) => {
                console.log('path', path);

            })
            .catch((err) => {
                console.log(err.message);
            });
    },



    /**
     * 在已有的txt上添加新的文本
     */
    appendFile() {
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath;
        const path = dirs + '/test.txt';

        return RNFS.appendFile(path, '新添加的文本', 'utf8')
            .then((success) => {
                console.log('success');
            })
            .catch((err) => {
                console.log(err.message);

            });
    },



    /*删除文件*/
    deleteFile() {
        // create a path you want to delete
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath;
        const path = dirs + '/test.txt';

        return RNFS.unlink(path)
            .then(() => {
                console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log(err.message);
            });
    },


    /*读取txt文件内容*/
    readFile() {
        // create a path you want to delete
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath;
        const path = dirs + '/test.txt';

        return RNFS.readFile(path)
            .then((result) => {
                console.log("result-----"+result);
                PubSub.publish( 'MYTOPIC', 'hello world!' );
            })
            .catch((err) => {
                console.log(err.message);

            });
    },


    toast(content){
        Toast.show(content, {
            duration: Toast.durations.LONG,   // toast显示时长
            position:Toast.positions.BOTTOM,  // toast位置
            shadow: true, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时
            onShow: () => {// toast出现回调（动画开始时）

            },
            onShown: () => {// toast出现回调（动画结束时）

            },
            onHide: () => {// toast隐藏回调（动画开始时）

            },
            onHidden: () => {// toast隐藏回调（动画结束时）

            }
        });
    },


    send(method, url, data, callback) {
        let request;
        if (method === 'get') {
            request = new Request(url, {
                method: 'GET',
                headers: ({
                    'Content-Type': 'application/json'
                })
            });
        } else if (method === 'post') {
            request = new Request(url, {
                method: 'POST',
                headers: ({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data)
            });
        }
        fetch(request,new Promise(function(resolve,reject){
            setTimeout(()=> reject(new Error('request timeout')),2000)
        })).then((response) => {
            return response.json()
        }).then((jsonData) => {
            callback(jsonData);//1
        }).catch((err) => {
            console.log("error=="+err);
        });
    },


}

export default api




