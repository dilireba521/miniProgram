//后端单模块路径
const Api = require('./api')

const baseUrl = Api.ApiBaseUrl + "crowd/"

class crowdApiUrl {
  getCustomerDetail(id) {
    return baseUrl + `customer/${id}/`
  }
}

module.exports = new crowdApiUrl();