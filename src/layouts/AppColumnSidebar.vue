<template>
  <div class="app-siderbar">
    <div class="app-siderbar-first">
      <div class="logo-img">
        <img :src="logoPng" />
      </div>
      <el-scrollbar class="menu-module">
        <template v-for="i in 20">
          <div :key="i" class="menu-module-item">
            <i class="el-icon-user-solid module-icon"></i>
            <span class="module-title">模块{{ i }}</span>
          </div>
        </template>
      </el-scrollbar>
    </div>
    <el-scrollbar
      :class="['app-siderbar-second', { 'is-collapse': sideCollapse }]"
    >
      <div class="title">后台管理系统后台管理系统fdfd</div>
      <el-menu default-active="2" class="second-menu">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div style="height:1500px"></div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import logoPng from "../assets/logo.png";
export default {
  name: "AppColumnSidebar",
  data() {
    return {
      logoPng,
    };
  },
  computed: {
    ...mapState({
      sideCollapse: (state) => state.app.sideCollapse,
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-siderbar {
  position: fixed;
  width: $app-sidebar-width;
  display: flex;
  .app-siderbar-first {
    position: fixed;
    width: $app-sidebar-module-width;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    background: #15171b;
    color: #fff;
    .logo-img {
      img {
        width: 34px;
        height: 34px;
        padding: 17px;
      }
    }
    .menu-module {
      height: calc(100vh - #{$app-logo-height});
      display: flex;
      flex-direction: column;
      .menu-module-item {
        width: $app-sidebar-module-width;
        height: $app-sidebar-module-height;
        display: flex;
        cursor: pointer;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .module-icon {
          font-size: 18px;
          margin-bottom: 6px;
        }
        .module-title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &.active {
          background: #3591ff;
        }
      }
    }
  }
  .app-siderbar-second {
    //transition:$app-transition;
    width: $app-sidebar-menu-width;
    height: 100vh;
    margin-left: $app-sidebar-module-width;
    background: #fff;
    .title {
      font-size: $app-font-size-bigger;
      max-width: calc(#{$app-sidebar-width} - 46px);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      height: $app-logo-height;
      line-height: $app-logo-height;
      padding:0 10px;
    }
    .second-menu {
      border-right: none;
    }
    &.is-collapse {
      width: 0;
    }
  }
}
</style>
