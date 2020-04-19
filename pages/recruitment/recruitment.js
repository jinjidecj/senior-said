var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  data: {
    winHeight: 0,
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    tabs: ["前辈内推", "HR招聘"],
    identity:0,
    imgUrls: [
      '../../img/recruitment/1.jpg',
      '../../img/recruitment/2.jpg',
      '../../img/recruitment/3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    list:[
      {
        reType:"产品/运营",
        place:"深圳",
        edu:"本科",
        stuEdu:"应届生",
        company:"腾讯",
        pay:"200/天",
        workTime:"5天/周",
        date:"3.11",
        img:"../../img/header/aa.png",
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
        img: "../../img/header/bb.png",
      },
      {
        reType: "产品/运营",
        place: "上海",
        edu: "本科",
        stuEdu: "应届生",
        company: "阿里巴巴",
        pay: "80K/年",
        workTime: "6天/周",
        date: "4.11",
        img: "../../img/header/cc.png",
      },
    ],
    list2: [
      {
        reType: "产品/运营",
        place: "深圳",
        edu: "本科",
        stuEdu: "应届生",
        company: "百度",
        pay: "8k/月",
        workTime: "5天/周",
        date: "3.14",
        img: "../../img/header/bb.png",
      },
      {
        reType: "产品/运营",
        place: "上海",
        edu: "本科",
        stuEdu: "应届生",
        company: "阿里巴巴",
        pay: "80K/年",
        workTime: "6天/周",
        date: "4.11",
        img: "../../img/header/cc.png",
      },
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
    ],
    textlist:['','',''],
    inputShowed: false,
    inputVal: "",
  },


  onLoad: function (options) {
    this.setData({ identity: getApp().globalData.userIdentity });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  clickItemStu:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/workDetailStu/workDetailStu',
    })
  },
  clickItemEmp:function( ){
    wx.navigateTo({
      url: '/pages/workDetailEmp/workDetailEmp',
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})