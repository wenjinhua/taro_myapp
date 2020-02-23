import { observable, autorun, action } from 'mobx'
import cover from '../resource/cover.jpeg'
import avatar from '../resource/test_avatar.png'

const indexStore = observable({

  // topSwiperList: [
  //   'http://f2er.meitu.com/program/index/ss-1.jpg',
  //   'http://f2er.meitu.com/program/index/ss-2.jpg',
  //   'http://f2er.meitu.com/program/index/ss-3.jpg',
  // ],

  videoList: [
    {
      id: 'video1',
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      title: '大型追星现场！郑爽康辉神仙同框',
      broadNum: '218.9',
      duration: '5:30',
      image: cover,
      author: {
          name: '老趣味儿',
          avatar: avatar,
          fansNum: '517',
      }
    }, 
    {
      id: 'video2',
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      title: '米哈游最新力作！全新冒险启程！',
      broadNum: '879.6',
      duration: '5:30',
      image: cover,
      author: {
        name: '老趣味儿',
        avatar: avatar,
        fansNum: '517',
    }
    }
],

  get getVideoList(){
    return this.videoList.slice()
  }

})








export default indexStore
