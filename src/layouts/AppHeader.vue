<template>
  <div class="app-header-wrapper">
    <el-row
      :class="[
        'app-header',
        { 'is-layout-row': themeLayout === 3 },
        { 'is-layout-normal': themeLayout === 5 },
      ]"
    >
      <el-col
        v-if="themeLayout !== 3 && themeLayout !== 5"
        :span="12"
        :xs="4"
        class="header-left"
      >
        <i
          @click="toggleCollapse"
          :class="[
            { 'ri-menu-fold-line': !sideCollapse },
            { 'ri-menu-unfold-line': sideCollapse },
            'toggle-menu',
            'app-color-hover',
          ]"
        ></i>
        <div v-if="themeLayout !== 4" class="nav-wrapper">
          <el-breadcrumb separator=">" class="hidden-xs-only">
            <el-breadcrumb-item v-for="bread of breadcrumbs" :key="bread.code">
                 {{$t('menu.'+bread.code)}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-tabs
          v-if="themeLayout == 4"
          :value="activeModule"
          @tab-click="menuModuleClick"
        >
          <el-tab-pane
            v-for="menu of menus"
            :key="menu.id"
            :name="menu.code"
            :label="$t('menu.'+menu.code)"
          />
        </el-tabs>
      </el-col>
      <el-col v-else :span="6" :xs="4" class="header-left">
        <img :src="logoPng" />
        <div class="title hidden-xs-only">{{$t('title')}}</div>
      </el-col>
      <el-col
        :span="themeLayout !== 3 && themeLayout !== 5 ? 12 : 18"
        :xs="20"
        class="header-right"
      >
        <app-menu
          v-if="themeLayout === 3"
          :sideCollapse="sideCollapse"
          mode="horizontal"
        />
        <div class="app-options">
          <i class="app-option app-color-hover ri-search-line"></i>
          <i class="app-option app-color-hover ri-notification-line"></i>
          <i
            :class="[
              'app-option app-color-hover',
              { 'ri-fullscreen-line': !isFullScreen },
              { 'ri-fullscreen-exit-line': isFullScreen },
            ]"
            @click="appOption('fullscreen')"
          ></i>
          <i
            class="app-option app-color-hover ri-github-fill"
            @click="appOption('github')"
          ></i>

          <el-dropdown  @command="toggleLang">
            <i class="app-option app-color-hover ri-global-line"></i>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="zh">中文简体</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <i
            class="app-option app-color-hover ri-t-shirt-line"
            @click="toggleThemeVisible"
          ></i>
        </div>
        <el-dropdown @visible-change="toggleArrowAnimation">
          <div class="user-avatar">
            <el-avatar :size="28" :src="ImgUserMale"></el-avatar>
            <span class="hidden-xs-only">{{user.user_name}}</span>
            <i
              :class="{
                'ri-arrow-down-s-line': true,
                'app-dropdown-active': arrowAnimation,
              }"
            ></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="ri-user-line">{{$t('user.info')}}</el-dropdown-item>
            <el-dropdown-item icon="ri-logout-circle-r-line"
              >{{$t('user.logout')}}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <app-tab v-if="themeLayout != 5 && themeIsTab" :themeTab="themeTab" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppMenu from "./AppMenu";
import AppTab from "./AppTab";
import ImgUserMale from "@/assets/user_male.svg";
import logoPng from "../assets/logo.png";

export default {
  name: "AppHeader",
  components: {
    AppMenu,
    AppTab,
  },
  data() {
    return { ImgUserMale, arrowAnimation: false, logoPng, isFullScreen: false };
  },
  props: {
    sideCollapse: Boolean,
    themeLayout: Number,
    themeTab: Number,
    themeIsTab: Boolean,
  },
  computed: {
    ...mapState({
      menus: (state) => state.app.menus,
      activeModule: (state) => state.app.activeModule,
      breadcrumbs:state=>state.app.breadcrumbs,
      user:state=>state.app.user
    }),
  },
  created() {
    document.addEventListener("fullscreenchange", () => {
      this.isFullScreen = !this.isFullScreen;
    });
  },
  methods: {
    toggleLang(lang){
        localStorage.setItem('lang',lang)
        this.$i18n.locale=lang
    },
    toggleCollapse() {
      this.$emit("toggleCollapse");
    },
    menuModuleClick(menu) {
      this.$store.commit("setActiveModule", menu.name);
      const mod = this.menus.find((item) => item.code === menu.name);
      if (mod.children && mod.children.length > 0) {
        this.$store.dispatch("setModuleMenus", mod.children);
        this.$router.push(mod.children[0].path);
      }
    },
    //指向图标动画
    toggleArrowAnimation(flag) {
      this.arrowAnimation = flag;
    },
    //应用操作
    appOption(type) {
      switch (type) {
        case "fullscreen":
          this.toggleFullScreen();

          break;
        case "github":
          window.open("https://github.com/zstared/vue-admin", "_blank");
          break;
        default:
          break;
      }
    },
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
    ...mapMutations(["toggleThemeVisible"]),
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

    .header-left {
      display: flex;
      align-items: center;
      height: $app-header-height;

      .toggle-menu {
        cursor: pointer;
        font-size: 16px;
        margin-right: 16px;
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
        margin-right: 15px;

        .app-option {
          margin-left: 15px;
          font-size: 18px;
          cursor: pointer;
        }
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
