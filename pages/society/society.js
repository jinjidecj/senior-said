var app = getApp();

let animationShowHeight = 300;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight:0,
    array: ['产品经理', '产品运营', '产品设计', '人力市场','技术开发'],
    index: 0,
    hidden: true, //等待的展示与隐藏的控制
    buthidden: false ,//按钮的可用和不可用的控制

    list: ['1', '2', '3'],
    date: "2018-04-06",
    tabs: ["社区", "收藏"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    modalFlag: true,

    swipertext1: "蚂蚁金服融资1550亿美元，或称全国最大金融平台",
    swipertext2: "王兴出席摩拜全员大会，承诺不裁员还给权期",
    swipertext3: "微信小程序2018新反向，为合作伙伴赚到更多的",
    swipertext4: "拼多多完成了新一轮30亿美元融资，腾讯领投！",
    question: [
      {
        content: "如何提高自己能力",

      },
      {
        content: "如何找到工作",

      },
      {
        content: "XX公司的HR怎么样",

      },
      {
        content: "谁能给我个实习指导啊。。"
      }
    ],
    answer: [
      {
        question: "如果到了2019年，你会。。",
        answer: "不存在的"
      },
      {
        question: "如果到了2049年，你会。。",
        answer: "不存在的"
      },
    ],
  },
  showModal: function () {
    // 显示遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 300;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  footerTap: app.footerTap,
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
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
   
  },
  confimBtu: function () {
    wx.redirectTo({
      url: '/pages/chooseIdentity/chooseIdentity',
      fail: function (e) {
        console.log(e)
      }
    })
  },
  clickItem:function(){
    wx.navigateTo({
      url: '/pages/article/article',
    })
  },
  searchClick:function(){
    wx.navigateTo({
      url: '/pages/searchArticle/searchArticle',
    })
  },
  primary: function (e) {
    //显示等待、禁用按钮，后台返回错误则将true和false对调一下就是隐藏等待、启用按钮
    this.setData({
      hidden: false,
      buthidden: true
    })
  },
  button: function () {
    this.setData({ modalFlag: false });
  },
  modalOk: function () {
    this.setData({ modalFlag: true });
  },
  editarticle:function(){
    wx.navigateTo({
      url: '/pages/editArticle/editArticle',
    });
    this.modalOk();
  },
  editquestion:function(){
    wx.navigateTo({
      url: '/pages/editQuestion/editQuestion',
    });
    this.modalOk();
  },
  bindPickerChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      index: e.detail.value
    })
  },
  clickSwiper:function(){
    wx.navigateTo({
      url: '/pages/dailyNews/dailyNews',
    })
  }
})