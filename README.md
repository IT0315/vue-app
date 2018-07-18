# vue-app

> 对vue脚手架进行二封装

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构
- api 目录 (存放与接口调用相关资源)
- assets 目录 (存放项目需要引用的资源)
  - fonts 目录 (字体资源)
  - images 目录 (图片资源)
  - stylus 目录 (全局通用的 stylus 样式资源)
- components 目录 (存放项目中的 vue 组件)
- i18n 目录 (存放国际化处理的数据文件)
- libs 目录 (存放一些无法通过 npm 安装的第三方库)
- router 目录 (存放 vue-router 相关配置)
- store 目录 (存放 vuex.store 相关配置)
   - modules 目录 (按模块分隔 store 配置，如果是所有模块的通用配置可以直接写在 store/index.js 文件中)
- utils 目录 (存放全局共享的工具函数)
- views 目录 (存放项目的所有页面展示组件)
- App.vue 文件 (主组件文件)
- main.js 文件 (入口文件)

