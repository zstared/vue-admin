<template>
  <div :class="['app-sidebar-wrapper', { 'is-collapse': sideCollapse },{'is-layout-normal':layoutType===5?true:false}]">
    <div v-if="layoutType!=5" class="logo-wrapper">
      <img :src="logoPng" />
      <div class="title">后台管理系统后台管理系统fdfd</div>
    </div>
    <el-scrollbar class="app-menu">
      <app-menu :sideCollapse="sideCollapse" />
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
       layoutType: Number,
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
  background: $app-menu-background;
  &.is-collapse {
    width: $app-sidebar-module-width;
    .title {
      display: none;
    }
  }
  &.is-layout-normal{
    top:$app-header-height;
  }
  //transition:$app-transition;
  .logo-wrapper {
    padding: 0 6px;
    height: $app-logo-height;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $app-menu-color;
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
  .app-menu {
    height: calc(100vh - #{$app-logo-height});
    /* .el-menu:not(.el-menu--collapse){
	 width:$app-sidebar-width;
  } */
    .el-menu--collapse {
      width: $app-sidebar-module-width;
    }
  }
}
</style>
