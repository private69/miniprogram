/**
 * 封装 wx.request
 */
const obj = {
    timeout: 5000,
}
const request = function (data = {} ) {
    if(data.method == "POST"){
        obj.dataType = "json"
    }
    return new Promise((resolve , reject) =>{
        wx.request({
            ...data,
            ...obj,
            success: res => resolve(res),
            // 传输 this ， 用于取消请求 
            fail: function(err){reject(err,this) },
        })
    }) 
}

// request({})
// .then( res => {})
// .catch( (err, event) => {
//     event.abort(); // 取消请求任务
// })
