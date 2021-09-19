<template>
  <div id="myarticle">
    <mytitle
      ><span slot="icon">&#xe64f; </span>
      <span slot="title">文章</span></mytitle
    >
    <div
      v-for="(item, index) in articles"
      :key="index"
      :class="{ articleItem1: index % 2 == 0, articleItem2: index % 2 == 1 }"
      @click="toArticle(index)"
    >
      <div class="img">
        <img v-lazy="item.img" alt="assets/img/lazy/error.jpeg" />
      </div>
      <div class="resume">
        <br />
        <div class="info time">
          <span class="icon iconfont iconexit">&#xe667; </span> &nbsp;{{
            item.time
          }}
        </div>
        <br />
        <div class="info title">{{ item.title }}</div>
        <br />
        <div class="info type">
          <span class="icon iconfont iconexit">&#xe659; </span
          >{{ item.type }} &nbsp; ·&nbsp;<span class="icon iconfont iconexit"
            >&#xe65a;
          </span>
          {{ item.tag }}
        </div>
        <br />
        <div class="info des">
          <span class="icon iconfont iconexit">&#xe662; </span> &nbsp;{{
            item.des
          }}
        </div>
        <br />
        <br />
        <div class="info point">···</div>
      </div>
    </div>
    <el-row class="button">
      <el-button round @click="more">加载更多</el-button>
    </el-row>
  </div>
</template>

<script>
import mytitle from "@/components/title.vue";
export default {
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    more() {
      this.$emit("more");
    },
    toArticle(index) {
      this.articles[index].content = this.articles[index].content.replaceAll(
        "&amp;lt;",
        "<."
      );
      this.articles[index].content = this.articles[index].content.replaceAll(
        "&amp;gt;",
        ">"
      );
      this.$store.commit("showArticles", this.articles[index]);
      this.$router.push("article");
    },
  },
  components: {
    mytitle,
  },
};
</script>
<style lang="scss" scoped>
#myarticle {
  width: 55%;
  min-width: 845px;
  margin-top: 30px;
  .articleItem1 {
    box-shadow: 0px 0px 15px #888888;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    width: calc(100% - 20px);
    height: 35vh;
    min-height: 300px;
    margin: 35px 10px;
    .img {
      overflow: hidden;
      width: 55%;
      height: 35vh;
      min-height: 300px;
      border-radius: 15px 0 0 15px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
      }
    }
    &:hover {
      box-shadow: 0px 0px 15px #000000;
      img {
        transform: scale(1.2, 1.2);
      }
    }
    .resume {
      width: 45%;
      .info {
        padding: 0 32px;
        width: 100%;
        text-align: right;
      }
      .point {
        font-size: 40px;
        font-weight: bold;
      }
      .time {
        color: rgb(138, 135, 135);
        font-size: 10px;
        span {
          font-size: 15px;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .type {
        span {
          font-size: 15px;
        }
      }
      .des {
        font-size: 20px;
      }
    }
  }
  .articleItem2 {
    @extend .articleItem1;
    display: flex;
    flex-direction: row-reverse;
    .img {
      border-radius: 0 15px 15px 0;
    }
    .resume {
      .info {
        text-align: left;
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
  }
}
</style>>