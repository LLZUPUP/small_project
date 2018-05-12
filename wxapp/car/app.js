//app.js
// 应用启动 onLaunch
// APP -> Page
// 此文件负责全局的，应用级别的一些行为，
// 添加全局的数据
// 引入一下外面的数据
import db from './assets/db.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData,db);
    // 展示本地存储能力
    // wx.request({
    //   // ajax请求数据的封装
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   success: (response) => {
    //     Object.assign(this.globalData,response.data)
    //     console.log(this.globalData)
        
    //   },
    //   fail: (error) => {
    //     console.log(error)
    //   }
    // })
  },
  globalData: {

  }
})