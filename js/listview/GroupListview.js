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
export default class GroupListview extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };


        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    };


    getLocaData() {
        var Arr = {},
            sectionIDs = [],//所有区ID的数组
            rowIDs = [];//行ID数组
        //通过两次for循环创建假数据
        for (var i = 0; i < 10; i++) {
            sectionIDs.push(i);
            Arr[i] = {
                title:"names"+i,
                valuex:'section' + i,
            };

            rowIDs[i] = [];
            for (var j = 0; j < 5; j++) {
                rowIDs[i].push(j);
                Arr[i + ':' + j] = {
                    title:"namerow"+j,
                    valuex:'section' + i + '--row' + j,
                };
            }
        }
        //重新设置ListView的数据源，刷新表
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(Arr, sectionIDs, rowIDs)
        })
    }


    render() {
        return (
            <ListView//创建表，并设置返回section和cell的方法
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
                contentContainerStyle={styles.listViewStyle}/>

        )
    }

    componentDidMount() {
        this.getLocaData();
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View style={styles.cellStyle}>
                <Image style={styles.imageStyle}/>
                <Text>{rowData.valuex}</Text>
            </View>
        )
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionStyle}>
                <Text>{sectionData.title}</Text>
            </View>
        )
    }

}
//样式
const styles = StyleSheet.create({
    sectionStyle: {
        backgroundColor: 'gray',
        height: 25
    },
    cellStyle: {
        flexDirection: 'row', //设置横向布局
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        alignItems: 'center'//交叉轴的对齐方式
    },
    imageStyle: {
        width: 70,
        height: 70,
        backgroundColor: 'red',
        margin: 20
    },

});

