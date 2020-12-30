<template>
  <div
    :class="[
      'app-tab-wrapper',
      { 'is-layout-normal': layoutType === 5 ? true : false },
    ]"
  >
    <i
      v-if="layoutType == 5"
      @click="toggleCollapse"
      :class="[
        { 'ri-menu-fold-line': !sideCollapse },
        { 'ri-menu-unfold-line': sideCollapse },
        'toggle-menu',
      ]"
    ></i>
    <div class="app-tab app-tab-card">
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
    layoutType: Number,
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
    &:hover {
      color: $app-color;
    }
  }
  &.is-layout-normal {
    display: flex;
    align-items: center;
    .app-tab {
      width: calc(100% - 32px);
    }
  }
  .app-tab {
    height: $app-tabs-bar-height;
    //line-height:$app-tabs-bar-height;
    //display: flex;
    //align-items:center;
    display: flex;
    align-items: center;
    background: #fff;
  }
}
</style>
