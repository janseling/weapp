// pages/Blog/index.js
import api from '../../utils/api.js'
import util from '../../utils/util.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO : 请求 blog 接口获取文章列表
    this.loadBlogs()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  loadBlogs () {
    api.httpGet("blog/list")
      .then(this.updateBlogs)
  },

  updateBlogs (data) {
    this.setData({
      blogs: data.data.map(blog => {
        blog.createdTime = util.formatTime(new Date(blog.createdAt * 1000))
        blog.updatedTime = util.formatTime(new Date(blog.updatedAt * 1000))
        return blog
      })
    })
  },
  toDetail (e) {
    const blog = this.data.blogs[e.currentTarget.dataset.index]
    var params = [
      ["id", blog.id].join("="),
      ["title", blog.title].join("=")
    ]
    wx.navigateTo({
      url: '../Blog/detail/index?' + params.join("&") 
    })
  }
})