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
  created(){
     addRead(this.$store.state.showArticle.id).then((res) => {
    });
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .top {
    width: 100%;
    height: 40vh;
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
  .content {
    line-height: 40px;
    overflow: scroll;
    padding: 30px;
    min-height: 434px;
    width: 720px;
    margin: 10px 0;
    border-radius: 20px 0 0 0;
    background-color: rgba(179, 176, 176, 0.4);

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.8);
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
   &::-webkit-scrollbar {
      width: 5px;
      background-color: rgba(0, 0, 0, 0);
    }
    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      background-color: #555;
    }
  }
}
</style>