<template>
  <el-tabs>
    <el-tab-pane label="通知">
      <div class="msg-item app-bg-color-light-hover " v-for="i of 6" :key="i">
        <div class="msg-user"><el-avatar icon="ri-user-line"></el-avatar></div>
        <div class="msg-content">
          <div class="msg-title">
            通知标题通知标题通知标题通知标题通知标题通知标题
          </div>
          <div class="msg-time">1小时前</div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="消息"> </el-tab-pane>
    <el-tab-pane label="待办"> </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.msg-item {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
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
      color: #444;
    }
    .msg-time {
      font-size: $app-font-size-small;
      color: $app-font-color-second;
    }
  }
}
</style>
