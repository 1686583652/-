Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //图片加载出错，替换为默认图片
  avatarError: function (e) {
    var errorImgIndex = e.target.dataset.imgindex                   //获取循环的下标
    var imgObject = "commentList[" + errorImgIndex + "].UserImg"    //commentList为数据源，对象数组
    var errorImg = {}
    errorImg[imgObject] = "/pubic/img/ico/head(1).png"              //构建一个对象
    this.setData(errorImg)                                          //修改数据源对应的数据
  },
  //图片加载出错，替换为默认图片
  imageError: function (e) {
    var imgObject = "person.UserImg",              //person为数据源对象
      errorImg = {};
    errorImg[imgObject] = "/pubic/img/avatar.png"; //我们构建一个对象
    this.setData(errorImg);                        //修改数据源对应的数据
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