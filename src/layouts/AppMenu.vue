<template>
  <el-menu
    class="app-menu"
    :mode="mode"
    default-active="2"
    :collapse="sideCollapse"
    :collapse-transition="false"
  >
    <app-menu-item :menus="menus"></app-menu-item>
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
  },
  computed: {
    ...mapState({
      menus: (state) => state.app.menus,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
