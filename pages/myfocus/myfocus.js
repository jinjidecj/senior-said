// pages/myfocus/myfocus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myfocus:[
      {
        img:"../../img/header/aa.png",
        name:"马云",
        company:"阿里巴巴",
        work:"boss"
      },
      {
        img: "../../img/header/bb.png",
        name: "赵云",
        company: "渣蜀联盟",
        work: "白板"
      },
      {
        img: "../../img/header/cc.png",
        name: "赵宇",
        company: "吉林大学",
        work: "大学生"
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
  clickitem:function(){
    wx.navigateTo({
      url: '/pages/personalMessage/personalMessage',
    })
  }
})