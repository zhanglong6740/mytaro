import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/video/index',
      'pages/history/index',
      'pages/video/detail',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath:'./images/GUNDAM1.jpg',
        selectedIconPath:'./images/GUNDAM1.jpg',
      }, {
        pagePath: "pages/video/index",
        text: "剧集",
        iconPath: './images/GUNDAM1.jpg',
        selectedIconPath: './images/GUNDAM1.jpg'
      },{
        pagePath: "pages/history/index",
        text: "历史",
        iconPath: './images/GUNDAM1.jpg',
        selectedIconPath: './images/GUNDAM1.jpg',
      }],
      color: '#333',
      selectedColor: '',
      backgroundColor: '#fff',
      borderStyle: 'black'
    }
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
