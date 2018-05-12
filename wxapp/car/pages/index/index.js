//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// console.log(testDrive)
// 在Page里得到app
const app = getApp()

Page({
  data: {
    slides: [
      // {
      //   id: 5,
      //   image: 'https://resources.ninghao.net/landrover/discover-1.jpg',
      //   header: '全新一代发现',
      //   sub_header: 'Discovery',
      //   description: '全尺寸七座SUV,现已接受预计'
      // },
      // {
      //   id: 3,
      //   image: 'https://resources.ninghao.net/landrover/velar-1.jpg',
      //   header: '全新揽胜星脉',
      //   sub_header: 'Range Rover',
      //   description: '标新立异的前卫揽胜'
      // }
      
    ]
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides
    })
  },
  //事件处理函数
  testDrive: testDrive,
  readMore(e){
    const id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/vehicies/show?id=${id}`
    })
  }


})
