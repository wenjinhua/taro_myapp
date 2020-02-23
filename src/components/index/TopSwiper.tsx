import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem,Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import '../../pages/index/index.less'

type PageProps = {
  list: Array<string>
}

class TopSwiper extends Component<any,PageProps> {
  constructor(props){
    super(props)
  }
  static options = {
    addGlobalClass: true
  }

  componentDidMount () {

  }


  render () {
    console.log('list==',this.props.list)
    return (
      <Swiper
        className='top-swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        {
          this.props.list.map((item,i)=>{
            return (
              <SwiperItem key={i}>
                <View className='item'>
                  <Image className='img' src={item}></Image>
                </View>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    )
  }
}

export default TopSwiper
