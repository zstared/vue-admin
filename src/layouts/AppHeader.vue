<template>
  <div class="app-header-wrapper">
    <el-row class="app-header">
      <el-col :span="12" :xs="4" class="header-left">
        <i @click="toggleCollapse" :class="[{'ri-menu-fold-line':!sideCollapse},{'ri-menu-unfold-line':sideCollapse},'toggle-menu']"></i>
        <div class="nav-wrapper">
          <el-breadcrumb separator=">" class="hidden-xs-only">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="12" :xs="20" class="header-right">
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
    <div class="app-tab app-tab-card">
      <el-tabs closable type="card" @tab-remove="removeTab">
        <template v-for="i in 30">
          <el-tab-pane :label="'菜单' + i" :key="i"></el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import ImgUserMale from "@/assets/user_male.svg";
export default {
  name: "AppHeader",
  data() {
    return { ImgUserMale, arrowAnimation: false };
  },
  computed:{
     ...mapState({
       sideCollapse: state => state.app.sideCollapse,
     })
  },
  methods: {
    ...mapMutations(['toggleCollapse']),
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
    height: $app-nav-bar-height;
    width: 100%;
    padding: 0 16px;
    background: #fff;
    .header-left {
      display: flex;
      align-items: center;
      .toggle-menu {
        cursor: pointer;
        font-size: 16px;
        &:hover {
          color: $app-color;
        }
      }
      .nav-wrapper {
        height: $app-nav-bar-height;
        display: flex;
        align-items: center;
        margin-left: 16px;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: $app-nav-bar-height;
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
  .app-tab {
    padding: 0 10px;
    height: $app-tabs-bar-height;
    //line-height:$app-tabs-bar-height;
    //display: flex;
    //align-items:center;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    background: #fff;
  }
}
</style>
