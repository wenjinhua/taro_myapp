import Nerv from "nervjs";
import Taro, { createVideoContext as _createVideoContext } from "@tarojs/taro-h5";
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
// import '../../pages/index/index.less'
// import 'taro-ui/dist/style/index.scss' 
import './index.less';
import "taro-ui/dist/style/components/icon.scss";
class List2Col extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [{
        id: '1',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }, {
        id: '2',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }, {
        id: '3',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }, {
        id: '4',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }, {
        id: '5',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }, {
        id: '6',
        url: 'http://f2er.meitu.com/program/index/tp-1.jpg'
      }],
      videoList: this.props.getVideoList,
      swiperList: [{
        src: 'https://i0.hdslb.com/bfs/archive/5daec9e54f66f78d6578802b239675fae2480699.jpg@1100w_484h_1c_100q.jpg',
        title: '官方mv库正式上线'
      }, {
        src: 'https://i0.hdslb.com/bfs/sycp/creative_img/202002/a6a3a4a352ce478f15f1981bd105cc50.jpg@1100w_484h_1c_100q.jpg',
        title: '让你每一口吃下的饭都散发魅力'
      }],
      playingId: ''
    };
  }
  componentDidMount() {
    console.log('videoList11111...', this.state.videoList);
  }
  render() {
    return <View className="video">
        <Swiper className="video-swiper" autoplay indicatorDots circular indicatorActiveColor="#ffffff">
          {this.state.swiperList.map((swiper, index) => {
          return <SwiperItem>
                        <Image src={swiper.src} />
                        
                    </SwiperItem>;
        })}
        </Swiper>
        <View className="video-box">
        {this.state.videoList.map((item, index) => {
          return <View className="video-item">
                    
                    <View className="video-cover">
                      <Image src={item.image} onClick={() => this.onImageClick(item.id)} />
                      <View className="cover-info">
                        <Text><AtIcon value="play" size="20" />{item.broadNum}</Text>
                        <Text>{item.duration}</Text>
                      </View>
                    </View>
                    <View className="video-title">
                      <Text>{item.title}</Text>
                    </View>
                  </View>;
        })}
      </View>
      </View>;
  }
  videoPlay = id => {
    let { playingId } = this.state;
    if (playingId) {
      if (id != playingId) {
        let videoContext = _createVideoContext(playingId, this);
        console.log('videoContext', videoContext);
        videoContext.pause();
      }
    } else {
      this.setState({
        playingId: id
      });
    }
    //跳转到视频详情页
    Taro.navigateTo({ url: `/subPackages/videodetail/index?videoId=${id}` });
  };
  onImageClick = id => {
    Taro.navigateTo({ url: `/subPackages/videodetail/index?videoId=${id}` });
  };
}
List2Col.options = {
  addGlobalClass: true
};
export default List2Col;