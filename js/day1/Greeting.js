import React, { Component } from 'react';
import { Text } from 'react-native';
/**
 * 下面我们自定义一个组件Greeting 并指定一个属性名为name
 */
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}
