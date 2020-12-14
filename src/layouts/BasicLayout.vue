<template>
  <div>
    <column-sidebar />
    <div class="app-main">
      <div class="app-header-wrapper">
        <el-row class="app-header">
          <el-col :span="12" :xs="4" class="header-left">
            <i class="el-icon-s-fold toggle-menu"></i>
            <div class="nav-wrapper">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-col>
          <el-col :span="12" :xs="20" class="header-right"> </el-col>
        </el-row>
        <div class="app-tab">
			<el-tabs closable @tab-remove="removeTab">
				<el-tab-pane title="菜单"></el-tab-pane>
			</el-tabs>
		</div>
      </div>
      <div class="app-content"></div>
    </div>
  </div>
</template>

<script>
import ColumnSidebar from "./ColumnSidebar";
export default {
  name: "BasicLayout",
  components: {
    ColumnSidebar, //分栏侧边栏
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: calc(100% - 268px);
  margin-left: 268px;
  position: relative;
  background:#fff;
}
.app-header-wrapper {
   box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .app-header {
    height: 48px;
    width: 100%;
	padding: 0 16px;
    .header-left {
      display: flex;
      align-items: center;
      .toggle-menu {
        color:#3e3e3e;
		cursor: pointer;
		&:hover{
			color:#333;
		}
      }
      .nav-wrapper {
        height: 48px;
        display: flex;
        align-items: center;
        margin-left: 16px;
      }
    }
  }
}
</style>
