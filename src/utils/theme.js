
// 获取主题设置
const siteTheme = localStorage.getItem("site-theme");
let _theme = null;
if (siteTheme) {
  try {
    _theme = JSON.parse(siteTheme);
  } catch (e) {
    console.log(e);
  }
}
export const theme=_theme;

//缓存主题设置
export const saveTheme = (theme) => {
  localStorage.setItem("site-theme", JSON.stringify(theme));
};

//切换主题色
export const changeThemeColor = (color, oldColor) => {
  window.document.documentElement.setAttribute("data-theme", color);
  
  const style = document.getElementById("ui_theme");
  const href = style.getAttribute("href");
  style.setAttribute("href", href.replace(oldColor, color));
};
