//后端接口-单模块路径
module.exports = class crowdApiUrl {
  constructor({ApiBaseUrl}){
    this.apiUrl = ApiBaseUrl + "crowd/";
  }
  getCustomerDetail(id) {
    return this.apiUrl + `customer/${id}/`
  }
}