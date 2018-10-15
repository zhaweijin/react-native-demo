/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';


//########################
//########################
//########################
//########################      特别关注setState(),而不是setState=
//########################
//########################
//########################


type Props = {};
export default class ScrollViewDemo extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            imgDate: [
                "http://192.168.31.107:80/a.jpg",
                "http://192.168.31.107:80/b.jpg",
                "http://192.168.31.107:80/c.jpg",
                "http://192.168.31.107:80/d.jpg",
                "http://192.168.31.107:80/e.jpg",
            ],
        };

        this.carousel = this.carousel.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.onAnnotationEnd = this.onAnnotationEnd.bind(this);
    }

    //定时器
    carousel() {
        var ScrollView = this.refs.scrollview;
        const timer = 4000;

        console.log("carousel.......");

        let Index = this.state.currentIndex;
        this.carouselTimer = setInterval(() => {
            Index===this.state.imgDate.length - 1 ? Index = 0 : Index++
            console.log("index=="+Index);
            this.setState({currentIndex: Index}, () => {
                const currentX = Index * Dimensions.get('window').width;
                ScrollView.scrollResponderScrollTo({x: currentX, animated: true})
            })
        }, timer);
    }




    //拖动结束，开启定时器
    dragEnd(e) {
        console.log("dragEnd..."+e.nativeEvent.contentOffset.x);
        this.carousel();
    }


    //开始拖动，关闭定时器
    dragStart(e) {
        console.log("dragStart..."+e.nativeEvent.contentOffset.x);
        clearInterval(this.carouselTimer);
    }

    componentDidMount() {
        this.carousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselTimer);
    }

    dotClick(index) {
        var ScrollView = this.refs.scrollview;
        clearInterval(this.carouselTimer);
        this.setState({currentIndex: index}, () => {
            const currentX = this.state.currentIndex * Dimensions.get('window').width;
            ScrollView.scrollResponderScrollTo({x: currentX, animated: true})
        })
    }



    //当一帧滚动完毕时，重新设置当前图片的索引
    onAnnotationEnd(e){
        console.log("animaltation end...");
        const offSetX = e.nativeEvent.contentOffset.x;
        const Index = offSetX/Dimensions.get('window').width;
        this.setState({
            currentIndex:Index
        })
    }


    render() {
        const screenWidth = Dimensions.get('window').width;
        const imageDataList = this.state.imgDate.map((elem, index) => {
            return (
                <Image key={index} style={{width:screenWidth,height:240}} source={{uri:elem}}></Image>
            )
        });
        const dotList = this.state.imgDate.map((elem, index) => {
            return (
                <Text onPress={this.dotClick.bind(this,index)} key={index}
                      style={[styles.dotStyle,{backgroundColor:this.state.currentIndex===index?"red":"#fff"}]}></Text>
            )
        });


        return (
            <View >
                <Text style={styles.myTitleStyle}>ScrollView轮播图</Text>
                <ScrollView
                    ref="scrollview"
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled={true}
                    onScrollBeginDrag={this.dragStart}
                    onScrollEndDrag={this.dragEnd}
                    onMomentumScrollEnd={this.onAnnotationEnd}>
                    {imageDataList}
                </ScrollView>
                <View style={styles.dotView}>{dotList}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myTitleStyle: {
        flexDirection: 'row',
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 24,
        marginBottom: 24
    },
    dotStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 10,
    },
    dotView: {
        flexDirection: 'row',
        marginLeft: 15,
        position: 'absolute',
        bottom: 10
    }

});
