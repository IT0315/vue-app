/**
 * @Author momoko
 * @Date 2018/5/24
 */

<template>
  <header class="hips-header">
    <section :style="{'flex':proportion[0] }" class="hips-header-left">
      <slot name="left">
        <div class="hips-header-btn"/>
      </slot>
    </section>

    <h1 :style="{'flex':proportion[1] }" class="hips-header-center">
      <slot name="center"/>
    </h1>

    <section :style="{'flex':proportion[2] }" class="hips-header-right">
      <slot name="right"/>
    </section>
  </header>
</template>

<script>
export default {
  name: 'HHeader',
  props: {
    proportion: {
      // slot left/center/right 横向面积比例
      type: Array,
      default: () => [1, 2, 1]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/stylus/import.styl';

$headerHeight:44px;

.hips-header {
  flex-shrink: 0;
  height: $headerHeight;
  background: #fff;
  display: flex;
  align-items: center;
  color: #4A4A4A;
  box-sizing: content-box;
  overflow: hidden;
  .hips-header-center {
    flex: 1;
    font-size: 17px;
    font-weight: 500;
    line-height: $headerHeight;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0;
    margin: 0;
    > * {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .hips-header-left, .hips-header-right {
    flex: 0.5;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .hips-header-left {
    text-align: left;
    .hips-header-btn {
      &:first-of-type {
        padding-left: 15px;
      }
    }
  }
  .hips-header-right {
    text-align: right;
    .hips-header-btn {
      justify-content: flex-end;
      &:last-of-type {
        padding-right: 15px;
      }
    }
  }
  // 头部按钮的推荐样式
  .hips-header-btn {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    min-width: 30px;
    height: 100%;
    overflow: hidden;
    vertical-align: middle;
    box-sizing: border-box;
  }
  // ios平台
  .hips-ios & {
    padding-top: 20px;
  }
}

// iPhoneX适配
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .hips-header {
    .hips-ios & {
      padding-top: 44px;
    }
  }
}
</style>
