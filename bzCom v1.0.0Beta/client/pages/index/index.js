// pages/index/index.js


const app = getApp()



// 引入配置与Client SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var config = require('../../config');

var showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};

var showBusy = text => wx.showToast({
  title: text,
  icon: 'loading',
  duration: 10000
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null
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

  userLogin: function(){
    var that = this;
    showBusy('正在登录');
    qcloud.login({
      success(result) {
        showSuccess('登录成功');
        console.log('登录成功', result);
        app.globalData.hasUserLogin = true;
        that.setData({
          username: result.nickName
        });
      },

      fail(error) {
        showModel('登录失败', error);
        console.log('登录失败', error);
      }
    });
  }
})