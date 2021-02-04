<template>
  <div>
    <el-tabs value="notice">
      <el-tab-pane name="notice" label="通知(10)">
        <div class="msg">
          <div
            class="msg-item app-border-color app-btn"
            v-for="i of 10"
            :key="i"
          >
            <div class="msg-user">
              <el-avatar
                :src="
                  `${publicPath}avatar/${Math.ceil(Math.random() * 30)}.png`
                "
              ></el-avatar>
            </div>
            <div class="msg-content">
              <div class="msg-title">
                通知内容
              </div>
              <div class="msg-time">1小时前</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="message" label="消息(2)">
        <div class="msg">
          <div
            class="msg-item app-border-color app-btn"
            v-for="i of 2"
            :key="i"
          >
            <div class="msg-user">
              <el-avatar
                :src="
                  `${publicPath}avatar/${Math.ceil(Math.random() * 30)}.png`
                "
              ></el-avatar>
            </div>
            <div class="msg-content">
              <div class="msg-title">
                消息内容
              </div>
              <div class="msg-time">1小时前</div>
            </div>
          </div>
        </div></el-tab-pane
      >
      <el-tab-pane name="work" label="待办"
        ><div class="msg"></div
      ></el-tab-pane>
    </el-tabs>
    <div class="msg-options app-border-color">
      <div class="msg-option app-btn app-border-color">清空消息</div>
      <div class="msg-option app-btn app-border-color">查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.msg {
  &:empty::before {
    content: "暂无数据";
    color: gray;
    padding: 40px;
    text-align: center;
    display: block;
  }
}
.msg-item {
  display: flex;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 6px;
  cursor: pointer;

  &:first-child {
    padding-top: 8px;
  }
  &:last-child {
    border-bottom: none;
  }

  .msg-user {
    width: 60px;
  }

  .msg-content {
    display: flex;
    flex-direction: column;
    .msg-title {
      margin-bottom: 4px;
    }
    .msg-time {
      font-size: $app-font-size-small;
      color: $app-font-color-second;
    }
  }
}
.msg-options {
  display: flex;
  border-top-width: 1px;
  border-top-style: solid;
  .msg-option {
    flex: 1;
    text-align: center;
    padding: 16px 0;
    cursor: pointer;
    &:first-child {
      border-right-width: 1px;
      border-right-style: solid;
    }
  }
}
</style>
