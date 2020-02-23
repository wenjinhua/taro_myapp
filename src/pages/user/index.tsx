import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {
  constructor() {
    super(...arguments)
  }

  config: Config = {
    navigationBarTitleText: '我的', //页面标题
  }

  static options = {
    addGlobalClass: true
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }



  render () {


    return (
      <View className='user'>
        <Text>
          个人主页正在建设中...
        </Text>
      </View>
    )
  }
}

export default Index as ComponentType
