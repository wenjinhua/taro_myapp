import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { createVideoContext as _createVideoContext } from "@tarojs/taro-h5";
import React from 'react';
import { View, Video, Text, Image, Input, Button } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import { observer, inject } from "@tarojs/mobx-h5";
import Barrage from '../../components/Barrage/index';
import './index.less';
import 'taro-ui/dist/style/index.scss';
import "taro-ui/dist/style/components/tabs.scss";
import avatar from '../../resource/test_avatar.png';
let VideoDetail = class VideoDetail extends Taro.Component {
  constructor(props) {
    super(props);
    this.barrages = [];
    this.initBarrages = [];
    //评论输入框change

    this.barrageRef = React.createRef();
    this.videoRef = React.createRef();
    this.state = {
      videoList: this.props.indexStore.getVideoList,
      commentList: [{
        avatar: avatar,
        author: '测试评论者',
        content: '是客户贷款还是肯定会',
        time: '2020.02.16 17:45'
      }],
      inputFocus: '',
      comment: '',
      danmuList: [],
      danmuContent: '',
      danmuList2: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 2s 出现的弹幕',
        color: '#ff0000',
        time: 2
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff0000',
        time: 3
      }, {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }]
    };
  }
  componentDidMount() {
    console.log('props', this.$router.params);
    this.initVideo();
  }
  render() {
    const src_test = 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400';
    const tabList = [{ title: '简介' }, { title: '评论' }, { title: '弹幕' }];
    let video = {};
    this.state.videoList.forEach(item => {
      if (item.id == this.$router.params.videoId) {
        video = item;
      }
    });
    let videoContext = _createVideoContext('video1', this);
    console.log('videoContext...', videoContext);
    return <View className="video-detail-box">
                <View className="video-box">
                    <Video id={video.id} src={video.url} title={video.title} autoplay={false} ref={this.videoRef} showMuteBtn={true} poster={'http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'}
        // onPlay={()=>this.videoPlay(video.id)}
        danmuBtn={true} enableDanmu={true} danmuList={this.state.danmuList2} bindtimeupdate={this.timeupdate} />
                    <Barrage ref={this.barrageRef} />
                </View>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.changeTab} className="tab-content">
                    <AtTabsPane current={this.state.current} index={0}>
                        <View className="video-detail">
                            <View className="author-info">
                                <View className="left">
                                    <Image src={video.author.avatar} className="avatar" />
                                    <View className="name-fans">
                                        <Text className="name">{video.author.name}</Text>
                                        <Text className="fans-num">{video.author.fansNum}粉丝</Text>
                                    </View>
                                </View>
                                <Button className="follow" size="mini">关注</Button>
                            </View>
                        </View>
                    </AtTabsPane>

                    <AtTabsPane current={this.state.current} index={1}>
                            <View className="comment-list-box">
                            {this.state.commentList.map((item, index) => {
              return <View className="comment-item">
                                        <Image className="comment-avatar" src={item.avatar} />
                                        <View className="comment-info">
                                            <Text className="author">{item.author}</Text>
                                            <Text className="content">{item.content}</Text>
                                            <Text className="time">{item.time}</Text>
                                        </View>
                                        <View className="operation">
                                            <Text className="comment-second" onClick={() => this.comment('second')}>评论</Text>
                                        </View>
                                    </View>;
            })}
                        </View>
                            <View className="comment-box">
                            <Input type="text" placeholder="写评论..." className={this.state.inputFocus ? 'input-focus' : 'comment-input'} onChange={e => this.commentInputChange(e)} onFocus={this.commentInputFocus} onBlur={this.commentInputBlur} />
                            {this.state.inputFocus && <View className="publishComment" onClick={this.publishComment}>发布</View>}
                        </View>
                    </AtTabsPane>

                    <AtTabsPane current={this.state.current} index={2}>
                        <View className="danmu-box">
                            <Input type="text" placeholder="发个友善的弹幕见证当下" className={'danmu-input'} onChange={e => this.danmuInputChange(e)} />
                            <Text className="danmu-send-text" onClick={this.sendDanmu}>发送</Text>
                        </View>
                    </AtTabsPane>
                </AtTabs>
                <View>
                </View>
            </View>;
  }
  commentInputChange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  commentInputFocus = () => {
    this.setState({
      inputFocus: true
    });
  };
  commentInputBlur = () => {
    this.setState({
      inputFocus: false
    });
  };
  publishComment = () => {
    console.log('comment...', this.state.comment);
    let commentList = this.state.commentList;
    commentList.push({
      avatar: avatar,
      author: '测试评论者',
      content: this.state.comment,
      time: this.getNewDate()
    });
  };
  getNewDate = () => {
    let date = new Date();
    console.log(date);
    let transverse = "-";
    let Verticalpoint = ":";
    let month = date.getMonth() + 1; //获取月份
    let strDate = date.getDate(); //获取具体的日期           
    let strHour = date.getHours(); //获取...钟点
    let strMinute = date.getMinutes(); //获取分钟数
    let strSeconde = date.getSeconds(); //获取秒钟数
    //判断获取月份 、 具体的日期 、...钟点、分钟数、秒钟数 是否在1~9
    //如果是则在前面加“0”
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    console.log(month);
    if (strDate >= 1 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (strHour >= 1 && strHour <= 9) {
      strHour = "0" + strHour;
    }
    console.log(strHour);
    if (strMinute >= 1 && strMinute <= 9) {
      strMinute = "0" + strMinute;
    }
    if (strSeconde >= 1 && strSeconde <= 9) {
      strSeconde = "0" + strSeconde;
    }
    //时间日期字符串拼接
    let NewDate = date.getFullYear() + transverse + month + transverse + strDate + " " + strHour + Verticalpoint + strMinute + Verticalpoint + strSeconde;
    //返回拼接字符串
    return NewDate;
  };
  changeTab = value => {
    this.setState({
      current: value
    });
  };
  danmuInputChange = e => {
    this.setState({
      danmuContent: e.target.value
    });
  };
  sendDanmu = () => {
    console.log('barrage...', this.barrageRef.current);
    this.barrageRef.current.send({
      content: this.state.danmuContent,
      color: 'red',
      time: '0'
    });
  };
  findBarrages = time => {
    //查找到的弹幕
    const barrages = [];
    const indexs = [];
    this.barrages.forEach((barrage, index) => {
      if (parseInt(barrage.time) == parseInt(time)) {
        barrages.push(barrage);
        indexs.push(index);
      }
    });
    return barrages;
  };
  initVideo = () => {
    this.getBarrages();
    const videoDOM = this.videoRef.current;
    const barrageComponent = this.barrageRef.current;
    console.log('videodom...', videoDOM);
    const barrages = this.findBarrages(videoDOM.currentTime);
    barrages.forEach(barrage => {
      barrageComponent.send(barrage);
    });
  };
  getBarrages = () => {
    const data = [{
      color: '#ffffff',
      content: '但是，部分进口是大部分',
      time: '0'
    }, {
      color: '#ffffff',
      content: 'askndkshdkfooooooooooo',
      time: '0'
    }, {
      color: '#ffffff',
      content: '7666666666',
      time: '0'
    }];
    const barrages = [];
    data.forEach(d => {
      barrages.push({
        color: d.color,
        content: d.content,
        time: Number(d.time)
      });
    });
    this.initBarrages = barrages;
    this.barrages = this.initBarrages.slice();
  };
  comment = level => {};
  timeupdate = () => {
    console.log('time update....');
  };

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
VideoDetail = __decorate([inject('indexStore'), observer], VideoDetail);
export default VideoDetail;