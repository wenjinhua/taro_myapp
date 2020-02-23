import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import '../../pages/index/index.less';
class TopSwiper extends Taro.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    console.log('list==', this.props.list);
    return <Swiper className="top-swiper" indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay>
        {this.props.list.map((item, i) => {
        return <SwiperItem key={i}>
                <View className="item">
                  <Image className="img" src={item}></Image>
                </View>
              </SwiperItem>;
      })}
      </Swiper>;
  }
}
TopSwiper.options = {
  addGlobalClass: true
};
export default TopSwiper;