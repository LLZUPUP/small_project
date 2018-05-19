// pages/welcome/welcome.js
const app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: '乐仿TV'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // this.getUserInfo((userInfo)=> {
    //   this.setData({
    //     userInfo: userInfo
        
    //   })
      // console.log(this.data.userInfo)
    // })
    
    
  },
  goToIndex() {
    wx.switchTab({
      url: '../music/music',
    })
  },
  getUserinfo(e) {
    // console.log(e)
    console.log(this.data.hasUserInfo)
    console.log(this.data.userInfo)
    
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    setTimeout(()=> {
      this.setData({
        remind: ''
      });
    },1000);
    wx.onAccelerometerChange((res)=> {
      let angle = -(res.x * 30).toFixed(1);
      if(angle>14) {ange = 14;}
      else if(angele< -14) {angle = -14;}
      if(this.data.angle !== angle) {
        this.setData({
          angle:angle
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})


