<template>
  <div>
    <h1 class="title">
      <span class="icon iconfont iconexit"><slot name="icon"></slot></span
      ><slot name="title"></slot>
    </h1>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  width: 55vw;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  border-bottom: 6px dotted #e8e8e8;
  span {
    font-size: 20px;
  }
}
</style>