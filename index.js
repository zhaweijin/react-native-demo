/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './js/js_test'
import Login from './js/login'


import Launcher from './js/launcher'
import Day1 from './js/day1/day1'
import Day3 from './js/day3/day3'

import Blink from './js/Blink'
import Lots from './js/day1/LotsOfGreetings'
import NavApp from './js/allnavigator/NavApp'
import AwesomeProject from './js/navigator/AwesomeProject'
import ScrollViewDemo from './js/scrollview/scrollview_test'
import SwiperDemo from './js/scrollview/swiper'
import SwiperDemo2 from './js/scrollview/swiper2'
import Basic from './js/scrollview/components/Basic/index'
import Dynamic from './js/scrollview/components/Dynamic/index'
import LoadMinimal from './js/scrollview/components/LoadMinimal/index'
import Phone from './js/scrollview/components/Phone/index'
import PhoneView from './js/scrollview/components/PhotoView/index'
import Swiper from './js/scrollview/components/Swiper/index'
import SwiperNumber from './js/scrollview/components/SwiperNumber/index'
import ImageShow from './js/scrollview/components/ImageViewerDemo/imageShow'
import ImageSave from './js/scrollview/components/SaveImageToLocal/index'
import ListViewTest from './js/listview/listview_test'
import ActiveInticator from './js/day5/ActiveInticator'
import Timer from './js/day5/Timer'
import ProgressView from './js/day5/ProgressBar'
import Switch from './js/day5/Switch'
import StackNavigator from './js/StackNavigator/index'
import ModalDialog from './js/ModalDialog/index'
import PopDialog from './js/popdialog/index'
import NetwofkStatus from './js/network/network_status'
import AutoComplete from './js/network/AutoComplete'
import WebViewExample from './js/network/WebViewExample'
import RootWebViewApp from './js/network/RootApp'
import IconTest from './js/Icon/IconTest'
import GetPhoto from './js/camera/GetPhoto'
//import PickerImage from './js/camera/PickImage'
//import CropImage from './js/camera/CropImage'


AppRegistry.registerComponent(appName, () => GetPhoto);

