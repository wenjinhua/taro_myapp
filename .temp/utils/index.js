import Taro, { getSystemInfoSync as _getSystemInfoSync } from "@tarojs/taro-h5";
const logError = (name, action, info) => {
  if (!info) {
    info = 'empty';
  }
  let device = '';
  try {
    let deviceInfo = _getSystemInfoSync(); // 这替换成 taro的
    device = JSON.stringify(deviceInfo);
  } catch (err) {
    console.error('not support getSystemInfoSync api', err.message);
  }
  // let time = formatTime(new Date())
  let time = new Date();
  console.error(time, name, action, info, device);
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info);
  }
};
export { logError };