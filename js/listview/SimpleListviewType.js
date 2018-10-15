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
export default class SimpleListviewType extends Component{

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
    getRows() {
        var Arr = [];
        for (var i = 0; i < 100; i++) {
            Arr.push(
                {
                    image: '111',
                    price: 'name'+i,
                })
        }
        return Arr;
    }



    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}//设置数据源
                renderRow={this.renderRow}//返回cell
                contentContainerStyle={styles.listViewStyle}//设置cell的样式
            />
        )
    }


    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <View style={styles.bgStyle}>
                <Image style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{rowData.price}</Text>
            </View>
        )
    }
}
//样式
const styles = StyleSheet.create({
    listViewStyle:{
        flexDirection:'row', //设置横向布局
        flexWrap:'wrap'    //设置换行显示
    },
    bgStyle:{
        backgroundColor:'white',
        width:(ScreenWidth-40)/3, //cell的宽度
        height:200,
        marginLeft:10,
        marginTop:10
    },
    imageStyle:{
        width:(ScreenWidth-40)/3,
        height:150,
        backgroundColor:'red',
        marginBottom:0,
    },
    textStyle: {
        fontSize:20,
        marginBottom:5,
        backgroundColor:'green',
        textAlign:'center',
    },
});
