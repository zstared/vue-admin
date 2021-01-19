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
            <el-menu-item :index="child.resource_code">
              <i v-if="child.icon" :class="child.icon"></i>
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      <router-link v-else :to="menu.path" :key="menu.id">
        <el-menu-item :index="menu.resource_code">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "AppMenuItem",
  props: {
    menus: Array,
  },
};
</script>

<style lang="scss" scoped></style>

<!--<template v-for="item in routes">

            <router-link v-if="item.children.length===0" :to="item.url" :key="item.code">
                <el-menu-item :index="item.code">{{item.name}}</el-menu-item>
            </router-link>
            <el-submenu v-else :index="item.code" :key="item.code">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </template>
                <template v-for="child of item.children" style="overflow-y:auto">
                    <menu-subitem v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.url"></menu-subitem>
                    <router-link v-else :to="item.url+child.url" :key="child.code">
                        <el-menu-item :index="child.code">
                            {{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template> -->
