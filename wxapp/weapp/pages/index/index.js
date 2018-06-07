//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 会对应着 界面状态
  data: {
    // 数据默认的status是1 全部
    // setData 2 会变成未完成
    // 3 已完成
    addShow: true,
    lists: [{
      title: '帮徐加元同学砍价',
      data: '刚刚',
      success: 'true'
    },
    {
      title: '邀请柔柔同学看复仇者联盟3',
      data: '刚刚',
      success: 'false'
    }],
    curLists: [],

    

  },
  showStatus: function(e) {
    const sta = e.currentTarget.dataset.sta;
    // 不再是dom编程，太低级了
    // 针对界面状态的编程
    const temp = this.data.lists;
    temp.forEach((item,i) => {
      if(item.success == 'false') {
        this.data.curLists.push(item);
        if(sta == '2') {
          this.setData({
            sta: sta,
            curLists: this.data.curLists
          })
        }
        
      }else if(item.success == 'true') {
        this.data.curLists.push(item);
        if(sta == '3') {
          this.setData({
            sta: sta,
            curLists: this.data.curLists
        })
        
      }
    }
  })
    
    if(sta == '1') {
      this.setData({
        sta: sta,
        curLists: this.data.lists
      })
    }
    // }else if(sta == '2') {
      
    //   this.setData({
    //     sta: sta,
    //     curLists: this.data.curLists
    //   })
    //   return
    // }
    //   this.setData({
    //     sta: sta,
    //     curLists: 
    //   })
    // }
      // this.setData({
      //   sta: sta,
      //   curLists: this.data.lists.filter(item => +item.sta === (sta - 2))
      // })
    
  },
  addTodoShow: function(e) {
    this.setData({
      addShow: false
    })
  },
  setInput: function(e) {
    let contInp = e.detail.value;
    this.setData({
      addText: contInp
    })
  },
  addTodo: function(e) {
    const task = {
      title: this.data.addText,
      success: 'false',
      data: '刚刚'
    }
    const temp = [...this.data.lists,task];
    this.setData({
      lists: temp,
      addShow: true
    })
    // 如何添加新的todo？
    // 页面上多一条任务
    // 显示多少条 由lists 决定的
    // lists push
    // 数据驱动界面，数据变，界面自动更新
    // MVVM
    // Model(数据模型data)
    // View  VM(视图模型层)
  },
  addTodoHide: function(e) {
    this.setData({
      addShow: true
    })
  },
  changeTodo: function(e) {
    // 当前点击条目的status success
    // 数据 lists 跟当前条目相关的这条数据
    // 将status 的值改为true
    // index ?
    // console.log(e)
    const index = e.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i) => {
      // console.log(e);
      // console.log(index);
      // console.log(item);
      // console.log(temp)
      if(i == index) {
        if(item.success == 'false') {
          item.success = 'true'
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        }else {
          item.success = 'false'
          wx.showToast({
            title: '任务打回重做',
            icon: 'circle',
            duration: 1000
          })
        }
      }
    });
    // console.log(temp)
    this.setData({
      lists: temp
    })
  }
 
 
  






})
