/**
 * Created by dm-md on 2018/10/12.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    WebView,
} from 'react-native';


export default class WebViewExample extends Component {

    render() {
        return (
            <WebView
                /*          两种加载方式
                 *   加载网页 source:{{uri: '网址'}}
                 *   加载本地静态页面 source:{{html: '静态页面代码段'}}
                 */
                // source={{html: '<h1>这是加载的代码段</h1>'}}
                source={{uri: 'http://www.baidu.com'}}
                //加载状态显示
                startInLoadingState={true}
                //存储 IOS是默认支持的
                domStorageEnabled={true}
                //是否支持javascript
                javaScriptEnabled={true}
            />
        )
    }
}
