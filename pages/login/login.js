// pages/stores/stores.js
var { getUserInfo, getAuthorize, getSetting } = require("../../utils/service/common");
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: "",
    phoneInfo: ""
  },
  // 获取手机号码
  bindGetPhoneNumber(e) {
    let data = e.detail;
    this.setData({ phoneInfo: data });
    console.log("手机号码：", e);
  },
  // 获取用户信息
  getAuthorize(e) {
    let { scope } = e.currentTarget.dataset;
    scope = `scope.${scope}`;
    getAuthorize(scope).then(res => {
      console.log("getAuthorize ",res);
    }).catch(err => { 
      console.log("err ",err);
    })
  },
  getUser() {
    let self = this;
    getUserInfo().then(res => {
      app.globalData.userMessage = res.userInfo;
      self.showToast('授权成功');
      wx.switchTab({
        url: '../stores/stores',
        success: (res) => {
          console.log("success ", res);
        },
        fail: err => {
          console.log("err ", err);
        }
      })
    }).catch( err => {
      self.showToast("请重新获取权限！")
    })
  },
  // 纯文本弹窗
  showToast(title) {
    wx.showToast({
      title: title,
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 2000
    });
    // 关闭弹窗
    setTimeout(() => {
      wx.hideToast({
        complete: (res) => {
          console.log("2000");
        },
      })
    }, 2000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getUser();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 检测是否授权
    getSetting().then(res => {
      const { authSetting } = res;
      console.log(res);
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})