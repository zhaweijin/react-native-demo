import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

var Dimensions = require("Dimensions");
var totalWidth = Dimensions.get('window').width;// 屏幕宽度
let naviButtonWidth = totalWidth / 4;    //计算导航条每个宽度
let naviButtonHeight = naviButtonWidth * 0.75;   // 导航条每个高度
export default class NaviBar extends Component {
    // 构造
    constructor(props) {
        super(props);
        this._tab0Pressed = this._tab0Pressed.bind(this);
        this._tab1Pressed = this._tab1Pressed.bind(this);
        this._tab2Pressed = this._tab2Pressed.bind(this);
        this._tab3Pressed = this._tab3Pressed.bind(this);
    }

    //四个按钮 被按下时处理函数
    _tab0Pressed() {
        this.props.onNaviBarPress(0);
    }

    _tab1Pressed() {
        this.props.onNaviBarPress(1);
    }

    _tab2Pressed() {
        this.props.onNaviBarPress(2);
    }

    _tab3Pressed() {
        this.props.onNaviBarPress(3);
    }

    render() {
        //通过属性得知哪个导航按钮是当前导航页, 这个导航用灰色背景
        //利用JavaScript数组的map函数,从一个数组对应生成另一个数组buttonColors
        // 看不懂该函数的,看下面的解释
        var buttonColors = this.props.naviBarStatus.map(function (aNumber) {
            if (aNumber == 0) return 'white';
            return 'gray';
        });
        return (
            //根View
            <View style={styles.naviRow}>
                <TouchableHighlight onPress={this._tab0Pressed}>
                    <View style={[styles.button,{backgroundColor:buttonColors[0]}]}>
                        <Text style={styles.textStyle1}>
                            条目一
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._tab1Pressed}>
                    <View style={[styles.button,{backgroundColor:buttonColors[1]}]}>
                        <Text style={styles.textStyle1}>
                            条目二
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._tab2Pressed}>
                    <View style={[styles.button,{backgroundColor:buttonColors[2]}]}>
                        <Text style={styles.textStyle1}>
                            条目三
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._tab3Pressed}>
                    <View style={[styles.button,{backgroundColor:buttonColors[3]}]}>
                        <Text style={styles.textStyle1}>
                            条目四
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
// 声明属性, 方便使用当前组件
/*NaviBar.propTypes = {
    naviBarStatus: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    onNaviBarPress: React.PropTypes.func.isRequired
};*/

//样式 
const styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row'
    },
    button: {
        width: naviButtonWidth,
        height: naviButtonHeight,
        justifyContent: 'center'
    },
    textStyle1: {
        fontSize: 20,
        textAlign: 'center'
    }
});
