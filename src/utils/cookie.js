const Token = "token_xdf_camp";
const UserInfo = "user_xdf_camp";

export function getToken() {
  return window.Cookies.get(Token);
}
export function setToken(token) {
  return window.Cookies.set(Token, token, { expires: 7, path: "/" });
}
export function removeToken() {
  return window.Cookies.remove(Token, { path: "/" });
}

export function getUserInfo() {
  return window.Cookies.get(UserInfo);
}
export function setUserInfo(info) {
  return window.Cookies.set(UserInfo, info, { expires: 7, path: "/" });
}
export function removeUserInfo() {
  return window.Cookies.remove(UserInfo, { path: "/" });
}
