<template>
   <app-menu />
</template>

<script>
import AppMenu from "./AppMenu";
export default {
  name: "AppSidebar",
  components: {
    AppMenu,
  },
  data() {
    return {};
  },
 props: {
    sideCollapse: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
