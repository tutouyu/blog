<template>
  <div id="article">
    <div class="top" v-bind:style="{ background: 'url(' + img + ')' }">
      <div class="title">
        <div id="title">{{ title }}</div>
        <div class="info">
          <span>{{ time }}</span
          >&nbsp;·&nbsp;<span>{{ read }}次阅读</span>
        </div>
      </div>
    </div>
    <div class="content" v-html="$xss(content)">{{ content }}</div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import { addRead } from "@/network/articles.js";
import myfooter from "@/components/myfooter.vue";
export default {
  created() {
    addRead(this.$store.state.showArticle.id).then((res) => {});
  },
  data() {
    return {
      title: this.$store.state.showArticle.title,
      time: this.$store.state.showArticle.time,
      read: this.$store.state.showArticle.readTimes,
      content: this.$store.state.showArticle.content,
      img: this.$store.state.showArticle.img,
    };
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.$store.commit("isOther");
      }, 500);
    });
  },
  components: {
    myfooter,
  },
};
</script>
<style lang="scss" scoped>
#article {
  background-color: rgb(228, 220, 220);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .top {
    width: 100%;
    height: 40vh;
    display: flex;
    background-repeat: no-repeat;
    background-size: 100%;
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
  .content {
    line-height: 40px;
    padding: 30px;
    min-height: 434px;
    width: 840px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow:2px 2px 10px 1px;
  }
}
</style>