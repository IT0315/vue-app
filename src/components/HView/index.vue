/**
 * @Author momoko
 * @Date 2018/5/24
 */

<template>
  <div :class="{'hips-ios': isIos}" class="hips-view">
    <slot />
  </div>
</template>

<script>
import { detectOS } from './utils'
export default {
  name: 'HView',
  props: {
    fullScreen: {
      // 是否为全屏应用，全屏子应用此项需设为true
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isIos: false
    }
  },
  created () {
    this.fullScreen && detectOS() === 'ios' && (this.isIos = true)
    var u = navigator.userAgent
    // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    this.isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/import.styl';

.hips-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // background-color: $bgColor;
}

// iPhoneX适配
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .hips-view.hips-ios {
    padding-bottom: 32px;
  }
}
</style>
