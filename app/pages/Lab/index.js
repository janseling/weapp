// pages/Lab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      pic1: "1-9",
      pic2: "hand-pen",
      title: "手写识别",
      page: "",
      clsName: "lab-mnist"
    }, {
      pic1: "earth",
      pic2: "stars",
      title: "引力模拟",
      page: "",
      clsName: "lab-gravity"
    }],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  nextCard() {
    this.setData({
      index: (this.data.index + 1) % this.data.list.length
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})