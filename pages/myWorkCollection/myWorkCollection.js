Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        reType: "产品/运营",
        place: "深圳",
        edu: "本科",
        stuEdu: "应届生",
        company: "腾讯",
        pay: "200/天",
        workTime: "5天/周",
        date: "3.11",
        img: "../../img/header/aa.png",
      },
      {
        reType: "产品/运营",
        place: "深圳",
        edu: "本科",
        stuEdu: "应届生",
        company: "百度",
        pay: "8k/月",
        workTime: "5天/周",
        date: "3.14",
        img: "../../img/header/dd.png",
      },
    ],
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
  clickItemStu: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/workDetailStu/workDetailStu',
    })
  },
})