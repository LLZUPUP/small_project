//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    circleList: [],
    colorCircleFirst: '#FFDF2F',
    colorCircleSecond: '#FE4D32',
    // 奖品默认颜色
    colorAwardDefault: '#F5F0FC',
    colorAwardSelect: 'red',
    indexSelect: 0,
    isRunning: true,
    imageAward: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg',
      '../../images/8.jpg',
    ],
    prize:[
      {
        index:1,
        content:'恭喜你获得请我吃饭一次'
      },
      {
        index:2,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:3,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:4,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:5,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:6,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:7,
        content:'恭喜你获得请我吃饭一次'
      },{
        index:8,
        content:'恭喜你获得请我吃饭一次'
      }
    ]
    // 奖品选中的颜色
  },
  onLoad: function() {
    // 起始位置
    let leftCircle = 7.5;
    let topCircle = 7.5;
    var circleList = [];
    for (var i = 0; i < 24; i++) {
      // 设置了每个点的坐标值， 页面就会相应的显示
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15;
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      }

      circleList[i] = {
        leftCircle,
        topCircle
      }
    }
    this.setData({
      circleList
    })
    setInterval(() => {
      if (this.data.colorCircleFirst == '#FFDF2F'){
        this.setData({
          colorCircleFirst: '#F44D32',
          colorCircleSecond: '#FFDF2F'
        })
      } else {
        this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#F44D32'
        })
      }
      
    }, 500)

    var awardList = [];
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 38;
        leftAward = 40;
      } else if (j < 3) {
        topAward = topAward;
        leftAward = leftAward + 166.6666 + 35;
      } else  if ( j < 5) {
        leftAward = leftAward;
        topAward = topAward + 150 + 35;
      } else if (j < 7) {
        leftAward = leftAward - 166.66666 - 35;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 35;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({
        topAward,
        leftAward,
        imageAward
      })
    }
    this.setData({
      awardList
    })
  },
  startGame () {
    
    if(this.data.isRunning==false){
      return 
    }
    this.setData({
      isRunning: false
    })
    
    var timesRun = 0;
    var num = Math.ceil(Math.random()*50);
    var timer = setInterval(()=>{
      let index = this.data.indexSelect;
      index++;
      if(index >= this.data.imageAward.length) {
        index = 0;
      }
      // console.log(index)
      this.setData({
        indexSelect: index
      })
      timesRun+=1;
      if(timesRun==num) {
        clearInterval(timer)
        this.setData({
          isRunning: true
        })
        wx.showModal({
          content: this.data.prize[this.data.indexSelect].content
        })
      }
    },100);
    // console.log(num)
  },
  
})