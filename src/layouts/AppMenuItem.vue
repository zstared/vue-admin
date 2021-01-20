<template>
  <div>
    <template v-for="menu of menus">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :key="menu.id"
        :index="menu.resource_code"
      >
        <template slot="title">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </template>
        <template v-for="child of menu.children" style="overflow-y:auto">
          <app-menu-item
            v-if="child.children && child.children.length > 0"
            :menus="[child]"
            :key="child.id"
          ></app-menu-item>
          <router-link v-else :to="child.path" :key="child.id">
            <el-menu-item :index="child.path">
              <i v-if="child.icon" :class="child.icon"></i>
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      <router-link v-else :to="menu.path" :key="menu.id">
        <el-menu-item :index="menu.path">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AppMenuItem",
  props: {
    menus: Array,
  },
  methods:{
	  ...mapActions([''])
  }
};
</script>
