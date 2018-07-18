import http from '../utils/http'
// 取消预约
export function fetchData (data) {
  const url = 'api?sysName=HandMobile&apiName=query_history'
  return http.post(url, data)
}
