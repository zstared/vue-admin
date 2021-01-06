const app = {
  state: {
    layoutType: 5, //布局类型 1-分栏;2-纵向;3-横向;4-综合;5-常规;
    preLayoutType: null,
    tabType: 1, //页签类型 1-卡片;2-圆滑;
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
    setLayoutType: (state, type, preType) => {
      (state.layoutType = type), (state.preLayoutType = preType);
    },
    //自适应切换布局
    autoLayoutType: (state, isClear = false) => {
      if (isClear) {
        if (state.preLayoutType) {
          state.layoutType = state.preLayoutType;
          state.preLayoutType = null;
        }
      } else {
        if (!state.preLayoutType) {
          state.preLayoutType = state.layoutType;
          state.layoutType = 2;
        }
      }
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
