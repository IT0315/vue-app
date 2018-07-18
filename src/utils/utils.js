// 判断是不是手机号
export function checkMobile (s) {
  let length = s.length
  let myreg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (length === 11 && myreg.test(s)) {
    return true
  } else {
    return false
  }
}

// 判断是不是中文名
export function checkName (n) {
  let reg = /^([\u4e00-\u9fa5]){2,6}$/ // 只能是中文，长度为2-7位
  if (reg.test(n)) {
    return true
  } else {
    return false
  }
}

// 日期格式与时间戳转换
export function changeDate (d) {
  let date = new Date(d.replace(/-/g, '/'))
  let time = date.getTime()
  return time
}
