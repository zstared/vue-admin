<template>
  <div class="app-header-wrapper">
    <el-row :class="['app-header', { 'is-layout-row': layoutType === 3||layoutType==5}]">
      <el-col v-if="layoutType !== 3&&layoutType!==5" :span="12" :xs="4" class="header-left">
        <i
          @click="toggleCollapse"
          :class="[
            { 'ri-menu-fold-line': !sideCollapse },
            { 'ri-menu-unfold-line': sideCollapse },
            'toggle-menu',
          ]"
        ></i>
        <div v-if="layoutType !== 4" class="nav-wrapper">
          <el-breadcrumb separator=">" class="hidden-xs-only">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-tabs v-if="layoutType==4">
          <el-tab-pane label="模块一" name="first"></el-tab-pane>
          <el-tab-pane label="模块二" name="second"></el-tab-pane>
          <el-tab-pane label="模块三" name="third"></el-tab-pane>
          <el-tab-pane label="模块四" name="fourth"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col v-else :span="6" :xs="4" class="header-left">
        <img :src="logoPng" />
        <div class="title hidden-xs-only">后台管理系统后台管理系统fdfd</div>
      </el-col>
      <el-col :span="layoutType !== 3&&layoutType!==5 ? 12 : 18" :xs="20" class="header-right">
        <app-menu
          v-if="layoutType === 3"
          :sideCollapse="sideCollapse"
          mode="horizontal"
        />
        <div class="app-options">
          <i class="ri-search-line"></i>
          <i class="ri-notification-line"></i>
          <i class="ri-fullscreen-line"></i>
          <i class="ri-github-fill"></i>
          <i class="ri-global-line"></i>
          <i class="ri-t-shirt-line"></i>
        </div>
        <el-dropdown @visible-change="toggleArrowAnimation">
          <div class="user-avatar">
            <el-avatar :size="28" :src="ImgUserMale"></el-avatar>
            <span class="hidden-xs-only">系统管理员</span>
            <i
              :class="{
                'ri-arrow-down-s-line': true,
                'app-dropdown-active': arrowAnimation,
              }"
            ></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="ri-user-line">个人信息</el-dropdown-item>
            <el-dropdown-item icon="ri-logout-circle-r-line"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <app-tab v-if="layoutType != 5" />
  </div>
</template>

<script>
import ImgUserMale from "@/assets/user_male.svg";
import logoPng from "../assets/logo.png";
import AppMenu from "./AppMenu";
import AppTab from "./AppTab";
export default {
  name: "AppHeader",
  components: {
    AppMenu,
    AppTab,
  },
  data() {
    return { ImgUserMale, arrowAnimation: false, logoPng };
  },
  props: {
    sideCollapse: Boolean,
    layoutType: Number,
  },
  methods: {
    toggleCollapse() {
      this.$emit("toggleCollapse");
    },
    //指向图标动画
    toggleArrowAnimation(flag) {
      this.arrowAnimation = flag;
    },
    removeTab() {},
  },
};
</script>

<style lang="scss" scoped>
.app-header-wrapper {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .app-header {
    height: $app-header-height;
    width: 100%;
    padding: 0 $app-padding;
    background: #fff;

    &.is-layout-row {
      background: $app-header-background;
      color: #fff !important;

      .el-dropdown {
        color: #fff;
      }
    }

    .header-left {
      display: flex;
      align-items: center;
      height: $app-header-height;
      .toggle-menu {
        cursor: pointer;
        font-size: 16px;
        margin-right: 16px;
        &:hover {
          color: $app-color;
        }
      }
      .nav-wrapper {
        height: $app-header-height;
        display: flex;
        align-items: center;
      }

      img {
        width: 34px;
        height: 34px;
        margin-right: 6px;
      }
      .title {
        font-size: $app-font-size-bigger;
        //max-width: calc(#{$app-sidebar-width} - 46px);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: $app-header-height;
      .app-options {
        [class*="ri"] {
          margin-left: 15px;
          font-size: 18px;
          cursor: pointer;
          &:hover {
            color: $app-color;
          }
        }
        margin-right: 15px;
      }

      .user-avatar {
        display: flex;
        align-items: center;
        cursor: pointer;
        .el-avatar {
          margin-right: 5px;
        }
        i {
          transition: $app-transition;
        }
        .app-dropdown-active {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
