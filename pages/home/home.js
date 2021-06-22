// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: "",
    picList: [
      '../../assets/pictures/d7cc85c91e126d7b88056f0f5dc9488.jpg',
      '../../assets/pictures/d78e2f9e66f50c835ae859905f00288.jpg',
      '../../assets/pictures/ddc9dd7c7c3c966172669b014322f60.jpg',
      '../../assets/pictures/e853e991ee9ec649f10ea23e17f7240.jpg',
    ],
    rotationText: [
      {
        src: '../../assets/icon/5-15062FQ122-50.gif',
        text: '最新房源'
      },
      {
        src: '../../assets/icon/5-15062FQ122-51.gif',
        text: '二手笋房'
      },
      {
        src: '../../assets/icon/5-15062FQ122.gif',
        text: '地图找房'
      },
      {
        src: '../../assets/icon/5-15062FQ122.gif',
        text: '买房秘籍'
      },
    ],
    infolist: [
      {
        src: "",
        title: "这是标题这是标题这是标题",
        frontTime: "2020-11-12",
        endTime: "2023-10-12",
        tags: [],
        prices: 197,
        looked: 1212,
        path: "../../pages/logs/logs"
      },
      {
        src: "",
        title: "这是标题2",
        frontTime: "2022-06-10",
        endTime: "2022-08-08",
        tags: ['变卖', "6.3折"],
        prices: 33,
        looked: 4197,
        path: "../../pages/mine/mine"
      },
    ]
  },
  fff: function (e) {
    console.log("aaaa");
  },
  inputFocus() {
    console.log("aa");

  },
  inputBlur(event) {
    console.log(event);
    let data = event.detail.value;
    wx.request({
      url: 'www.baidu.com',
      data,
      method: 'GET',
      fail(err) {
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pageStack = getCurrentPages();
    console.log(pageStack);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 监听用户上拉触底事件
   * @param {*} e 
   */
  onReachBottom: function (e) {
    console.log("已经到底了！");
    let list = this.data.infolist;
    let getone = list.slice(0, 2);
    list.push(...getone);
    console.log(this.data.infolist.length);
    this.setData({
      infolist: list
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})