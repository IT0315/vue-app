/**
 * @Author momoko
 * @Date 2018/5/24
 */

<template>
  <section :class="{'hips-content-scroll-x': scrollX, 'hips-content-scroll-y': scrollY,'hips-content-scrolling': scrolling}" class="hips-content">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'HContent',
  props: {
    scrollX: {
      // 是否开启X轴滚动
      type: Boolean,
      default: false
    },
    scrollY: {
      // 是否开启Y轴滚动
      type: Boolean,
      default: true
    },
    scrolling: {
      // 是否开启ios惯性滚动。注意：在 ios11 上可能会出现顶部渲染空白填充的问题，这是 ios11 的 bug
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/import.styl';

.hips-content {
  flex: 1;
  overflow: hidden;
  background-color: $bgColor;
  position: relative;

  &.hips-content-scroll-x {
    overflow-x: scroll;
  }

  &.hips-content-scroll-y {
    overflow-y: scroll;
  }

  &.hips-content-scrolling {
    -webkit-overflow-scrolling: touch;
  }
}
</style>
