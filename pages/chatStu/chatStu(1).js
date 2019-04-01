Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:null,
    height:180,
    chatContent:"我已经收到你的简历，不过还有点问题需要改进,例如简历整体着色，字体有些偏小了。",
    chatContent2: "好的学长！我知道了！我去改改",
    sendCont: "",
    chatMessages: [
      {
        isme: 0,
        content: "我已经收到你的简历，不过还有点问题需要改进,例如简历整体着色，字体有些偏小了。",
      },
      {
        isme: 1,
        content: "好的学长！我知道了！我去改改",
      },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
  inputCon: function (e) {
    this.setData({
      sendCont: e.detail.value
    })
  },
  send: function (e) {
    console.log(this.data.sendCont);
    if (this.data.sendCont != "") {
      var newSend =
        {
          isme: 1,
          content: this.data.sendCont,
        };

      this.data.chatMessages.push(newSend);
      console.log(this.data.chatMessages);
      this.setData(
        {
          chatMessages: this.data.chatMessages,
        }
      )
      this.setData(
        {
          sendCont: "",
        }
      )
    }

  }
})