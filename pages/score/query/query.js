// pages/score/query/query.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal:null,
    resList:null,
    isRefash:false
  },
  getSearchVal:function(e){
    this.data.searchVal = e.detail.value;
  },
  //跳转页面
  jumpClick:function(e){
    wx.navigateTo({
      url: '../enter/enter?id='+e.currentTarget.dataset.id,
    })
  },
  //搜索
  searchClick:function(){
    if(this.data.searchVal == null || this.data.searchVal.length ==0){
      wx.showToast({
        icon:"none",
        title: '请输入有效搜索内容',
      })
      return;
    }
    wx.showLoading({mask:true})
    let _params = {search:this.data.searchVal}
    app.httpUtil.get(
      app.xhrApiUrl.score(),_params
    ).then((res)=> {
      wx.hideLoading()
      console.log(res);
      if(res.code == 200) {
        if(res.data.length ==0)
        wx.showToast({
          icon:"none",
          title: '未查到对应数据',
        })
        this.setData({
          resList:res.data
        })
      }
    }).catch((err)=> {
      wx.hideLoading()
      console.log(err);
    })
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
    if(this.data.isRefash){
      this.searchClick()
    }
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