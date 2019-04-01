Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  sendArticlenConfim: function () {
    wx.showModal({
      title: '发送确认',
      content: '反馈发送后不能撤回，确认发送？',
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
})