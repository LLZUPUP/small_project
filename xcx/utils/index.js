// 预防opt没有传该传的
import * as Mock from './mock'
Mock['list']
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        'Content-Type': 'application/json'
    },
    method: "GET",
    dataType: 'json'
}
let util = {
    request(opt) {
        // Object.assign 用于生成对象 把opt，obj2..里的对象都加入options里
        let options = Object.assign({},DEFAULT_REQUEST_OPTIONS,opt);
        // console.log(options)
        let {url,data,header,method,dataType,mock = false} = options;
        // console.log(url,data,header,method,dataType,mock);
        return new Promise((resolve,reject)=> {
            // resolve('ok')
            if(mock) {
                let res = {
                    statusCode: 200,
                    data:Mock[url]
                }
                resolve(res.data)
                return
            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res) {
                    resolve(res.data)
                },
                fail(err) {
                    reject(err)
                }
            })
        });

    }
}


export default util