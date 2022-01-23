<template>
  <div id="mine">
    <img
      src="https://blog-1306599808.file.myqcloud.com/other/a.webp"
      class="header"
      ref="head"
    />
    <div class="info">
      <div class="name">秃头鱼</div>
      <div class="saying">分享知识与生活!</div>
    </div>
    <div class="number">
      <div>文章<br /><span>{{num.article}}</span></div>
      <div>标签<br /><span>{{num.tag}}</span></div>
      <div>分类<br /><span>{{num.type}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss"scoped>
#mine {
  border-radius: 15px;
  background-color: rgba(235, 228, 228, 0.8);
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .info {
    width: 100%;
    text-align: center;
    padding-bottom: 15px;
    .saying {
      font-size: 13px;
      padding-top: 5px;
    }
  }

  .number {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 50px;
    text-align: center;
    span {
      line-height: 30px;
      font-size: 20px;
    }
  }
  .header {
    margin: 15px;
    border-radius: 110px;
    width: 110px;
    height: 110px;
    transition: all 2s linear;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
</style>>