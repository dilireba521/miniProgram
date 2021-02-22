const Api = require('./api')
class HttpUtil {
  /**
   * GET 请求分装
   */
  get(url, data = {}) {
    return this.request(url, data, "GET")
  }

  /***
   * 微信的request
   */
  request(url, data = {}, method = "GET") {
    const contentType = 'application/json';
    let token = this.getToken()
    return new Promise(function (resolve, reject) {
      wx.request({
        url,
        data,
        method,
        header: {
          'Content-Type': contentType,
          'Authorization': 'Token mobile:' + token
        },
        //这里的超时，在app.json 也能配？
        timeout: 0,
        success: (res) => {
          console.log('===============================================================================================')
          console.log('==    接口地址：' + url)
          console.log('==    接口参数：' + JSON.stringify(data))
          console.log('==    请求类型：' + method)
          console.log("==    接口状态：" + res.statusCode);
          console.log('===============================================================================================')
          if (res.statusCode == 200) {
            //请求正常
            resolve(res.data)

          } else if (res.statusCode == 401) {
            //token失效
            //跳转登陆页
            reject('登陆以过期')

          } else {
            //请求失败
            reject("请求失败：" + res.statusCode)
          }
        },
        fail: (res) => {
          console.log('===============================================================================================')
          console.log('==    接口地址：' + url)
          console.log('==    接口参数：' + JSON.stringify(data))
          console.log('==    请求类型：' + method)
          console.log("==    服务器连接异常")
          console.log('===============================================================================================')

          reject(res)
        },
      })
    })
  }
  /**
   * Token 信息存储
   */
  getToken() {
    const token = Api.token;
    return token || ""
  }

}

module.exports = new HttpUtil();
