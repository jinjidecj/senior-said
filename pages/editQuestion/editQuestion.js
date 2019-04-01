// pages/editQuestion/editQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['产品经理', '产品运营', '产品设计', '人力市场', '技术开发'],
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
  sendQuestionConfim: function () {
    wx.showModal({
      title: '发布确认',
      content: '提问发布后不能撤回，确认发送？',
      confirmText: "下次再发",
      cancelText: "确认发送",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
          wx.navigateBack({

          })
        } else {
          console.log('用户点击辅助操作')
          wx.navigateBack({

          })
        }
      }
    });
  },
  save: function () {
    wx.showToast({
      title: '正在保存',
      icon: 'loading',
      duration: 1000
    });

  },
  su: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 1000
    });
  },
  bindTypeChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index: e.detail.value
    })
  },
})