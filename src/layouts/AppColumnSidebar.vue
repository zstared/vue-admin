<template>
  <div class="app-siderbar-wrapper">
    <div class="app-siderbar-first">
      <div class="logo-img">
        <img :src="logoPng" />
      </div>
      <el-scrollbar class="menu-module">
        <div
          v-for="menu of menus"
          :key="menu.id"
          class="menu-module-item"
          @click="menuModuleClick(menu)"
          :class="{ active: activeModule === menu.code }"
        >
          <i class="el-icon-user-solid module-icon"></i>
          <span class="module-title">{{$t('menu.'+menu.code)}}</span>
        </div>
      </el-scrollbar>
    </div>
    <el-scrollbar
      :class="['app-siderbar-second', { 'is-collapse': sideCollapse }]"
    >
      <div class="title">{{$t("title")}}</div>
      <div class="second-menu">
        <app-menu type="module"></app-menu>
      </div>
      <div style="height:1500px"></div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import logoPng from "../assets/logo.png";
import AppMenu from "./AppMenu";
export default {
  name: "AppColumnSidebar",
  components: {
    AppMenu,
  },
  data() {
    return {
      logoPng,
    };
  },
  computed: {
    ...mapState({
      sideCollapse: (state) => state.app.sideCollapse,
      menus: (state) => state.app.menus,
      activeModule: (state) => state.app.activeModule,
    }),
  },
  methods: {
    menuModuleClick(menu) {
      this.$store.commit("setActiveModule", menu.code);
      if (menu.children && menu.children.length > 0) {
        this.$store.dispatch("setModuleMenus", menu.children);
        this.$router.push(menu.children[0].path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-siderbar-wrapper {
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
      }
    }
  }
  .app-siderbar-second {
    width: $app-sidebar-menu-width;
    height: 100vh;
    margin-left: $app-sidebar-module-width;
    .title {
      font-size: $app-font-size-bigger;
      max-width: calc(#{$app-sidebar-width} - 46px);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      height: $app-logo-height;
      line-height: $app-logo-height;
      padding: 0 10px;
      text-align: center;
    }
    &.is-collapse {
      width: 0;
    }
  }
}
</style>
