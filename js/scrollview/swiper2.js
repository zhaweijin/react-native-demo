/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

let width = Dimensions.get('window').width;

type Props = {};
export default class SwiperDemo2 extends Component<Props> {
    render() {
        return (
        <View style={styles.container}>
            {/*设置horizontal为竖向排列 autoplay为自动播放*/}
            <Swiper style={styles.wrapper} height={200} horizontal={false} autoplayTimeout={1}  >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>

            {/*<Swiper style={styles.wrapper} height={240} autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                    activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: 23, left: null, right: 10
                    }}

                    loop>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                    <Image resizeMode='stretch' style={styles.image} source={{uri: "http://192.168.31.107:80/a.jpg"}} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                    <Image resizeMode='stretch' style={styles.image} source={{uri: "http://192.168.31.107:80/b.jpg"}} />
                </View>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                    <Image resizeMode='stretch' style={styles.image} source={{uri: "http://192.168.31.107:80/c.jpg"}} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
                    <Image resizeMode='stretch' style={styles.image} source={{uri: "http://192.168.31.107:80/d.jpg"}} />
                </View>
            </Swiper>*/}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
    },


    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00FF00'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000FF'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width:width,
        flex: 1
    }

});
