//获取主题设置
const siteTheme = localStorage.getItem("site-theme");
let theme = null;
if (siteTheme) {
  try {
    theme = JSON.parse(siteTheme);
  } catch (e) {
    console.log(e);
  }
}

//缓存主题设置
const saveTheme=(theme)=>{
  localStorage.setItem("site-theme",JSON.stringify(theme));
}

//切换主题色
const changeThemeColor=(color)=>{
  window.document.documentElement.setAttribute("data-theme", color);
}

const app = {
  state: {
    theme: {
      layout: theme && theme.layout ? theme.layout : 5, //整体布局 1-分栏;2-纵向;3-横向;4-综合;5-常规;
      preLayout: null, //自适应之前的布局
      color: theme && theme.color ? theme.color : "blue", //主题色 blue/red/orange/yellow/cyan/green/purple
      tab: theme && theme.tab ? theme.tab : 1, //页签 1-卡片;2-圆滑;
    },
    sideCollapse: false, //侧边栏是否折叠状态
    tabs: [], //导航栏页签
    cachedViews: [], //缓存的页面
    themeVisible: false,
  },

  mutations: {
    //展开折叠侧边栏
    toggleSideCollapse: (state, flag) => {
      state.sideCollapse = flag === undefined ? !state.sideCollapse : flag;
    },
    //展开折叠主题设置
    toggleThemeVisible: (state) => {
      state.themeVisible = !state.themeVisible;
    },
    //切换布局
    setThemeLayout: (state, type, preType) => {
      (state.theme.layout = type), (state.theme.preLayout = preType);
      saveTheme(state.theme)
    },
    //自适应切换布局
    autoThemeLayout: (state, isClear = false) => {
      if (isClear) {
        if (state.theme.preLayout) {
          state.theme.layout = state.theme.preLayout;
          state.theme.preLayout = null;
        }
      } else {
        if (!state.theme.preLayout) {
          state.preThemeLayout = state.theme.layout;
          state.theme.layout = 2;
        }
      }
    },
    //切换主题色
    setThemeColor: (state, color) => {
      state.theme.color = color;
      changeThemeColor(color)
      saveTheme(state.theme)
    },
    //切换页签
    setThemeTab: (state, tab) => {
      state.theme.tab = tab;
      saveTheme(state.theme)
    },
    //添加页签
    addTab: (state, tab) => {
      if (state.tabs.some((t) => t.path === tab.path)) return;
      state.tabs.push({
        name: tab.name,
        path: tab.path,
        query: tab.query,
        title: tab.meta.title || "页签",
      });
      if (!tab.meta.noCache) {
        state.cachedViews.push(tab.name);
      }
    },
    delTab: (state, tab) => {
      for (const [i, v] of state.tabs.entries()) {
        if (v.path == tab.path) {
          state.tabs.splice(i, 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === tab.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
  },
  actions: {},
};

export default app;
