//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.getStorage({
      key: 'user-info',
      success: (res)=>{
        // console.log(res)
        // console.log(res.data)
        this.globalData.userInfo = res.data
        // success
      }
    })
  },
  globalData: {
    userInfo: null
  }
})