<template>
  <el-menu
    class="app-menu"
    :mode="mode"
    default-active="2"
    :collapse="sideCollapse"
    :collapse-transition="false"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>菜单一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        <el-menu-item index="1-4-2">选项4-2</el-menu-item>
        <el-menu-item index="1-4-3">选项4-3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">菜单二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">菜单三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">菜单四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import variables from "@/styles/variables.scss";
export default {
  name: "",
  data() {
    return { variables };
  },
  props: {
    sideCollapse: Boolean,
    mode: {
      type: String,
      default: "vertical",
    },
  },
};
</script>

<style lang="scss" scoped></style>
