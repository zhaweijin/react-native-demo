import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableOpacity, ListView, Image, Text, View} from 'react-native';
import Wine from "./NewWine.json";
let Dimensions = require("Dimensions");
let {width} = Dimensions.get('window');
import SimpleListView from './SimpleListview'
import SimpleListViewType from './SimpleListviewType'
import GroupListView from './GroupListview'


export default class listViewDemo extends Component {
    constructor(props) {
        super(props);
        //1.设置数据源
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        //2.设置返回数据
        this.state = {dataSource: ds.cloneWithRows(Wine.data)};
        //this.state = {dataSource: ds.cloneWithRows(NewWine.data)};
        thiz = this;

    }

/*{<View style={styles.container}>
     <TouchableOpacity style={styles.click_zone} onPress={()=>this._test()}>
     <Text style={styles.text_zone}>press me</Text>
     </TouchableOpacity>
     </View>*/

    render() {
        return (
            /*<ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}/>*/
            /*<SimpleListView/>*/
            /*<SimpleListViewType/>*/
            <GroupListView/>
        );
    }

    _test(){
        console.log("click@@@@");
    }


    _onItemPress(e) {
        let num = 0;
        if (Number.isFinite(e) == false) {
            num = Number.parseInt(e) + 1;
        } else {
            num = e + 1;
        }
        console.log(">>>点击第 " + num + " 行");
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>{thiz._onItemPress(rowID)}}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}}
                           style={styles.leftImageStyle}/>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name}
                        </Text>
                        <Text style={styles.bottomTitleStyle}>{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    cellViewStyle: {
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: "#e8e8e8",
        flexDirection: 'row',
    },
    leftImageStyle: {
        marginRight: 15,
        width: 60,
        height: 60
    },
    rightViewStyle: {
        justifyContent: "center",
        width: width * 0.8,
    },
    topTitleStyle: {
        color: "red",
        fontSize: 20,
    },
    bottomTitleStyle: {
        color: "blue",
        fontSize: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    click_zone: {
        width: 200,
        height: 80,
        backgroundColor: 'gray',
    },
    text_zone: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },
});

