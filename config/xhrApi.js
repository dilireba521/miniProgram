
module.exports = class XhrApiUrl {
  constructor({ApiBaseUrl}){
    this.apiUrl = ApiBaseUrl +"xhr/v1/";
  }
   //测试模版
   templates(){
    return this.apiUrl + `template`;
  }
  //新增学生分数
  score(){
    return this.apiUrl + `score`;
  }
  //根据ID查找学生
  searchScore(id){
    return this.apiUrl + `score/${id}/`;
  }

}