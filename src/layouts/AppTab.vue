<template>
  <div
    :class="[
      'app-tab-wrapper',
      { 'is-layout-normal': themeLayout === 5 },
      { 'is-layout-row': themeLayout === 3 },
    ]"
  >
    <i
      v-if="themeLayout == 5"
      @click="toggleCollapse"
      :class="[
        { 'ri-menu-fold-line': !sideCollapse },
        { 'ri-menu-unfold-line': sideCollapse },
        'toggle-menu',
        'app-color-hover',
      ]"
    ></i>
    <div
      :class="[
        'app-tab',
        { 'app-tab-card': themeTab === 1 },
        ,
        { 'app-tab-mellow': themeTab === 2 },
      ]"
    >
      <el-tabs
        type="card"
        :value="activePath"
        @tab-click="openTab"
        @tab-remove="delTab"
      >
        <el-tab-pane
          v-for="tab in tabs"
          :label="tab.title"
          :name="tab.fullPath"
          :key="tab.fullPath"
          :closable="tab.fullPath!=='/work'"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppTab",
  computed: {
    ...mapState({
      tabs: (state) => state.app.tabs,
      activePath: (state) => state.app.activePath,
    }),
  },
  props: {
    sideCollapse: Boolean,
    themeLayout: Number,
    themeIsTab: Boolean,
    themeTab: Number,
  },
  methods: {
    toggleCollapse() {
      this.$emit("toggleCollapse");
    },
    openTab(tab) {
      this.$router.push(tab.name);
    },
    async delTab(name) {
      const tabs = await this.$store.dispatch("delTab", name);
      const lastTab = tabs.slice(-1)[0];
      if (name === this.$route.fullPath) {
        if (lastTab) {
          this.$router.push(lastTab.fullPath);
        } else {
          this.$router.push("/work");
        }
      }
    },
  },
  watch: {
    $route(to) {
      const tab = {
        path: to.path,
        fullPath: to.fullPath,
        title: to.meta.title,
      };
      this.$store.dispatch("addTab", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-tab-wrapper {
  padding: 0 10px;
  .toggle-menu {
    cursor: pointer;
    font-size: 16px;
    margin-right: 16px;
  }
  &.is-layout-normal {
    display: flex;
    align-items: center;
    border-top: none;
    .app-tab {
      width: calc(100% - 32px);
    }
  }
  &.is-layout-row {
    border-top: none;
  }
  .app-tab {
    height: $app-tab-height;
    display: flex;
    align-items: center;
    &.app-tab-mellow {
      align-items: flex-end;
    }
  }
}
</style>
