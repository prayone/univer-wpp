import ajax from "utils/ajax";

export function share_conf(data) {
  return ajax({
    url: "/api/v1.0/product/share_conf_ids",
    method: "POST",
    data: data,
  });
}
export function get_json(data) {
  return ajax({
    url: "https://resource.xdfgk.cn/excel_json.json",
    method: "get",
    data: data,
  });
}
