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
        <timeline :article="article"></timeline>
        <div class="info">
          <mine></mine>
          <notice></notice>
          <tag></tag>
          <type></type>
        </div>
      </div>
    </transition-group>
    <myfooter class="timeFoot"></myfooter>
  </div>
</template>

<script>
import timeline from "@/components/timeline.vue";
import top from "@/components/top.vue";
import mine from "./timeChildren/mine.vue";
import notice from "./timeChildren/notice.vue";
import tag from "./timeChildren/type.vue";
import type from "./timeChildren/tag.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {
      article: [
        {
          time: "2021-08-03",
          title: "js天下第一",
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        },
        {
          time: "2021-08-03",
          title: "js天下第一",
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        },
        {
          time: "2021-08-03",
          title: "js天下第一",
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        },
        {
          time: "2021-08-03",
          title: "js天下第一",
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        },
        {
          time: "2021-08-03",
          title: "js天下第一",
          content:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        },
      ],
    };
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
      this.$store.commit("isOther");
    });
  },
};
</script>
<style lang="scss" scoped>
.timeLine {
  background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg3.png)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .flip-list,
  .flip-list-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .flip-list-active {
    position: absolute;
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