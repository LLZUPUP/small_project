// es6 里面 这个叫做模块化语法 module
// js 变量或常量，它的类型由值决定
// var a = 1;
// a = "str"

// 在es6里面使用let 
// const b = 123; 不能修改数据类型了
const testDrive = () => {
    // 我们要用内置的来自微信的api了
    // 原生的api 大部分的小程序是html5 webview
    // 性能上比原生的慢一些，
    // 网页：webview  安卓和ios：nativeview 
    // wx 就是小程序的母亲，可以提供给我们很多很多的api，原生的请求数据api
    // 比如微信的支付功能
    wx.showToast({
        title: '暂不支持'
    })
}
export default testDrive