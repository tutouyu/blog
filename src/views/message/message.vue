<template>
  <div id="message">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">
        <span>留言板&nbsp;|&nbsp;Message</span><br /><span>留你所想❤</span
        ><br /><span>It's your saying time</span>
      </div>
      <div class="content" key="content">
        <board></board>
        <comment :comments="comments"></comment>
      </div>
    </transition-group>
    <myfooter></myfooter>
  </div>
</template>

<script>
import comment from "./messageChildren/comment.vue";
import board from "./messageChildren/board.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {
      comments: [
        {
          content: "这是一条评论1",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [
            {
              content: "这是一条评论",
              name: "呆呆兽",
              time: "2012-04-12",
              system: "Windows 10.0",
              browser: "Chrome 91.0.4472.124",
              children: [
                {
                  content: "这是一条评论",
                  name: "呆呆兽",
                  time: "2012-04-12",
                  system: "Windows 10.0",
                  browser: "Chrome 91.0.4472.124",
                  children: [
                    {
                      content: "这是一条评论",
                      name: "呆呆兽",
                      time: "2012-04-12",
                      system: "Windows 10.0",
                      browser: "Chrome 91.0.4472.124",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          content: "这是一条评论2",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论3",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论4",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论5",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论6",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论7",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论8",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论9",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
        {
          content: "这是一条评论10",
          name: "呆呆兽",
          time: "2012-04-12",
          system: "Windows 10.0",
          browser: "Chrome 91.0.4472.124",
          children: [],
        },
      ],
    };
  },
  components: {
    myfooter,
    board,
    comment,
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
};
</script>
<style lang="scss" scoped>
#message {
  width: 100%;
  background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg15.png)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
  .flip-list,
  .flip-list-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .flip-list-active {
    position: absolute;
  }
  .content {
    transition: all 0.8s ease;
  }
  .title {
    transition: all 0.6s ease;
    width: 100%;
    height: 200px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    span {
      text-align: center;
      width: 100%;
      font-size: 17px;
      color: white;
      padding-top: 8px;
    }
    span:nth-child(1) {
      font-size: 30px;
      color: white;
      padding: 0;
    }
  }
}
</style>