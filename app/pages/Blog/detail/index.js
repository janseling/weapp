import api from '../../../utils/api.js'
import util from '../../../utils/util.js'

// pages/Blog/detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    blog: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData(options)
    this.loadBlog()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // 加载 blog 数据
  loadBlog () {
    api.httpGet("blog/detail/" + this.data.id)
    .then(blog => {
      blog.data.createdTime = util.formatTime(new Date(blog.data.createdAt * 1000))
      blog.data.updatedTime = util.formatTime(new Date(blog.data.updatedAt * 1000))
      this.setData({
        blog: blog.data
      })
    })
  }
})