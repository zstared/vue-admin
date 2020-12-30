<template>
  <div class="app-tab app-tab-card">
    <el-tabs closable type="card" @tab-remove="removeTab">
      <template v-for="i in 30">
        <el-tab-pane :label="'菜单' + i" :key="i"></el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "AppTab",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-tab {
  padding: 0 10px;
  height: $app-tabs-bar-height;
  //line-height:$app-tabs-bar-height;
  //display: flex;
  //align-items:center;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
}
</style>
