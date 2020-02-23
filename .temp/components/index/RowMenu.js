import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import '../../pages/index/index.less';
class RowMenu extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        text: '推荐',
        active: true
      }]
    };
  }
  componentDidMount() {}
  handleClick(i) {
    console.log('iiii', i);
    let cur = this.state.list;
    cur.forEach((item, j) => {
      if (j === i) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    this.setState({
      list: cur
    });
  }
  render() {
    console.log('list==menu', this.state.list);
    return <View className="menu-box">
        <View className="wrapper">
          {this.state.list.map((item, i) => {
          return <View className={'menu-item ' + (item.active ? 'item-hover' : '')} key={i} onClick={this.handleClick.bind(this, i)}>
                  <Text>{item.text}</Text>
                  <Text className="border"></Text>
                </View>;
        })}
        </View>


      </View>;
  }
}
RowMenu.options = {
  addGlobalClass: true
};
export default RowMenu;