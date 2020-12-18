<template>
  <div>
    <app-column-sidebar class="hidden-sm-and-down" />
    <el-drawer
      size="268px"
      direction="ltr"
      :visible.sync="sideVisible"
      :with-header="false"
    >
      <app-menu></app-menu>
    </el-drawer>
    <div
      :append-to-body="true"
      :class="['app-main', { 'is-collapse': sideCollapse }]"
    >
      <app-header
        @toggleCollapse="toggleCollapse"
        :sideCollapse="sideCollapse"
      />
      <div :class="['app-content', { 'is-collapse': sideCollapse }]">
        <el-scrollbar style="height:100%;background:#fff">
          <div v-for="i in 20" :key="i" style="height:300px">第{{ i }}部分</div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppColumnSidebar from "./AppColumnSidebar";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
export default {
  name: "AppLayout",
  components: {
    AppColumnSidebar, //分栏侧边栏
    AppHeader,
    AppMenu,
  },
  data() {
    return {
      media: "md", //xs:<768px sm:>=768px md>=992px lg>=1200px xl>=1920px
      sideVisible: false,
    };
  },
  created() {
    this.media = this.getDeviceWidth();
    window.addEventListener("resize", () => {
      this.media = this.getDeviceWidth();
    });
  },
  computed: {
    ...mapState({
      sideCollapse: (state) => state.app.sideCollapse,
    }),
  },
  methods: {
    //获取屏幕可见宽度
    getDeviceWidth() {
      const width = window.innerWidth;
      if (width < 768) {
        //this.toggleSideCollapse();
        return "xs";
      } else if (width >= 768 && width < 992) {
        return "sm";
      } else if (width >= 992 && width < 1200) {
        return "md";
      } else if (width >= 1200 && width < 1920) {
        return "lg";
      } else {
        return "xl";
      }
    },
    toggleCollapse() {
      this.toggleSideCollapse();
      if (this.media === "xs" || this.media == "sm") {
        this.sideVisible = !this.sideVisible;
      }
    },
    ...mapMutations(["toggleSideCollapse"]),
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: calc(100% - 268px);
  margin-left: 268px;
  position: relative;
  z-index: $app-z-index;
  background: #f6f8f9;

  transition: $app-transition;
  &.is-collapse {
    width: calc(100% - 68px);
    margin-left: 68px;
  }
  .app-content {
    padding: $app-content-padding;
    height: $app-content-height;
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
