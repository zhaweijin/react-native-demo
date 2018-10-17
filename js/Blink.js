import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        // 这里定义一个state名为showText默认值是true
        this.state = { showText: true };


        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            });
        }, 1000)
        // 每1000毫秒对showText状态做一次取反操作,相当于一个定时器
        /*setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);*/
    }

    render() {
        // 根据当前showText的值决定是否显示text内容，这行代码相当于Java中的三目运算
        let display = this.state.showText ? this.props.text : ' ';
        return (
            // 这里通过一个变量去显示一个属性text，通过上面的this.props.text来指定具体显示的是什么内容，和上面的例子相比就是通过定义了一个变量的方式接收了一下这个属性值而已
            <Text>{display}</Text>
        );
    }
}

 export default class BlinkApp extends Component {
    render() {
        return (
            // 使用组件 并 给属性text赋值
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

