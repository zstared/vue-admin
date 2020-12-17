const app = {
  state: {
    sideCollapse: false, //侧边栏折叠状态
    tabs: [], //导航栏页签
    cachedViews: [], //缓存的页面
  },

  mutations: {
    //展开折叠侧边栏
    toggleCollapse: (state) => {
	  console.log(state.sideCollapse)
      state.sideCollapse = !state.sideCollapse;
	},
	//添加页签
    addTab: (state,tab) => {
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
	delTab:(state,tab)=>{
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
	}
  },
  actions: {
    // toggleCollapse({ commit }) {
    //   commit("toggleCollapse");
    // },
  },
};

export default app;
