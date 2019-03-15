import config from "../config"

const http = (api, method, data = null, header = null) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseUrl + api,
      header: headers(header), data,
      success (res) {
        if (res.statusCode === 200) {
          return resolve(res.data)
        }
        reject(res)
      },
      fail (res) {
        reject(res)
      }
    })
  })
}

const headers = (header) => {
  const baseHeader = {}
  return {...baseHeader, ...header}
}

const httpGet = (api) => {
  return http(api, "GET")
}

const httpPost = (api, data) => {
  return http(api, "POST", data)
}

module.exports = {
  httpGet: httpGet,
  httpPost: httpPost

}