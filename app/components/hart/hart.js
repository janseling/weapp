// components/hart/hart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hartId: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    harts: []
  },
  ready () {
    console.log(this.data.hartId)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    update (arr) {
      this.setData({ harts: arr })
    }
  }
})
