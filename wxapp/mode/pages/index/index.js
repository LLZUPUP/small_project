//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 0,
    
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(()=>{
      this.setData({
        current: 1
      })
    },1500)
  },
  showClick: function(e) {
    console.log(e)
    const sta = e.target.dataset.status;
    this.setData({
      sta: sta
    })
  }
  
})
