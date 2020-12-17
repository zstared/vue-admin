<template>
  <div>
    <app-column-sidebar class="hidden-sm-and-down" />
    <div :class="['app-main', { 'is-collapse': sideCollapse }]">
      <app-header />
      <div :class="['app-content', { 'is-collapse': sideCollapse }]">
        <el-scrollbar style="height:100%;background:#fff">
          <div v-for="i in 20" :key="i" style="height:300px">第{{ i }}部分</div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppColumnSidebar from "./AppColumnSidebar";
import AppHeader from "./AppHeader";
export default {
  name: "AppLayout",
  components: {
    AppColumnSidebar, //分栏侧边栏
    AppHeader,
  },
  created() {
    window.addEventListener('resize',()=>{
        console.log(window.innerWidth)
    });
  },
  computed: {
    ...mapState({
      sideCollapse: (state) => state.app.sideCollapse,
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: calc(100% - 268px);
  margin-left: 268px;
  position: relative;
  z-index: $app-z-index;
  background:#f6f8f9;

  transition: $app-transition;
  &.is-collapse {
    width: calc(100% - 68px);
    margin-left: 68px;
  }
  .app-content {
    padding: $app-content-padding;
    height: $app-content-height;
  }
}
@media screen and (max-width: 992px) {
  .app-main {
    width: 100%;
    margin-left: 0;
  }
}
</style>
