/**
 * 基础 mixins
 */

import { case2Param } from '../utils'

const preName = 'hips'

export default {
  methods: {
    /**
     * 生成 css class helper
     * c()               // 'hips-componentName'
     * c('wrap')         // 'hips-componentName-wrap'
     * c('wrap--active') // 'hips-componentName-wrap--active'
     * @param {String} className 类名
     * @returns String
     */
    c (className) {
      const { name } = this.$options // 组件名

      return className ? `${preName}-${case2Param(name)}-${className}` : `${preName}-${case2Param(name)}`
    },
  },
}
