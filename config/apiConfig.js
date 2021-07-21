//后端接口-配置集合
import Api from "./api"
import crowdApiUrl from "./crowdApi"
import xhrApiUrl from "./xhrApi"

class apiConfig {
  configApi = new Api()
  crowdApiUrl = new crowdApiUrl(this.configApi)
  xhrApiUrl = new xhrApiUrl(this.configApi)
}
module.exports = new apiConfig();