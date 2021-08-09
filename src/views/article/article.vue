<template>
  <di id="article">
    <div class="top">
      <div class="title">
        <div id="title">{{ title }}</div>
        <div class="info">
          <span>{{ time }}</span
          >&nbsp;·&nbsp;<span>{{ read }}次阅读</span>
        </div>
      </div>
    </div>
    <div class="content">{{content}}</div>
    <myfooter></myfooter>
  </di>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {
      title: "js天下第一",
      time: "2019-03-12",
      read: 301,
      content:"内容",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
  components: {
    myfooter,
  },
};
</script>
<style lang="scss" scoped>
#article {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  .top {
    width: 100%;
    height: 40vh;
    background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png)
      fixed center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .title {
        width: 40%;
      color: white;
      #title {
        font-size: 40px;
      }
      .info {
        line-height: 80px;
      }
    }
  }
  .content{
      min-height: 500px;
      width: 40%;
  }
}
</style>