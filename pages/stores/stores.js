// pages/stores/stores.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let usermsg = app.globalData.userMessage;
    if (!usermsg) {
      wx.redirectTo({
        url: "../login/login",
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if(app.globalData.userMessage){
    let user = wx.getStorageSync('user')
    if (user) {
      console.log();
      wx.showToast({
        title: '已授权',
        icon: 'success',
        duration: 2000
      })
    }
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