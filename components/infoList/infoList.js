// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    infolist: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    reach:function(e){
      let path = e.currentTarget.dataset.path;
      let self = this;
      console.log(path);
      wx.redirectTo({
        url: path,
        success: self.success
      })
    },
    success(){
      console.log("跳转成功！");
    }
  }
})
