// pages/music/music.js
const util = require('../../utils/util.js')
const app = getApp();
const musicUrl = app.globalData.musicBase;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false,
    hasMore: true,
    id: 0,
    musicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getList('down')
  },
getList(type) {
  this.setData({
    isLoading: true,
    hasMore: true
  })
  type === 'down'? this.setData({ id: 0}):null;
  util.$get(`${musicUrl}/api/channel/music/more`,{id: this.data.id}).then(res=>{
    if(res.data.res === 0) {
      this.processData(type,res.data.data)
    }
  }).catch(e=>{
    this.setData({
      isLoading: true,
      hasMore: false
    })
    wx.stopPullDownRefresh()
    wx.showToast({
      title: '网络错误',
      duration: 1000,
      icon: 'none'
    })
  })
},
processData(type,list) {
  if(list.length) {
    list.map(v => {
      return v.post_date = util.formatTime(new Date(v.post.date.replace(/-/g,'/')),'yyyy-MM-dd')
    })
    if(type === 'up') {
      this.setData({
        musicList: this.data.musicList.concat(list)
      })
    }else {
      this.setData({
        musicList:list
      })
      wx.stopPullDownRefresh()
    }
    this.setData({
      id:list[list.length - 1].id,
      idLoading: false,
      hasMore: true
    })
  }else {
    if(type === 'down') {
      wx.showToast({
        title: '没有数据',
        duration: 1500,
        icon: 'none'
      })
      this.setData({
        isLoading: false,
        hasMore: false
      })
    }else {
      this.setData({
        isLoading: false,
        hasMore: true
      })
    }
  }
},
onPullDownRefresh() {
  this.getList('down')
},
onReachBottom() {
  if(this.data.isLoading) {
    return;
  }
  this.getList('up')
},
openDetail(e) {
  let item = e.currentTarget.dataset.list
  wx.navigateTo({
    url: `music-detail/music-detail?id=${item.item_id}&title=${item.title}`
  })
},
onCollectionTap(e) {
  this.getPostsCollectedAsy();
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
 

  /**
   * 页面上拉触底事件的处理函数
   */
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})