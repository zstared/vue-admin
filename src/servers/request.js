import axios from "axios";
import { Message } from "element-ui";

//创建axios实例
const instance = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//返回拦截器
instance.interceptors.response.use(
  (response) => {
    let data = response.data;
    const { code, message } = data;
    switch (code) {
      case 0: //成功
        break;
      default:
        //失败
        if (message) Message.error(message);
    }
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @class Http请求
 */
class Xhr {
  /**
   * @method GET请求API接口
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   */
  async get(url, params = {}) {
    let data = await instance({
      url: url,
      method: "get",
      params: params,
    });
    return data;
  }

  /**
   * @method POST请求API接口
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   */
  async post(url, params = {}) {
    let data = await instance({
      url: url,
      method: "post",
      data: params,
    });
    return data;
  }

  /**
   * @method PUT请求API接口
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   */
  async put(url, params = {}) {
    let data = await instance({
      url: url,
      method: "put",
      data: params,
    });
    return data;
  }

  /**
   * @method DELETE请求API接口
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   */
  async delete(url, params = {}) {
    let data = await instance({
      url: url,
      method: "delete",
      data: params,
    });
    return data;
  }

  /**
   * 上传
   * @param {*} url
   * @param {*} formData
   */
  async upload(url, formData) {
    return await instance.post(url, formData, {
      "Content-Type": "application/x-www-form-urlencoded",
    });
  }

  /**@method 下载静态文件 */
  async downloadStatic(url, name) {
    let userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
      let res = await axios.get(url, { responseType: "blob" });
      let a = document.createElement("a");
      let fileurl = window.URL.createObjectURL(res.data);
      let filename = name ? name : "file.wav";
      a.href = fileurl;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(fileurl);
    } else {
      window.open(url, "_bank");
    }
  }
}

export default new Xhr();
