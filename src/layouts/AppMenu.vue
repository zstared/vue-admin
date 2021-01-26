<template>
  <el-menu
    class="app-menu"
    :mode="mode"
    :default-active="activePath"
    :collapse="sideCollapse"
    :collapse-transition="false"
  >
    <app-menu-item
      :menus="type === 'menu' ? menus : moduleMenus"
    ></app-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import AppMenuItem from "./AppMenuItem";
export default {
  name: "",
  components: {
    AppMenuItem,
  },
  props: {
    sideCollapse: Boolean,
    mode: {
      type: String,
      default: "vertical",
    },
    type: {
      type: String,
      default: "menu", //menu  module
    },
  },
  computed: {
    ...mapState({
      menus: (state) => state.app.menus,
      moduleMenus: (state) => state.app.moduleMenus,
      activePath: (state) => state.app.activePath,
    }),
  },
  created() {
    console.log(this.mode);
  },
};
</script>

<style lang="scss" scoped></style>
