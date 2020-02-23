import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './index.less';
let Index = class Index extends Taro.Component {
  constructor() {
    super(...arguments);
  }
  componentWillMount() {}
  componentWillReact() {
    console.log('componentWillReact');
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="user">
        <Text>
          个人主页正在建设中...
        </Text>
      </View>;
  }
  config = {
    navigationBarTitleText: '我的'
  };
};
Index.options = {
  addGlobalClass: true
};
Index = __decorate([inject('counterStore'), observer], Index);
export default Index;