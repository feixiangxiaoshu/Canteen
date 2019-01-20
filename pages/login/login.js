/**
 * @description 登录页面
 */
var app = getApp();
Page({
  data: {
    email: '1801210721',//账号
    password: '123456',//密码
    isAgree: true//记住账号密码凭证
  },
  onLogin() {
    var email, password, reg;

    email = this.data.email;
    password = this.data.password;
    reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

    if (email === '') {
      wx.showToast({
        title: '账号不能为空',
        // image: '../../images/failmsg.png',
        duration: 2000
      });
      return;
    };
    if (password == '') {
      wx.showToast({
        title: '密码不能为空',
        // image: '../../images/failmsg.png',
        duration: 2000
      });
      return;
    };
    wx.switchTab({
      url: '../vote/vote'
    })
  },
  inputEmail(e) {
    this.setData({
      email: e.detail.value
    });
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    });
  },
  bindAgreeChange(e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  }
})