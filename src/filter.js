// 设置路由拦截
import router from './router/index'

router.beforeEach((to, from, next) => {
  console.log(to)
  // 根据字段判断是否路由过滤
  to.matched.some(record => console.log('record', record))
  next()

//   if (to.matched.some(record => record.meta.auth)) {
//     console.log('from', from.name, 'to', to.name)
//     next()
//     // if (getToken() !== null) {
//     //   next()
//     // } else {
//     //   // 防止无限循环
//     //   if (to.name === 'login') {
//     //     next()
//     //     return
//     //   }
//     //   next({
//     //     path: '/login'
//     //   })
//     // }
//   } else {
//     next()// 若点击的是不需要验证的页面,则进行正常的路由跳转
//   }
})

export default router
