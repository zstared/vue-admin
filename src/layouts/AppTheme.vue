<template>
  <span>
    <el-drawer
      append-to-body
      direction="rtl"
      :visible="themeVisible"
      @close="toggleThemeVisible"
      size="300"
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
            <i v-if="themeLayout == 1" class="ri-check-line app-color"></i>
            <div class="left">
              <div class="left-module theme-bg-color"></div>
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
            <i v-if="themeLayout == 2" class="ri-check-line app-color"></i>
            <div class="left left-col theme-bg-color"></div>
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
            <i v-if="themeLayout == 3" class="ri-check-line app-color"></i>
            <div class="top">
              <div class="top-header theme-bg-color"></div>
              <div class="top-tab"></div>
            </div>
            <div class="bottom"></div>
          </div>

          <div
            :class="['layout layout-4', { active: themeLayout == 4 }]"
            @click="() => setThemeLayout(4)"
          >
            <i v-if="themeLayout == 4" class="ri-check-line app-color"></i>
            <div class="left left-col theme-bg-color"></div>
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
            <i v-if="themeLayout == 5" class="ri-check-line app-color"></i>
            <div class="top theme-bg-color"></div>
            <div class="bottom">
              <div class="left theme-bg-color"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
        <el-divider content-position="left">主题色</el-divider>
        <div class="theme-color-wrapper">
          <el-tooltip
            v-for="color of colors"
            :key="color.name"
            :content="color.label"
            placement="top"
          >
            <div
              class="theme-color"
              :style="`background:${color.value}`"
              @click="setThemeColor(color.name)"
            >
              <i v-if="themeColor === color.name" class="ri-check-line"></i>
            </div>
          </el-tooltip>
        </div>
        <el-divider content-position="left">背景色</el-divider>
        <div class="theme-bg-wrapper">
          <el-tooltip content="混色" placement="top">
            <div class="bg-color default" @click="setBgColor('default')">
              <div class="left"></div>
              <div class="right"></div>
              <i
                v-if="bgColor === 'default'"
                class="ri-check-line  app-color"
              ></i>
            </div>
          </el-tooltip>
          <el-tooltip content="亮色" placement="top">
            <div class="bg-color light" @click="setBgColor('light')">
              <i
                v-if="bgColor === 'light'"
                class="ri-check-line  app-color"
              ></i>
            </div>
          </el-tooltip>
          <el-tooltip content="主题色" placement="top">
            <div class="bg-color theme" @click="setBgColor('theme')">
              <div class="left app-bg-color-dark"></div>
              <div class="right"></div>
              <i
                v-if="bgColor === 'theme'"
                class="ri-check-line  app-color"
              ></i>
            </div>
          </el-tooltip>
          <el-tooltip content="暗色" placement="top">
            <div class="bg-color dark" @click="setBgColor('dark')">
              <i
                v-if="bgColor === 'dark'"
                class="ri-check-line  app-color"
              ></i>
            </div>
          </el-tooltip>
        </div>
        <el-divider content-position="left">其它设置</el-divider>
        <el-row class="theme-item" :gutter="10">
          <el-col :span="12">页签风格</el-col>
          <el-col :span="12">
            <el-select :value="themeTab" @change="setThemeTab">
              <el-option :value="1" label="卡片"></el-option>
              <el-option :value="2" label="圆滑"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </el-drawer>
  </span>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      colors: [
        { name: "red", label: "红色", value: "#F5222D" },
        { name: "orange", label: "橙色", value: "#FA541C" },
        { name: "yellow", label: "黄色", value: "#FAAD14" },
        { name: "green", label: "绿色", value: "#52C41A" },
        { name: "cyan", label: "青色", value: "#13c2c2" },
        { name: "blue", label: "蓝色", value: "#1890FF" },
        { name: "purple", label: "紫色", value: "#722ED1" },
      ],
    };
  },
  computed: {
    ...mapState({
      themeLayout: (state) => state.app.theme.layout,
      themeColor: (state) => state.app.theme.color,
      bgColor: (state) => state.app.theme.bgColor,
      themeVisible: (state) => state.app.themeVisible,
      themeTab: (state) => state.app.theme.tab,
    }),
  },
  methods: {
    toggleVisible() {
      this.themeVisible = !this.themeVisible;
    },
    ...mapMutations([
      "setThemeLayout",
      "toggleThemeVisible",
      "setThemeColor",
      "setThemeTab",
      "setBgColor",
    ]),
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
.theme-wrapper {
  padding: 10px 20px;
  .theme-layout-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 20px;
    .layout {
      width: 40px;
      height: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 10px;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &.layout-3 {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border: none;
      }
      &.layout-5 {
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        .bottom {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .left {
            height: 25px;
          }
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
          border-right: 1px solid #eee;
        }
        .left-menu {
          width: 7px;
          height: 30px;
        }
      }
      .left-col {
        border-right: 1px solid #eee;
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
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .top-header {
          height: 3px;
          width: 40px;
        }
        .top-tab {
          height: 2px;
        }
      }
      .bottom {
        height: 25px;
        width: 40px;
        //border: 1px solid #ddd;
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
    width: 20px;
    height: 20px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
.theme-bg-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
  .bg-color {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-right: 16px;
    color: #fff;
    position: relative;
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.default {
      display: flex;
      .left {
        flex: 1;
        background: $app-bg-color-dark;
      }
      .right {
        flex: 1;
        background: white;
      }
    }
    &.light {
      background: #fff;
    }
    &.theme {
      display: flex;
      .left {
        flex: 1;
      }
      .right {
        flex: 1;
        background: white;
      }
    }
    &.dark {
      background: $app-bg-color-dark;
    }
  }
}
.theme-item {
  display: flex;
  align-items: center;
}
</style>
