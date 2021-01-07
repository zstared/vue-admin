<template>
  <span>
    <el-drawer
      append-to-body
      direction="rtl"
      :visible="themeVisible"
      @close="toggleThemeVisible"
    >
      <div slot="title">
        <i class="ri-settings-3-line" style="margin-right:6px"></i>主题配置
      </div>
      <div class="theme-wrapper">
        <el-divider content-position="left">整体布局</el-divider>
        <div class="theme-layout-wrapper">
          <div
            :class="['layout layout-1', { active: themeLayout == 1 }]"
            @click="() => setThemeLayout(1)"
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

          <div
            :class="['layout layout-2', { active: themeLayout == 2 }]"
            @click="() => setThemeLayout(2)"
          >
            <div class="left left-col"></div>
            <div class="right">
              <div class="right-top">
                <div class="top-header"></div>
              </div>
            </div>
          </div>

          <div
            :class="['layout layout-3', { active: themeLayout == 3 }]"
            @click="() => setThemeLayout(3)"
          >
            <div class="top">
              <div class="top-header"></div>
              <div class="top-tab"></div>
            </div>
            <div class="bottom"></div>
          </div>

          <div
            :class="['layout layout-4', { active: themeLayout == 4 }]"
            @click="() => setThemeLayout(4)"
          >
            <div class="left left-col"></div>
            <div class="right">
              <div class="right-top">
                <div class="top-header"></div>
              </div>
            </div>
          </div>
          <div
            :class="['layout layout-5', { active: themeLayout == 5 }]"
            @click="() => setThemeLayout(5)"
          >
            <div class="left left-col"></div>
            <div class="right">
              <div class="right-top">
                <div class="top-header"></div>
              </div>
            </div>
          </div>
        </div>
        <el-divider content-position="left">主题色</el-divider>
        <div class="theme-color-wrapper">
          <div class="theme-color blue" @click="setThemeColor('blue')"></div>
          <div class="theme-color red" @click="setThemeColor('red')"></div>
          <div
            class="theme-color orange"
            @click="setThemeColor('orange')"
          ></div>
          <div
            class="theme-color yellow"
            @click="setThemeColor('yellow')"
          ></div>
          <div class="theme-color cyan" @click="setThemeColor('cyan')"></div>
          <div class="theme-color green" @click="setThemeColor('green')"></div>
          <div
            class="theme-color purple"
            @click="setThemeColor('purple')"
          ></div>
        </div>
      </div>

      <div class="theme-test"></div>
    </el-drawer>
  </span>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      themeLayout: (state) => state.app.theme.layout,
      themeColor: (state) => state.app.theme.color,
      themeVisible: (state) => state.app.themeVisible,
    }),
  },
  methods: {
    toggleVisible() {
      this.themeVisible = !this.themeVisible;
    },
    ...mapMutations(["setThemeLayout", "toggleThemeVisible", "setThemeColor"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme-handle.scss";
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
  padding: 10px 20px;
  .theme-layout-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 20px;
    .layout {
      border: 1px solid #ddd;
      width: 40px;
      height: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 10px;
      box-shadow: $app-box-shadow;
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
        width: 10px;
        height: 30px;
        border-right: 1px solid #eee;
        display: flex;
        align-items: center;
        .left-module {
          width: 3px;
          height: 30px;
          background: $app-header-bgcolor;
          border: 1px solid $app-header-bgcolor;
        }
        .left-menu {
          width: 7x;
          height: 30px;
        }
      }
      .left-col {
        background: $app-header-bgcolor;
        border: 1px solid $app-header-bgcolor;
      }
      .right {
        width: 30px;
        height: 30px;
        border-left: none;
        .right-top {
          height: 3px;
          width: 30px;
          //border-bottom: 1px solid #eee;
          .top-header {
            height: 2px;
            border-bottom: 1px solid #eee;
          }
        }
      }
      .top {
        width: 40px;
        height: 5px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .top-header {
          height: 3px;
          width: 40px;
          background: $app-header-bgcolor;
          border: 1px solid $app-header-bgcolor;
        }
        .top-tab {
          height: 2px;
        }
      }
      .bottom {
        height: 25px;
        width: 40px;
        border: 1px solid #ddd;
        border-top: none;
      }
    }
    .layout-title {
      margin-top: 10px;
      text-align: center;
      width: 40px;
    }
  }
}
.theme-color-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
  .theme-color {
    cursor: pointer;
    padding: 10px;
    margin-right: 16px;
    box-shadow: $app-box-shadow;
    &.blue {
      background-color: #1890ff;
    }
    &.red {
      background-color: #f5222d;
    }
    &.orange {
      background-color: #fa541c;
    }
    &.yellow {
      background-color: #faad14;
    }
    &.cyan {
      background-color: #13c2c2;
    }
    &.green {
      background-color: #52c41a;
    }
    &.purple {
      background-color: #722ed1;
    }
  }
}
.theme-test {
  width: 100px;
  height: 100px;
  @include background_color("app_color");
}
</style>
