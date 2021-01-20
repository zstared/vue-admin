<template>
  <el-scrollbar style="height:100%;">
    <keep-alive>
      <router-view v-if="!this.$route.meta.noCache"></router-view>
    </keep-alive>
    <router-view v-if="this.$route.meta.noCache"></router-view>
  </el-scrollbar>
</template>

<script>
export default {
  name: "",
};
</script>
