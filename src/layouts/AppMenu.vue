<template>
  <div>
    <div class="logo-wrapper">
      <img :src="logoPng" />
      <div class="title">后台管理系统后台管理系统fdfd</div>
    </div>
    <el-scrollbar class="app-menu">
      <el-menu
        default-active="2"
        :background-color="variables['menu-background']"
        :text-color="variables['menu-color']"
        :active-text-color="variables['menu-color-active']"
      >
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
        <el-menu-item
          index="3"
          disabled
        >
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
import variables from "@/styles/variables.scss";
import logoPng from "../assets/logo.png";
export default {
  name: "",
  data() {
	console.log(variables)
    return { logoPng, variables };
  },
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  padding: 0 6px;
  height: 68px;
  display: flex;
  align-items: center;
  background:$app-menu-background;
  color:$app-menu-color;
  img {
    width: 34px;
    height: 34px;
    margin-right: 6px;
  }
  .title {
    font-size: $app-font-size-bigger;
    max-width: 222px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.app-menu {
  height: calc(100vh - 68px);
  background:$app-menu-background;
}
</style>
