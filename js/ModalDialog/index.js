/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
    TextInput,TouchableOpacity,
    Modal,TouchableHighlight,
    Dimensions,} from 'react-native';



let screenWidth = Dimensions.get('window').width;
let dialogWidth = screenWidth-80;

type Props = {};
export default class DodalDialog extends Component<Props> {


    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    onClose() {
        this.setState({
            modalVisible: false
        });
    }


    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    >

                        <View style={styles.container}>
                            <View style={styles.innerContainer}>
                                <Text>Title</Text>
                                <TextInput
                                    style={styles.inputtext}
                                    placeholder="Type here!"
                                />
                                <View style={styles.btnContainer}>
                                    <TouchableHighlight onPress={() => {
                                          this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                        <Text style={styles.hidemodalTxt}>关闭</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>

                </Modal>

                <TouchableHighlight onPress={() => {
                      this.setModalVisible(true)
                }}>
                    <Text>弹出对话框</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20

    },
    btnContainer:{
        width:dialogWidth,
        borderTopWidth:1,
        borderTopColor:'#777',
        alignItems:'center'
    },
    inputtext:{
        width:dialogWidth-20,
        margin:10,
    },
    hidemodalTxt: {
        marginTop:10,
    },
});


