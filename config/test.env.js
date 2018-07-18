'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"http://wechat.hand-china.com/hmapshowcase/r/api?sysName=HandMobile&apiName="'
})
