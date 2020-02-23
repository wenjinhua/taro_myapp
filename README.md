# progaram
### 简介
  该demo使用taro来开发多端的视频应用，使用的是video组件，其中视频的弹幕有video组件的弹幕属性，也有自己原生写的弹幕，其中的弹幕逻辑还较简单。
### 项目启动
  1. 安装依赖
    `
      cnpm i 
    `
  2. 开发环境启动
    `
      npm run dev:h5     //启动h5
      npm run dev:weapp  //启动微信小程序 
    `

### 一些坑
  1. 微信小程序不能加载本地的视频，在编译时加载不到，但是在预览时能加载到.
  2. taro.createVideoContext()在H5创建是undefined.(暂时不清楚原因)
  3. taro编译成微信小程序时，样式文件需和脚本文件在同一个目录下，否则加载不到样式.
    
  
