
var team_r=0;
var team_b=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score_r: 0,//红队分数
    score_b: 0//蓝队分数
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
  //红队加分
  add_R: function(){
    team_r++;
    this.setData({
      score_r: team_r
    })
  },
  //蓝队加分
  add_B: function(){
    team_b++;
    this.setData({
      score_b: team_b
    })
  },
  //红队扣分
  mul_R: function(){
    team_r--;
    this.setData({
      score_r: team_r
    })
  },
//蓝队扣分
  mul_B: function(){
    team_b--;
    this.setData({
      score_b: team_b
    })
  },
  //清零
  clear: function(){
    this.setData({
      score_b: 0,
      score_r: 0
    })
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

  }
})