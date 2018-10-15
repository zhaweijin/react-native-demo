import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class Home extends Component {

    componentDidMount() {
        Image.prefetch("http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg").then(
            (result) => {
                console.log("image get>>>>"+result)
            }
        ).catch(
            (error) => {
                console.log(">>>>error")
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('Details')
                    }
                }>
                    <Text style={{color: 'white'}}>首页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});