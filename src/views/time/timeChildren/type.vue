<template>
  <div id="type">
    <div class="title">
      <span class="icon iconfont iconexit">&#xe65a; </span>分类
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, index) in type" :key="index"  @click="isType(index)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
     isType(index){
        this.$emit('isType',this.type[index]);
     }
  },
  props: {
    type: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
#type {
  border-radius: 15px;
  background-color: rgba(235, 228, 228, 0.8);
  margin-top: 10px;
  width: 100%;
  .title {
    padding: 15px 15px 0 15px;
  }
  .itemList {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 8px;
      &:hover {
        color: #d3a4ff;
      }
    }
  }
}
</style>