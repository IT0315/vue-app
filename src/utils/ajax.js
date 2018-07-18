var url = 'api/xxxx'

// 封装一个get请求的方法
function getJSON (url) {
  return new Promise(function (resolve, reject) {
    // 利用Ajax发送一个请求
    var XHR = new XMLHttpRequest() //  新建一个XMLHttpRequest对象
    XHR.open('GET', url, true) //  创建http请求
    XHR.send() // 发送请求

    // 设置监听状态回调函数 等待结果
    XHR.onreadystatechange = function () {
      if (XHR.readyState === 4) {
        if (XHR.status === 200) {
          try {
            var res = JSON.parse(XHR.responseText)
            // 得到正确的结果修改状态并将数据传递出去
            resolve(res)
          } catch (e) {
            reject(e)
          }
        } else {
          // 得到错误的结果并抛出异常
          reject(new Error(XHR.statusText))
        }
      }
    }
  })
}

// 封装好以后，使用就很简单了
getJSON(url).then(function (res) {
  console.log(res)
})
