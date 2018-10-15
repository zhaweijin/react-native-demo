/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//导入StackNavigator这个组件
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Chat: {
        screen: ChatScreen,
    },

});


