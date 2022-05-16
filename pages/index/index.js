// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '万物选择器',
    applyTitle: '今天吃什么',
    userInfo: {},
    foods: ['大盘鸡', '腾大12楼', '饺子','面条', '盖饭', '泡面', '麻辣香锅', '烧烤', '火锅'],
    places: ['深圳欢乐谷', '大梅沙公园', '宅着', '学习', '加班', '桌游', 'KTV'],
    girls: [1, 2, 3],
    goHomes: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, '请假吧，别上班了'],
    girl: '',
    goHome: '',
    food: '',
    place: '',
    titles: ['吃什么', '去哪里玩', '选老婆', '几点下班'],
    index: 0,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
 
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.setData({
      food: this.data.foods[Math.floor((Math.random()*this.data.foods.length))],
      place: this.data.places[Math.floor((Math.random()*this.data.places.length))],
      goHome: "下班时间(点):"  + this.data.goHomes[Math.floor((Math.random()*this.data.goHomes.length))],
      girl: "../images/" + this.data.girls[Math.floor((Math.random()*this.data.girls.length))] + ".jpeg" ,
    })
  
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
    this.setData({
      food: this.data.foods[Math.floor((Math.random()*this.data.foods.length))],
      place: this.data.places[Math.floor((Math.random()*this.data.places.length))],
      goHome: "下班时间(点):"  + this.data.goHomes[Math.floor((Math.random()*this.data.goHomes.length))],
      girl: "../images/" + this.data.girls[Math.floor((Math.random()*this.data.girls.length))] + ".jpeg" ,
    })
  }
})
