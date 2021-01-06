<template>
  <span>
    <el-drawer
      append-to-body
      direction="btt"
      :visible="themeVisible"
	  @close="toggleThemeVisible"
    >
      <div class="title" slot="title">
        <i class="ri-t-shirt-line"></i>主题设置
      </div>
      <div class="theme-wrapper">
        <div class="layouts">
          <div class="layout-wrapper">
            <div
              :class="['layout layout-1', { active: layoutType == 1 }]"
              @click="() => setLayoutType(1)"
            >
              <div class="left">
                <div class="left-module"></div>
                <div class="left-menu"></div>
              </div>
              <div class="right">
                <div class="right-top">
                  <div class="top-header"></div>
                </div>
              </div>
            </div>
            <div class="layout-title">分栏布局</div>
          </div>
          <div class="layout-wrapper">
            <div
              :class="['layout layout-2', { active: layoutType == 2 }]"
              @click="() => setLayoutType(2)"
            >
              <div class="left left-col"></div>
              <div class="right">
                <div class="right-top">
                  <div class="top-header"></div>
                </div>
              </div>
            </div>
            <div class="layout-title">纵向布局</div>
          </div>
          <div class="layout-wrapper">
            <div
              :class="['layout layout-3', { active: layoutType == 3 }]"
              @click="() => setLayoutType(3)"
            >
              <div class="top">
                <div class="top-header"></div>
                <div class="top-tab"></div>
              </div>
              <div class="bottom"></div>
            </div>
            <div class="layout-title">横向布局</div>
          </div>
          <div class="layout-wrapper">
            <div
              :class="['layout layout-4', { active: layoutType == 4 }]"
              @click="() => setLayoutType(4)"
            >
              <div class="left left-col"></div>
              <div class="right">
                <div class="right-top">
                  <div class="top-header"></div>
                </div>
              </div>
            </div>
            <div class="layout-title">综合布局</div>
          </div>
          <div class="layout-wrapper">
            <div
              :class="['layout layout-5', { active: layoutType == 5 }]"
              @click="() => setLayoutType(5)"
            >
              <div class="left left-col"></div>
              <div class="right">
                <div class="right-top">
                  <div class="top-header"></div>
                </div>
              </div>
            </div>
            <div class="layout-title">常规布局</div>
          </div>
        </div>
      </div>
    </el-drawer>
  </span>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      layoutType: (state) => state.app.layoutType,
      themeVisible: (state) => state.app.themeVisible,
    }),
  },
  methods: {
    toggleVisible() {
      this.themeVisible = !this.themeVisible;
    },
    ...mapMutations(["setLayoutType", "toggleThemeVisible"]),
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  i {
    margin-right: 5px;
    font-size: 18px;
  }
}
.app-option {
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: $app-color;
  }
}
.theme-wrapper {
  padding: 0 20px;
  .layouts {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .layout-wrapper {
      margin: 0 30px;
    }
    .layout {
      border: 1px solid #ddd;
      width: 120px;
      height: 90px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        box-shadow: 1px 0px 3px 1px #ddd;
      }
      &.active {
        box-shadow: 1px 0px 3px 1px $app-color;
      }
      &.layout-3 {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border: none;
      }
      &.layout-5 {
        align-items: flex-start;
        .top-header {
          background: $app-header-bgcolor;
        }
      }
      .left {
        width: 30px;
        height: 90px;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        .left-module {
          width: 10px;
          height: 90px;
          background: $app-header-bgcolor;
          border: 1px solid $app-header-bgcolor;
        }
        .left-menu {
          width: 20px;
          height: 90px;
        }
      }
      .left-col {
        background: $app-header-bgcolor;
        border: 1px solid $app-header-bgcolor;
      }
      .right {
        width: 90px;
        height: 90px;
        border-left: none;
        .right-top {
          height: 14px;
          border-bottom: 1px solid #eee;
          .top-header {
            height: 8px;
            border-bottom: 1px solid #eee;
          }
        }
      }
      .top {
        width: 120px;
        height: 14px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .top-header {
          height: 8px;
          width: 120px;
          background: $app-header-bgcolor;
          border: 1px solid $app-header-bgcolor;
        }
        .top-tab {
          height: 6px;
          /* border-left: 1px solid #ddd;
          border-right: 1px solid #ddd; */
        }
      }
      .bottom {
        height: 76px;
        width: 120px;
        border: 1px solid #ddd;
        border-top: none;
      }
    }
    .layout-title {
      margin-top: 10px;
      text-align: center;
      width: 120px;
    }
  }
}
</style>
