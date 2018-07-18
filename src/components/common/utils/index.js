/**
 * 一些帮助函数
 */

/**
 * setTimeout 的 promise 封装
 * @param {Number} time
 * @returns
 */
export function timeout (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

/**
 * 断言
 * @param {any} condition 条件
 * @param {any} msg 信息
 */
export function assert (condition, msg) {
  if (!condition) throw new Error(`[hips] ${msg}`)
}

/**
 * 改变 case 格式为 param
 * @param {String} str 字符串
 */
export function case2Param (str) {
  assert(typeof str === 'string', 'case2Param 传入数据类型错误：应为 String')

  str = str.replace(/^[A-Z]/g, $0 => $0.toLowerCase())
  return str.replace(/[A-Z]/g, $0 => `-${$0.toLowerCase()}`)
}
