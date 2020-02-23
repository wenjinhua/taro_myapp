import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/mobx-h5";

import globalStore from './store/global';
import indexStore from './store/index';
import './app.less';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = {
  globalStore,
  indexStore
};
class App extends Component {
  state = {
    __tabs: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "/pages/index/index",
        iconPath: require("././assets/tab-bar/home.png"),
        selectedIconPath: require("././assets/tab-bar/home-active.png"),
        text: "首页"
      }, {
        pagePath: "/pages/user/index",
        iconPath: require("././assets/tab-bar/user.png"),
        selectedIconPath: require("././assets/tab-bar/user-active.png"),
        text: "我的"
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentDidMount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/user/index',
            componentLoader: () => import( /* webpackChunkName: "user_index" */'./pages/user/index'),
            isIndex: false
          }, {
            path: '/subPackages/videodetail/index',
            componentLoader: () => import( /* webpackChunkName: "subPackages_videodetail_index" */'./subPackages/videodetail/index'),
            isIndex: false
          }]} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/user/index"],
    subPackages: [{
      root: 'subPackages/',
      pages: ["/videodetail/index"],
      independent: true //设置分包为独立分包
    }],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小程序测试',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#666", selectedColor: "#b4282d", backgroundColor: "#fafafa", borderStyle: 'black', list: [{ pagePath: "/pages/index/index", iconPath: require("././assets/tab-bar/home.png"), selectedIconPath: require("././assets/tab-bar/home-active.png"), text: "首页" }, { pagePath: "/pages/user/index", iconPath: require("././assets/tab-bar/user.png"), selectedIconPath: require("././assets/tab-bar/user-active.png"), text: "我的" }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));