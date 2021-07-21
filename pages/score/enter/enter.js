// pages/score/enter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    inputList:[
      {"name":"姓名",value:null,key:"name"},
      {"name":"语文",value:null,key:"chinese"},
      {"name":"数学",value:null,key:"math"},
      {"name":"英语",value:null,key:"english"},
    ],
    isEdit:false,
  },
  //提交数据
  formSubmit:function(e){
    let _params = e.detail.value;
   if(this.data.isEdit){
      this.putBaseinfo(_params);
    }else {
      this.addBaseInfo(_params)
   }
  },
  //重制表单数据
  formReset:function(){
    var _inputList = this.data.inputList;
    this.setData({
      inputList : _inputList
    });
  },
  //新增个人数据
  addBaseInfo:function(_params){
    wx.showLoading({mask:true})
    app.httpUtil.post(
      app.xhrApiUrl.score(),_params
    ).then((res)=> {
      wx.hideLoading()
      if(res.code == 200) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000,
          complete:(res)=>{
            this.goBack();
          },

        })
      }
    }).catch((err)=> {
      wx.hideLoading()
      console.log(err);
    })
  },
  //根据ID获取个人信息
  getBaseInfo:function(){
    wx.showLoading({mask:true})
    app.httpUtil.get(app.xhrApiUrl.searchScore(this.id),{})
    .then((res)=> {
      wx.hideLoading()
      if(res.data==null || res.data.length == 0)
      return;
      let data = res.data[0];
      const len = this.data.inputList.length;
    
      for(let i = 0;i<len;i++){
        this.data.inputList[i].value = data[this.data.inputList[i].key]
      }
      this.setData({
        inputList:this.data.inputList,
        isEdit:true
      })
    })
    .catch((err)=> {
      wx.hideLoading();
      console.log(err);});
  },
  //根据ID修改个人信息
  putBaseinfo:function(_params){
    wx.showLoading({mask:true})
    app.httpUtil.put(app.xhrApiUrl.searchScore(this.id),_params)
    .then((res)=> {
      wx.hideLoading()
      wx.showToast({
        title: '更新成功',
        icon: 'success',
        duration: 2000,
        complete:()=>{
          this.goBack()
        }
      })
    })
    .catch((err)=> {
      wx.hideLoading();
      console.log(err);});
  },
  //返回上一页
  goBack:function(){
    if(this.data.isEdit){
      //在需要执行带参数返回上级页面的地方加上
      let pages = getCurrentPages(); // 获取页面栈
      let returnpage = pages[pages.length - 2]; // 上一个页面
      returnpage.setData({
        isRefash: true
      })
    }
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1,
      })
    },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.id = options.id;
    this.getBaseInfo();
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