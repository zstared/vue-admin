<template>
  <div>
    <el-scrollbar class="app-siderbar">
      <div class="logo-wrapper">
        <router-link to="/">
          <span class="logo">
            <img :src="logoPng" />
          </span>
          <span class="title"></span>
        </router-link>
        <el-tabs tab-position="left">
          <el-tab-pane label="首页">用户管理</el-tab-pane>
          <el-tab-pane label="OA">定时任务补偿</el-tab-pane>
          <el-tab-pane label="系统">配置管理</el-tab-pane>
          <el-tab-pane label="运维">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import logoPng from "../assets/logo.png";
export default {
  name: "BasicLayout",
  data() {
    return {
      logoPng,
    };
  },
};
</script>

<style lang="scss" scoped>
.app-siderbar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 266px;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-tabs {
    position: fixed;
  }

  .logo-wrapper {
    position: relative;
    height: 60px;
    overflow: hidden;
    line-height: 60px;
    background: transparent;
    height: 65px;
    line-height: 65px;
    text-align: center;
    .logo {
      position: fixed;
      top: 0;
      display: block;
      width: 65px;
      height: 65px;
      margin: 0;
      background: linear-gradient(90deg, #282c34, #000);
      img {
        display: inline-block;
        width: 32px;
        height: 32px;
        color: #fff;
        vertical-align: middle;
      }
      .title {
        padding-right: 15px;
        padding-left: 15px;
        margin-left: 65px;
        color: #515a6e !important;
        background: #fff !important;
        display: inline-block;
        overflow: hidden;
        font-size: 18px;
        line-height: 55px;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
    }
  }
}
</style>
