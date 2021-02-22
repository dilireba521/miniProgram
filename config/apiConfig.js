//后端路径集合配置
const crowdApiUrl = require('./crowdApi')

class apiConfig {
  crowdApiUrl = crowdApiUrl
}
module.exports = new apiConfig();