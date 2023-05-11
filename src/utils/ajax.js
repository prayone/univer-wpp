import axios from "axios";
import { Toast } from "vant";
import { getToken } from "utils/cookie";

export default async function ajax(options) {
  axios.defaults.withCredentials = true;
  const token = getToken() || "";
  const init = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: { authorization: token },
    timeout: 50000,
    responseType: "string",
    data: options.data || {},
    method: options.type || "POST",
  });

  init.interceptors.request.use((params) => {
    return params;
  });
  init.interceptors.response.use(
    (respones) => {
      if (respones.status == 200) {
        let res = respones.data;
        if (res.status == 1) {
          return respones.data;
        } else if (res.status == 6) {
          return respones.data;
        } else {
          if (res.message) {
            Toast(res.message);
          }
          return respones.data;
        }
      }
    },
    (error) => {
      Toast("当前课程报名火爆，请稍后重试");
      console.log(error);
      return false;
    }
  );
  return init(options);
}
