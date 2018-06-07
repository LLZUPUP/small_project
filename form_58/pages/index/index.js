//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputVal: '',
    testVal: ''
  },
  //事件处理函数
  getNumber(e) {
    var inputVal = e.detail.value.trim();
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(inputVal)) {
      return
    }
    this.setData({
      inputVal
    })
  },
  getTest(e) {
    var testVal = e.detail.value.trim();
    this.setData({
      testVal
    })
  },
  go(e) {
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }
  
})
