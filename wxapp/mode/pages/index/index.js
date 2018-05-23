//index.js
//获取应用实例
import goods from '../../api/goods.js' 
const app = getApp()

Page({
  data: {
   num: 1,
   show: false,
   totalNum: 0,
   scaleCart: false,
   goods: null

    
    
  },
  //事件处理函数
  addCount(e) {
    let num =this.data.num;
    num++;
    this.setData({
      num
    })
  },
  addToCart(e) {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(()=>{
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(()=>{
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)
    },300)
  },
  onLoad(options) {
    console.log(options)
    const id = options.id || 2;
    console.log(id);
    let curGoods;
    for(let i=0;i<goods.length;i++) {
      if(goods[i].id===id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(()=>{
      this.setData({
        goods:curGoods
      })
    },1000)
    
  }
  
  
})
