<template>
  <div id="tag">
    <div class="title">
      <span class="icon iconfont iconexit">&#xe659; </span>标签
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, index) in type" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: [
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
        "标签",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#tag {
    margin-bottom: 15px;
  border-radius: 15px;
  background-color: rgba(235, 228, 228, 0.8);
  margin-top: 10px;
  width: 100%;
  .title{
      padding:15px  15px 0 15px;
  }
  .itemList {
      padding: 15px;
      display: flex;
      flex-wrap: wrap;
      .item{
          padding: 8px;
          &:hover{
              color:#d3a4ff;
          }
      }
  }
}
</style>