/**
 * login test
 * *****/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native';


/**
 * 导入外部函数，变量的方法
 * 如果定义的是export default class，那么导入就不需要大括号，其他都需要大括号方式
 */
import {age,name,userConfirm} from './common'
import Api from './common'
import Header from './header'


type Props = {};
let margin_of = Dimensions.get('window').width*0.05;

/*export default class Login extends Component<Props>{

    render(){
        console.warn("login test!!!")
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder={"请输入手机号"}/>
                <Text style={styles.textPrompStyle}>你输入的手机号:</Text>
                <TextInput style={styles.textInputStyle} placeholder={"请输入密码"} secureTextEntry={true}/>
                <Text style={styles.bigTextPrompStyle}>确定</Text>
            </View>
        );
    }
}*/

var width = Dimensions.get("window").width;
export default class Login extends Component<Props>{

    constructor(props){
        super(props);
        this.state = {
            inputNumed: '',
            inputPWed: ''
        }

        //this.updatePW = this.updatePW.bind(this)
        //this.updateNum = this.updateNum.bind(this)
    }

    /**
     * (newText) => { updateNum(newText) }
     * @param newText
     */
    updateNum(newText){
        this.setState(() => {
            return{
                inputNumed:newText,
            }
        })
    }

    updatePW(newText){
        this.setState(() => {
            return{
                inputPWed:newText,
            }
        })
    }

    updateNum2(inputNumed){
        this.setState({inputNumed})
    }

    /**
     * onChangeText={this.updateNum3}
     * @param newText
     */
    updateNum3 = (newText) => {
        this.setState((state) =>{
            return{
                inputNumed: newText,
            }
        })
    }

    option1select() {
        console.log("sdsd");
    }

    render(){
        return(
          <View style={styles.container}>
              {/*账号输入框在这里用View包裹以便处理器样式*/}
              <View style={styles.textInputViewStyle}>
                  <TextInput style={styles.textInputStyle2}
                             placeholder={"手机"}
                             onChangeText={this.updateNum.bind(this)}>
                  </TextInput>
              </View>

              <View style={styles.textPrompStyle}>
                  <Text>您输入的手机号:{this.state.inputNumed}</Text>
              </View>

              {/*密码输入框*/}
              <View style={styles.textInputViewStyle}>
                  <TextInput style={styles.textInputStyle2}
                             placeholder={"密码"} secureTextEntry={true}>
                  </TextInput>
              </View>


              {/*设置控件可点击*/}
              <TouchableOpacity onPress={()=>userConfirm()}>
                  <View style={styles.textLoginViewStyle}>
                      <Text style={styles.textLoginStyle}>登录</Text>
                  </View>
              </TouchableOpacity>


              {/*设置控件可点击*/}
              <TouchableOpacity onPress={()=>test()}>
                  <View style={styles.textLoginViewStyle}>
                      <Text style={styles.textLoginStyle}>测试外部变量</Text>
                  </View>
              </TouchableOpacity>

              {/*外面引入*/}
              <Header/>



          </View>
        );



        function test() {
            Api.aa()
            return alert("点击登录---"+age+"name="+name)
        }

    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "white",
        marginTop: 140,
    },
    textInputViewStyle: {
        width: width-30,
        height: 45,
        borderRadius: 20,
        borderColor: 'blue',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
    },

    textInputStyle2: {
        width: width - 100,
        height: 30,
        //paddingLeft: 8,
        backgroundColor: '#00000000',
        //fontSize: 10,
        paddingVertical: 0,
        marginTop: 4,
    },


    textLoginViewStyle: {
        width: width - 30,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textLoginStyle: {
      fontSize: 20,
      color: 'white',
    },

    textInputStyle: {
        fontSize: 30,
        backgroundColor: 'green',
        margin: margin_of,
    },
    textPrompStyle: {
        fontSize: 20,
        margin: margin_of,
    },

    bigTextPrompStyle: {
        margin: margin_of,
        backgroundColor: "gray",
        color: "white",
        textAlign: "center",
        fontSize: 32,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

/**
 * 调试环境告知其他类调用传入参数的类型
 * @type {{aa: (*), bb: React$PropType$Primitive.<number>}}
 */
/*
Login.propTypes = {
    aa : React.propTypes.string,
    bb : React.propTypes.number,
}*/
