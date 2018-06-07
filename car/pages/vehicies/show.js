// pages/wehicies/show.js
import testDrive from '../../modules/test-drive'
const app = getApp()
Page({
  data: {
    entity: null
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  testDrive,
  preview(e) {
    const slidesName = e.target.dataset.slides;
    const index = e.target.dataset.index;
    const slides = this.data.entity.meta[slidesName]
    const images = []
    slides.map((item)=>{
      images.push(item.image)
    })
    wx.previewImage({
      urls: images,
      current: images[index]
    })
  },
  onLoad: function (options) {
      const id = options.id;
      console.log(id);
      const entity = app.globalData.vehicles.filter((item)=>{
        return item.id == id
      })
      this.setData({
        entity:entity[0]
      })
      wx:setNavigationBarTitle({
        title: this.data.entity.header
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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