const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    level: 100,
    goods: 20,
    company:"深圳市腾讯计算机系统有限公司",
    work:"高级产品经理",
    workTime:"2012.09至今",
    school:"吉林大学",
    depart:"项目计划部",
    stu:"软件工程",
    stuDate:"2008.09-2012.07",
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
    this.setData({ identity: getApp().globalData.userIdentity });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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