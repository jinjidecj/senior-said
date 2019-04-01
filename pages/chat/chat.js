Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        headPic:null,
        fromWho: "腾讯14级学长",
        content: "你的简历存在很多问题",
        isRead: 1 ? "../../img/dot.png" :"",
        time:"上午11:30",
        img:"../../img/header/ee.png"
      },
      {
        headPic: null,
        fromWho:"腾讯15级学长",
        content: "我已经收到了你的简历",
        isRead: 1 ? "../../img/dot.png" : "",
        time: "上午12:30",
        img: "../../img/header/ff.png"
      },
      {
        headPic: null,
        fromWho: "阿里HR",
        content: "你太帅了",
        isRead: 0 ? "../../img/dot.png" : "",
        time: "上午13:30",
        img: "../../img/header/gg.png"
      }
    ],
    date:"上午11:30",
    message_img:null
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
    this.onLoad();
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
  clickItem:function(e){
    console.log(e.target.dataset.id);
    var i = getApp().globalData.userIdentity;
    if(i<2){
      wx.navigateTo({
        url: '/pages/chatStu/chatStu',
      });
    }else{
      wx.navigateTo({
        url: '/pages/chatEmp/chatEmp',
      })
    }
  }
})