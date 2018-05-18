//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   items:[
     {
       name: 'USA', value: '美国'
     },
     {
       name: 'CHN', value: '中国', checked: 'true'
     },
     {
       name: 'BRA', value: '巴西'
     }
   ]
    
    
  },
  //事件处理函数
  checkboxChange: function(e) {
    console.log('checkbox发现change事件，携带value值为'+e.detail.value)
    console.log(e)
  },
  bindInput:function(e) {
    this.setData({
      inputValue:e.detail.value
    })
    
  },
  getUserinfo(e) {
    console.log(e)
  }
  
})
