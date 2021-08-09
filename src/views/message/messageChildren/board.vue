<template>
  <div id="board">
    <div class="title">
      <span class="icon iconfont iconexit">&#xe662; </span>评论
    </div>
    <el-input v-model="name" placeholder="请输入昵称" class="info"></el-input>
    <el-input v-model="mail" placeholder="请输入邮箱" class="info"></el-input>
    <el-input
      type="textarea"
      placeholder="请输入评论内容"
      v-model="comment"
      show-word-limit
      :rows="8"
    >
    </el-input>
    <el-row>
      <el-button type="warning" round class="button">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      mail: "",
      comment: "",
    };
  },
};
</script>
<style></style>
<style lang="scss" scoped>
#board {
  border-radius: 15px;
  background-color: rgba(170, 170, 170, 0.7);
  padding: 20px;
  width: 600px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  .title {
    width: 100%;
    font-weight: bold;
    font-size: 18px;
  }
  .info {
    width: 49%;
    padding: 15px 0;
  }
  .button {
    margin-top: 15px;
  }
}
</style>