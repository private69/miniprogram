// components/rotationText.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {
    list: {
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    func: function(){
      console.log("cccc");
    }
  },
  attached(){
    this.setData({
      dataList: this.properties.list
    })
    console.log(this.properties.list);
  },
})
