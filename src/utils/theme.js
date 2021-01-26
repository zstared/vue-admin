
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
export const theme = _theme;

//缓存主题设置
export const saveTheme = (theme) => {
  localStorage.setItem("site-theme", JSON.stringify(theme));
};

//切换主题色
export const changeThemeColor = (color, oldColor, bgColor) => {
  window.document.documentElement.setAttribute("data-theme", color);

  const style = document.getElementById("ui_theme");
  const href = style.getAttribute("href");
  if (bgColor === "dark") {
    style.setAttribute("href", href.replace(oldColor + "-dark", color + "-dark"));
  } else {
    style.setAttribute("href", href.replace(oldColor, color));
  }

};

//切换背景色
export const changeBgColor = (bgColor, oldBgColor, color) => {
  window.document.body.setAttribute("class", "theme-bg-" + bgColor);
  if (oldBgColor === "dark") {
    const style = document.getElementById("ui_theme");
    const href = style.getAttribute("href");
    style.setAttribute("href", href.replace(color + "-dark", bgColor == "dark" ? color + "-dark" : color));
  } else {
    const style = document.getElementById("ui_theme");
    const href = style.getAttribute("href");
    style.setAttribute("href", href.replace(color, bgColor == "dark" ? color + "-dark" : color));
  }

};
//匹配菜单
const matchMenu = (menus, menuPath) => {
  if (menus.some(item => item.path == menuPath)) {
    return true
  }
  menus.forEach((menu) => {
    if (menu.children) {
      return matchMenu(menu.children, menuPath)
    }
  })
  return false
}
//获取当前菜单模块
export const getActiveModule = (menus, menuPath) => {
  const module = menus.find(menu => {
    if (menu && menu.children) {
      return matchMenu(menu.children, menuPath)
    } else {
      return false
    }
  });
  return module;
}