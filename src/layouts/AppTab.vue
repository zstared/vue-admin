<template>
  <div :class="['app-tab-wrapper', { 'is-layout-normal': themeLayout === 5 },{ 'is-layout-row': themeLayout === 3 }]">
    <i
      v-if="themeLayout == 5"
      @click="toggleCollapse"
      :class="[
        { 'ri-menu-fold-line': !sideCollapse },
        { 'ri-menu-unfold-line': sideCollapse },
        'toggle-menu',
        'app-color-hover'
      ]"
    ></i>
    <div
      :class="[
        'app-tab',
        { 'app-tab-card': tabPage === 1 },
        ,
        { 'app-tab-mellow': tabPage === 2 },
      ]"
    >
      <el-tabs closable type="card">
        <template v-for="i in 30">
          <el-tab-pane :label="'菜单' + i" :key="i"></el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTab",
  data() {
    return {};
  },
  props: {
    sideCollapse: Boolean,
    themeLayout: Number,
    tabPage: Number,
  },
  methods: {
    toggleCollapse() {
      this.$emit("toggleCollapse");
    },
  },
};
</script>

<style lang="scss" scoped>
.app-tab-wrapper {
  padding: 0 10px;
  background: #fff;
  border-top: 1px solid #eee;
  .toggle-menu {
    cursor: pointer;
    font-size: 16px;
    margin-right: 16px;
  }
  &.is-layout-normal {
    display: flex;
    align-items: center;
    border-top:none;
    .app-tab {
      width: calc(100% - 32px);
    }
  }
  &.is-layout-row{
    border-top:none;
  }
  .app-tab {
    height: $app-tabs-bar-height;
    display: flex;
    align-items: center;
    background: #fff;
    &.app-tab-mellow {
      align-items: flex-end;
    }
  }
}
</style>
