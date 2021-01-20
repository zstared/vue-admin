import {
  theme,
  saveTheme,
  changeThemeColor,
  changeBgColor,
} from "../../utils/theme";
import { getCurrentUser } from "../../servers/core/user";
const app = {
  state: {
    theme: {
      layout: theme && theme.layout ? theme.layout : 5, //整体布局 1-分栏;2-纵向;3-横向;4-综合;5-常规;
      preLayout: null, //自适应之前的布局
      color: theme && theme.color ? theme.color : "blue", //主题色 blue/red/orange/yellow/cyan/green/purple
      bgColor: theme && theme.bgColor ? theme.bgColor : "default", //default/white/dark/theme
      tab: theme && theme.tab ? theme.tab : 1, //页签 1-卡片;2-圆滑;
      isTab: theme ? theme.isTab : true, //页签 1-启用;0-不启用
    },
    sideCollapse: false, //侧边栏是否折叠状态
    tabs: [], //导航栏页签
    activePath:window.location.href.path,//当前页面路径
    themeVisible: false,
    user: {}, //用户信息
    menus: [], //菜单
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
      saveTheme(state.theme);
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
      const oldThemeColor = state.theme.color;
      state.theme.color = color;
      changeThemeColor(color, oldThemeColor, state.theme.bgColor);
      saveTheme(state.theme);
    },
    //切换背景色
    setBgColor: (state, bgColor) => {
      const oldBgColor = state.theme.bgColor;
      state.theme.bgColor = bgColor;
      changeBgColor(bgColor, oldBgColor, state.theme.color);
      saveTheme(state.theme);
    },
    //切换页签
    setThemeTab: (state, tab) => {
      state.theme.tab = tab;
      saveTheme(state.theme);
    },
    //切换主题项配置
    toggleThemeItem: (state, type) => {
      state.theme[type] = state.theme[type] ? false : true;
      saveTheme(state.theme);
    },
    //添加页签
    addTab: (state, tab) => {
      state.activePath=tab.fullPath;
      if (state.tabs.some((t) => t.path === tab.path)) return;
      state.tabs.push({
         path:tab.path,
         fullPath:tab.fullPath,
         title:tab.title
      });
    },
    //删除页签
    delTab: (state, fullPath) => {
      for (const [i, v] of state.tabs.entries()) {
        if (v.fullPath === fullPath) {
          if(i==0){
             state.activePath==state.tabs[i].fullPath;
          }
          state.tabs.splice(i, 1);
          break;
        }
      }
    },
    //设置当前用户
    setCurrentUser: (state, user) => {
      state.user = user;
      state.menus = user.menus;
    },
  },
  actions: {
    addTab({ commit }, tab) {
      commit("addTab", tab);
    },
    delTab({ state, commit }, fullPath) {
      return new Promise((resolve) => {
        commit("delTab", fullPath);
        resolve([...state.tabs]);
      });
    },
    clearTab({commit }) {
      commit("CLEAR_TAB");
    },
    //获取当前用户信息
    async currentUser({ commit }) {
      const { code, data } = await getCurrentUser();
      if (code == 0) {
        commit("setCurrentUser", data);
      }
    },
  },
};

export default app;
