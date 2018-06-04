//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    addShow: true,
    focus: false,
    addText: '',
    lists: []
  },
  //事件处理函数
  bindUserInfo(e) {
    // console.log(e)
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })
    // 存储数据？
    // App.globalData: userInfo
    wx.setStorage({
      // index onLoad global userInfo
      key: 'user-info',
      data: e.detail.userInfo,
      success: res => {
        console.log('保存成功')
      }
    })

  },
  onLoad() {
    // console.log(app.globalData.userInfo)
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    }
    wx.getStorage({
      key: 'lists',
      success: res => {
        // console.log(res)
        this.setData({
          lists: res.data
        })
      }
    })
  },
  setInput(e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodo(e) {
    if(!this.data.addText.trim()) {
      return;
    }
    // item 都是一个对象，文字只是他的一部分
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    // console.log(addT)
    // var temp = this.data.lists;
    // temp.push(addT);   es5
    const temp = [
      addT,
      ...this.data.lists
    ]
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp
    });
    wx.showToast({
      title: '添加成功!',
      icon: 'success',
      duration: 1000
    })
    this.addTodoHide()
  },
  addTodoHide(e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  }
  
  
})
