exports.func = () => {
    console.log("aaa");
}
// 获取用户信息
exports.getUserInfo = () => {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            withCredentials: true,
            lang: "en",
            success: (res) => { resolve(res); },
            fail: (res) => { reject(res); }
        })
    })
}
// 发起授权请求
exports.getAuthorize = (scope) => {
    return new Promise((resolve, reject) => {
        wx.authorize({
            scope: scope,
            success: (res) => { resolve(res); },
            fail: (res) => { reject(res); }
        })
    })
}
// 查看是否授权
exports.getSetting = () => {
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success: (res) => { 
                resolve(res); 
            },
            fail: (res) => { reject(res); }
        })
    })
}
// 