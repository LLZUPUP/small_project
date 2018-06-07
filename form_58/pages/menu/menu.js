// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {name:'果味',id:'guowei'},
      {name:'蔬菜',id:'shucai'},
      {name:'炒货',id:'chaohuo'},
      {name:'点心',id:'dianxin'},
      {name:'粗茶',id:'cucha'},
      {name:'淡饭',id:'danfan'}
    ],
    curIndex: 0,
    // ddos
    detail: [],
    toView: 'guowei'
  },
  switchCategory(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0,
      toView: e.currentTarget.dataset.id
    })

  },
  onReady(e) {
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success: (res)=> {
        console.log(res.data)
        this.setData({
          detail: res.data
        })
      }
    })
  }

  /**
   * 生命周期函数--监听页面加载
   */
  
})