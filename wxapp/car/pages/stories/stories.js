// pages/stories/stories.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    console.log(id)
    const entity = app.globalData.stories.filter((item) => {
      return item.id == id
    })
    console.log(app.globalData.stories)
    this.setData({
      entity: entity[0]
    })
    wx.setNavigationBarTitle({
      title: this.data.entity.header
      
    })
  }

})