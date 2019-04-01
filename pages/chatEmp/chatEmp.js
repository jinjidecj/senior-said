Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: null,
    height: 100,
    chatContent: "恩哼？",
    chatContent2: "在吗？我有问题想请教您一下。",
    chatContent3: "请问你写的文章里的***是什么",
    sendCont:"",
    chatMessages:[
      {
        isme: 1,
        content: "在吗？我有问题想请教您一下。",
      },
      {
        isme: 0,
        content: "恩哼？",
      },
      {
        isme: 1,
        content: "请问你写的文章里的***是什么",
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
  inputCon:function(e){
    this.setData({
      sendCont: e.detail.value
    })
  },
  send:function(e){
    console.log(this.data.sendCont);
    if (this.data.sendCont!=""){
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