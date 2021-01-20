<template>
  <div>
    <app-column-sidebar v-if="themeLayout === 1" class="hidden-sm-and-down" />
    <app-sidebar
      v-else-if="themeLayout === 2 || themeLayout == 4"
      :sideCollapse="sideCollapse"
    />
    <el-drawer
      append-to-body
      size="268px"
      direction="ltr"
      :visible="sideVisible"
      :with-header="false"
      @close="toggleCollapse(false)"
    >
      <app-sidebar />
    </el-drawer>
    <div
      v-if="themeLayout != 5"
      :class="[
        'app-main',
        { 'is-collapse': sideCollapse },
        { 'is-layout-row': themeLayout === 3 },
      ]"
    >
      <app-header
        @toggleCollapse="toggleCollapse"
        :sideCollapse="sideCollapse"
        :themeLayout="themeLayout"
        :themeTab="themeTab"
        :themeIsTab="themeIsTab"
      />
      <div
        :class="[
          'app-content-wrapper',
          { 'is-collapse': sideCollapse },
          { 'is-notab': !themeIsTab },
        ]"
      >
        <app-content class="app-content" />
      </div>
    </div>
    <div v-else>
      <app-header
        @toggleCollapse="toggleCollapse"
        :sideCollapse="sideCollapse"
        :themeLayout="themeLayout"
      />
      <app-sidebar :themeLayout="themeLayout" :sideCollapse="sideCollapse" />
      <div :class="['app-main', { 'is-collapse': sideCollapse }]">
        <app-tab
          v-if="themeIsTab"
          @toggleCollapse="toggleCollapse"
          :themeLayout="themeLayout"
          :sideCollapse="sideCollapse"
          :themeTab="themeTab"
        />
        <div
          :class="[
            'app-content-wrapper',
            { 'is-collapse': sideCollapse },
            { 'is-notab': !themeIsTab },
          ]"
        >
          <app-content class="app-content" />
        </div>
      </div>
    </div>
    <app-theme />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppColumnSidebar from "./AppColumnSidebar";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppTab from "./AppTab";
import AppContent from "./AppContent";
import AppTheme from "./AppTheme";

export default {
  name: "AppLayout",
  components: {
    AppColumnSidebar, //分栏侧边栏
    AppSidebar, //侧边栏
    AppHeader,
    AppTab,
    AppContent,
    AppTheme,
  },
  data() {
    return {
      media: "md", //xs:<768px sm:>=768px md>=992px lg>=1200px xl>=1920px
      sideVisible: false, //隐藏的侧边栏 是否滑出
      dialogVisible: false,
    };
  },
  async created() {
    this.media = this.getDeviceWidth();
    window.addEventListener("resize", () => {
      this.media = this.getDeviceWidth();
    });
    this.$store.dispatch("addTab", {
      path: this.$route.path,
      fullPath: this.$route.fullPath,
      title: this.$route.meta.title,
    });
    this.$store.dispatch("currentUser");
  },
  computed: {
    ...mapState({
      sideCollapse: (state) => state.app.sideCollapse,
      themeLayout: (state) => state.app.theme.layout,
      themeIsTab: (state) => state.app.theme.isTab,
      themeTab: (state) => state.app.theme.tab,
    }),
  },
  methods: {
    //获取屏幕可见宽度
    getDeviceWidth() {
      const width = window.innerWidth;
      if (width < 768) {
        this.autoSmallScreen();
        return "xs";
      } else if (width >= 768 && width < 992) {
        this.autoSmallScreen();
        return "sm";
      } else if (width >= 992 && width < 1200) {
        this.autoBigScreen();
        return "md";
      } else if (width >= 1200 && width < 1920) {
        this.autoBigScreen();
        return "lg";
      } else {
        this.autoBigScreen();
        return "xl";
      }
    },

    //适应 xs sm
    autoSmallScreen() {
      this.toggleSideCollapse(true); //默认隐藏侧边栏
      this.autoThemeLayout(); //自适应小屏布局
    },

    //适应 md lg xl
    autoBigScreen() {
      this.autoThemeLayout(true); //恢复之前布局
      this.sideVisible = false; //
    },

    //隐藏侧边栏 是否滑出
    toggleCollapse() {
      this.toggleSideCollapse();
      if (this.media === "xs" || this.media == "sm") {
        this.sideVisible = !this.sideVisible;
      }
    },
    ...mapMutations(["toggleSideCollapse", "autoThemeLayout"]),
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: calc(100% - #{$app-sidebar-width});
  margin-left: $app-sidebar-width;
  position: relative;

  &.is-collapse {
    width: calc(100% - #{$app-sidebar-module-width});
    margin-left: $app-sidebar-module-width;
  }

  &.is-layout-row {
    width: 100%;
    margin-left: 0;
  }

  .tab-wrapper {
    display: flex;
    align-items: center;
  }

  .app-content-wrapper {
    padding: $app-padding;
    height: $app-content-height;
    transition: $app-transition;
    &.is-notab {
      height: $app-content-height-notab;
    }
  }
}

@media screen and (max-width: 992px) {
  .app-main {
    width: 100%;
    margin-left: 0;

    &.is-collapse {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
