// pages/mode/mode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        tt:'测试',
        isTouchMove: false
      },
      {
        tt: '测试',
        isTouchMove: false
      },
      {
        tt: '测试',
        isTouchMove: false
      },
      {
        tt: '测试',
        isTouchMove: false
      },
    ]
  },
  // 计算手滑动角度函数
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  touchstart(e) {
    //开始触摸时 重置所有删除
    this.data.lists.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      lists: this.data.lists
    })
  },
  //滑动事件处理
  touchmove(e) {
    let index = e.currentTarget.dataset.index;//当前索引
    let startX = this.data.startX;//开始X坐标
    let startY = this.data.startY;//开始Y坐标
    let touchMoveX = e.touches[0].clientX;//滑动变化坐标
    let touchMoveY = e.touches[0].clientY;//滑动变化坐标
    //获取滑动角度
    let angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    this.data.lists.forEach((v, i) => {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    this.setData({
      lists: this.data.lists
    })
  },
  //删除事件
  del(e) {
    this.data.lists.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      lists: this.data.lists,

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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