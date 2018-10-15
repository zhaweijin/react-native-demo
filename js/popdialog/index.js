import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity } from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  FadeAnimation,
} from 'react-native-popup-dialog';
import Btn from "../Share/Btn";

aa:3;

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBar: {
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: 0.5,
        backgroundColor: '#ffffff',
    },
    navigationTitle: {
        padding: 10,

    },
    navigationButton: {
        padding: 10,
    },
    navigationLeftButton: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    navigator: {
        flex: 1,
    },
    tx_bottom_style: {
        color: '#ff0000',
        height: 120,
        textAlignVertical:'bottom',
        //backgroundColor:'gray',
    }
});

export default class Component04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogShow: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });


  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.container}>
          <Btn
            label="淡入淡出弹出框"
            onPress={()=>{this.refs.abc.show()}}
          />

          <Btn
            label="缩放弹出框"
            onPress={()=>{this.refs.aaa.show()}}
          />

          <Btn
            label="滑动弹出框"
            onPress={()=>{this.refs.ccc.show()}}
          />

          <Btn
            label="点击外部不能关闭的弹出框"
            onPress={()=>{this.refs.bbb.show()}}
          />
        </View>

        <PopupDialog
            ref="abc"
            dialogTitle={<DialogTitle title="弹出框 - 淡入淡出动画" />}
            width={0.8}
            height={0.4}
        >
          <View style={styles.dialogContentView}>
            <Text>淡入淡出动画,也是默认动画</Text>
            <Text style={styles.tx_bottom_style}>也是默认动画</Text>
          </View>
        </PopupDialog>

        <PopupDialog
          ref="aaa"
          dialogAnimation={scaleAnimation}
          dialogTitle={<DialogTitle title="弹出框 - 缩放动画" />}
          actions={[
            <DialogButton
              text="关闭"
              onPress={() => {
                this.refs.aaa.dismiss();
              }}
              key="button-1"
            />,
            <DialogButton
              text="确定"
              onPress={() => {
                this.refs.aaa.dismiss();
              }}
              key="button-2"
            />,
            <DialogButton
              text="取消"
              onPress={() => {
                this.refs.aaa.dismiss();
              }}
              key="button-2"
            />,
          ]}
        >
          <View style={styles.dialogContentView}>

          </View>
        </PopupDialog>

        <PopupDialog
          dialogTitle={<DialogTitle title="弹出框 - 滑动动画" />}
          ref="ccc"
          dialogAnimation={slideAnimation}
        >
          <View style={styles.dialogContentView}>
            <Text>弹出框 - 滑动动画</Text>
          </View>
        </PopupDialog>

        <PopupDialog
          ref="bbb"
          dialogTitle={<DialogTitle title="弹出框 - 点击外部不能关闭弹出框" />}
          width={0.8}
          height={0.6}
          haveOverlay= {false}
          dismissOnTouchOutside={false}
          actions={[
            <DialogButton
              text="关闭"
              onPress={() => {
                this.refs.bbb.dismiss();
              }}
              key="button-2"
            />,
          ]}
            >
            <View style={styles.dialogContentView}>
              <Text>点击外部不能关闭弹出框</Text>
            </View>
        </PopupDialog>

      </View>
    );
  }
}