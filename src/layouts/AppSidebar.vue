<template>
  <div
    :class="[
      'app-sidebar-wrapper',
      { 'is-collapse': sideCollapse },
      { 'is-layout-normal': themeLayout === 5 ? true : false },
    ]"
  >
    <div v-if="themeLayout != 5" class="logo-wrapper">
      <img :src="logoPng" />
      <div class="title">{{$t("title")}}</div>
    </div>
    <el-scrollbar class="app-menu-wrapper">
      <app-menu
        :sideCollapse="sideCollapse"
        :type="themeLayout === 4 ? 'module' : 'menu'"
      />
      <div style="height:1500px"></div>
    </el-scrollbar>
  </div>
</template>

<script>
import AppMenu from "./AppMenu";
import logoPng from "../assets/logo.png";
export default {
  name: "AppSidebar",
  components: {
    AppMenu,
  },
  data() {
    return { logoPng };
  },
  props: {
    sideCollapse: Boolean,
    themeLayout: Number,
  },
};
</script>

<style lang="scss" scoped>
.app-sidebar-wrapper {
  width: $app-sidebar-width;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  &.is-collapse {
    width: $app-sidebar-module-width;
    .title {
      display: none;
    }
    .logo-wrapper{
       justify-content: center;
    }
  }
  &.is-layout-normal {
    top: $app-header-height;
  }
  .logo-wrapper {
    padding: 0 6px;
    height: $app-logo-height;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    img {
      width: 34px;
      height: 34px;
      margin-right: 6px;
    }
    .title {
      font-size: $app-font-size-bigger;
      max-width: calc(#{$app-sidebar-width} - 46px);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .app-menu-wrapper {
    height: calc(100vh - #{$app-logo-height});
    .el-menu--collapse {
      width: $app-sidebar-module-width;
    }
  }
  &.is-layout-normal {
    .app-menu-wrapper {
      height: calc(100vh - #{$app-header-height});
    }
  }
}
</style>
