Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [
      {
        title: "确认！当当网以75亿元卖身天海投资！增值率近235倍！",
        img: "../../img/news/dandan.jpg",
        readnum: 1245,
      },
      {
        title: "蚂蚁金服估值升至1550亿美元，或成全球最大独角兽！",
        img: "../../img/news/mayi.jpg",
        readnum: 3248,
      },
    ]
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
  clickItem: function () {
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
})