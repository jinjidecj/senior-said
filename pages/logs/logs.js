//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  confimBtu:function(){
    wx.redirectTo({
      url: '/pages/chooseIdentity/chooseIdentity',
      fail:function(e){
        console.log(e)
      }
    })
  }
})
