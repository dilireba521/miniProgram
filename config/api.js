//网络接口-数据
module.exports = class Api {
  token = "usBAUHQs74t23TS2qNbfznkhyWJSPbj8QoWthZpQJboR7LxQ0CS9uko6nR84340L";
  
  //本地环境接口
  LocationUrl ='http://127.0.0.1:8080/';
  //开发环境
  devUrl = 'https://central.dev.goqomo.com/api/';
  //测试地址
  ApiBaseUrl = this.LocationUrl;
}
