import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
const regeneratorRuntime = require('../../utils/runtime.js'); //解决async await 使用
import RowMenu from '../../components/index/RowMenu';
import VideoView from "../../components/VideoView/index";
import './index.less';
let Index = class Index extends Taro.Component {
  //<any,any> 第一个any代表props，第二个代表state
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.state = {
      taroEnv: props.globalStore['taroEnv']
    };
  }
  componentWillMount() {}
  componentWillReact() {
    console.log('componentWillReact');
  }
  componentDidMount() {}
  render() {
    const { indexStore: { getSwiperList, getVideoList } } = this.props;
    return <View className="index">
        <RowMenu />
        
        <VideoView getVideoList={getVideoList} />
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
Index.options = {
  addGlobalClass: true
};
Index = __decorate([inject('globalStore', 'indexStore'), observer], Index);
export default Index;