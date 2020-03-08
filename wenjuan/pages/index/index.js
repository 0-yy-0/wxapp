//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },



  data: {
    name: '张三',
    gender: [{
      name: '男',
      value: '0',
      checked: true
    },
    {
      name: '女',
      value: '1',
      checked: false
    }
    ],
    skills: [{
      name: 'HTML',
      value: 'html',
      checked: true
    },
    {
      name: 'CSS',
      value: 'css',
      checked: true
    },
    {
      name: 'JavaScript',
      value: 'js',
      checked: false
    },
    {
      name: 'Photoshop',
      value: 'ps',
      checked: false
    },
    ],
    opinion: '测试'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    var that = this
    wx.request({
      url: 'http://127.0.0.1:3000/',
      success: function (res) {
        that.setData(res.data)
      }
    })
    */
    wx.request({
      url: 'http://127.0.0.1:3000/',
      success: res => {
        console.log(res.data)
        this.setData(res.data)
      }
    })
  },

  submit: function (e) {
    wx.request({
      method: 'post',
      url: 'http://127.0.0.1:3000/',
      data: e.detail.value,
      success: function (res) {
        console.log(res)
      }
    })
  
  }
})

