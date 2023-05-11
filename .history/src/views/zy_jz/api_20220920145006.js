// https://m.xdfgk.cn/api/v1.0/product/share_ids
import ajax from "utils/ajax";
export function getCourseListApi(data) {
  return ajax({
    url: "/api/v1.0/product/share_ids",
    method: "POST",
    data: data,
  });
}
