/**
 * Created by dm-md on 2018/10/12.
 */
import React, {Component} from 'react';
import {
    View,
    AppRegistry,
    WebView,
    TouchableHighlight,
    Platform,
    Dimensions,
    BackHandler,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; //引入图标

export class CommonProblem extends Component {//自定义一个组件
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '常见问题',   //导航标题
            headerTitleStyle: {
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 16,
                color: '#FFF'
            },
            headerLeft: (
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={skin.main}
                    onPress={() => {
                        navigation.state.params.goBackPage();
                    }}
                >
                    <View style={{ paddingLeft: 20 }}>
                        <Icon name="arrow-left" size={30} style={{ color: '#FFF' }} />
                    </View>
                </TouchableHighlight>
            ),
            //导航左与导航右是为了让导航标题居中(Why?)
            headerRight: <View style={{ paddingRight: 20 }} />
        };
    };

    constructor(props) {
        super(props);
        this.nav = this.props.navigation;//导航
        // 添加返回键监听(对Android原生返回键的处理)
        this.addBackAndroidListener(this.nav);
    }
    componentDidMount() {
        this.props.navigation.setParams({//给导航中增加监听事件
            goBackPage: this._goBackPage
        });
    }

    //自定义返回事件
    _goBackPage = () => {
        //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
        } else {//否则返回到上一个页面
            this.nav.goBack();
        }
    };
    //获取链接
    getSource() {//config.HelpProblemUrlTest是webView的地址(一个独立的H5页面)
        if (!config.Release) {
            return config.HelpProblemUrlTest;
        }
        return config.HelpProblemUrl;
    }

    onNavigationStateChange = navState => {
        this.setState({
            backButtonEnabled: navState.canGoBack
        });
    };

    // 监听原生返回键事件
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.refs.webView.goBack();
            return true;
        } else {
            return false;
        }
    };
    render() {
        let { width } = Dimensions.get('window').width;
        return (
            <View style={{ backgroundColor: 'blue', flex: 1 }}>
                <WebView
                    source={{ uri: this.getSource() }}
                    style={{ flex: 10, justifyContent: 'center', alignItems: 'center', width: width }}
                    ref="webView"
                    onNavigationStateChange={this.onNavigationStateChange}
                />
            </View>
        );
    }
}