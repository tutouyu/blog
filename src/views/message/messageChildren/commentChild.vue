<template>
  <div id="commentChild">
    <div v-if="children.length != 0">
      <div v-for="(item, index) in children" :key="index" class="item">
        {{ item.name }}{{ item.system }}{{ item.browser }}
        <div>{{ item.time }}</div>
        <div>{{ item.content }}</div>
        <commentChild :children="item.children"></commentChild>  
        <!-- 递归调用组件本身 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentChild",
  props: {
    children: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
#commentChild {
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .item {
    border-radius: 10px;
    width: 600px;
    padding: 15px;
    margin-left: 20px;
    background-color: rgba(170, 170, 170, 0.7);
  }
}
</style>