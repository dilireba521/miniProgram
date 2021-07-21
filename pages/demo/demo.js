
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello world',
    msgDetail: "1",
    latitude: null,
    longitude: null,
    demoDeatil: null,
    buttonList:["学分录入","查询学分"],
    firstDetail: "niahaode daslkdlka klaskd"
  },
  //跳转页面
  jumpClick:function(e){
    let _url = '../../pages/score/';
    let _index = e.currentTarget.dataset.index;
    switch(_index){
      case 0:
        _url+="enter/enter";
        break;
        case 1:
          _url+="query/query";
        break;
    }
    wx.navigateTo({
      url: _url,
    })
  },
  //测试-事件
  onMyEvent: function (e) {
    console.log(e);
  },
  //测试接口数据
  clickDemoDetail: function () {
    var _this = this
    wx.getStorage({
      key: 'id',
      success(res) {
        _this.setData({
          demoDeatil: res.data
        })
      }
    })
  },
  //测试接口
  clickDemo: function () {
    app.httpUtil.get(
      app.crowdApiUrl.getCustomerDetail("0ea205b0-3704-9775-cf72-b9aa89208318"),
      {}).then((res) => {
        var data = res;
        var id = data.id;
        wx.setStorageSync('id', id)
      }).catch((err) => {
        console.log(err);
      })
  },
  clickMe: function () {
    this.setData({
      msg: "I'm fine thank"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        this.setData({
          latitude,
          longitude
        })
      }
    })
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

  }
})