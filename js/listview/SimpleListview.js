/**
 * Created by dm-md on 2018/10/10.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';
var Dimensions = require('Dimensions');//获取屏幕的宽高
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class SimpleListview extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getRows({}))//初始化数据源
        };
    }

//制作假数据
    getRows(){
        var dataArr = [];
        for (var i = 0; i < 100; i++) {
            dataArr.push({
                title: 'Row' + i,
                text: 'Lorem ipsum dolor sit amet, ius ad pertinax oportere' + i,
            });
        }
        return dataArr;
    }

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}//设置数据源
                renderRow={this.renderRow}//返回cell
            />        )
    }


    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <View style={styles.rightViewStyle}>
                <Image style={styles.imageStyle}/>
                <View>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                    <Text style={styles.textStyle}>{rowData.text}</Text>
                </View>
            </View>        )
    }
}
//样式
const styles = StyleSheet.create({
    tabStyle: {
        flex: 1
    },
    rightViewStyle: {
        flexDirection: 'row',
        borderBottomColor: '#CCCCCC',//cell的分割线
        borderBottomWidth: 1
    },
    imageStyle: {
        width: 80,
        height: 80,
        margin: 20,
        backgroundColor: 'red'
    },
    titleStyle: {
        marginTop: 20,
        backgroundColor: 'yellow'
    },
    textStyle: {
        width: ScreenWidth - 140,
        backgroundColor: 'green',
        marginBottom: 20
    }
});

