/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './js/js_test'
import Login from './js/login'


AppRegistry.registerComponent(appName, () => Login);

