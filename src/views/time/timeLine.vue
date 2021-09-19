<template>
  <div class="timeLine">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">归档&nbsp;|&nbsp;Archives</div>
      <div class="content" key="content">
        <timeline :article="article" :title="title"></timeline>
        <div class="info">
          <mine :num="num"></mine>
          <notice></notice>
          <tag :tag="tag" v-if="tag.length > 0" @isTag="isTag"></tag>
          <type :type="type" v-if="type.length > 0" @isType="isType"></type>
        </div>
      </div>
    </transition-group>
    <myfooter class="timeFoot"></myfooter>
  </div>
</template>

<script>
import timeline from "@/components/timeline.vue";
import mine from "./timeChildren/mine.vue";
import notice from "./timeChildren/notice.vue";
import tag from "./timeChildren/tag.vue";
import type from "./timeChildren/type.vue";
import myfooter from "@/components/myfooter.vue";
import { getTimeLine } from "@/network/articles.js";
import { getType } from "@/network/type.js";
export default {
  data() {
    return {
      title:'文章总览',
      num: {
        article: 0,
        type: 0,
        tag: 0,
      },
      article: [],
      articleData: [],
      type: [],
      tag: [],
    };
  },
  methods: {
    isTag(tag) {
      this.article.splice(0, this.article.length);
      this.title=tag;
      for (let i = 0; i < this.articleData.length; i++) {
        if (this.articleData[i].tag == tag) {
          this.article.push(this.articleData[i]);
        }
      }
    },
    isType(type) {
      this.article.splice(0, this.article.length);
      this.title=type;
      for (let i = 0; i < this.articleData.length; i++) {
        if (this.articleData[i].type == type) {
          this.article.push(this.articleData[i]);
        }
      }
    },
  },
  created() {
    getTimeLine().then((res) => {
      for (let i = 0; i < res.length; i++) {
        res[i].time = res[i].time.slice(0, 10);
        this.article.push(res[i]);
        this.articleData.push(res[i]);
      }
      this.num.article = res.length;
    });
    getType().then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].tag) {
          this.tag.push(res[i].tag);
        }
        if (res[i].type) {
          this.type.push(res[i].type);
        }
      }
      this.num.type = this.type.length;
      this.num.tag = this.tag.length;
    });
  },
  components: {
    timeline,
    top,
    mine,
    notice,
    tag,
    type,
    myfooter,
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.$store.commit("isOther");
      }, 500);
    });
  },
};
</script>
<style lang="scss" scoped>
.timeLine {
  background: url(https://blog-1306599808.file.myqcloud.com/other/bg3.webp)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .flip-list,
  .flip-list-active {
    position: absolute;
    opacity: 0;
    transform: translateY(30px);
  }
  .title {
    transition: all 0.6s ease;
    text-align: center;
    width: 100%;
    height: 300px;
    line-height: 300px;
    font-size: 30px;
    color: white;
  }
  .content {
    transition: all 0.8s ease;
    width: 960px;
    display: flex;
    justify-content: center;
    .info {
      width: 25%;
    }
  }
  .timeFoot {
    color: white;
  }
}
</style>