/**
 * 一些帮助函数
 * @author momoko
 */

/**
 * 判断平台
 * @return {String} 平台
 */
export function detectOS () {
  const ua = navigator.userAgent.toLowerCase()

  if (/MicroMessenger/i.test(ua)) {
    return 'weixin'
  } else if (/iPhone|iPad|iPod|iOS/i.test(ua)) {
    return 'ios'
  } else if (/Android/i.test(ua)) {
    return 'android'
  } else {
    return 'other'
  }
}
