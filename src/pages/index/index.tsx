import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
const regeneratorRuntime = require('../../utils/runtime.js'); //解决async await 使用
import TopSwiper from '../../components/index/TopSwiper'
import RowMenu from '../../components/index/RowMenu'
import VideoView from '../../components/VideoView'

import './index.less'

type PageStateProps = {
  globalStore: {
    taroEnv: string
  },
  indexStore: {
    getSwiperList: Array<string>,
    getVideoList: Array<object>
  }
}

interface Index {
  props: PageStateProps;
}

@inject('globalStore','indexStore')
@observer
class Index extends Component<any,any> {
  //<any,any> 第一个any代表props，第二个代表state

  constructor(props){
    super(props)
    this.state = {
      taroEnv: props.globalStore['taroEnv']

    }
  }

  static options = {
    addGlobalClass: true
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
  }

  render () {
    const { indexStore: { getSwiperList, getVideoList } } = this.props
    return (
      <View className='index'>
        <RowMenu />
        {
          // getSwiperList && <TopSwiper list = { getSwiperList } />
        }
        <VideoView getVideoList = { getVideoList }/>
      </View>
    )
  }
}

export default Index  as ComponentType
