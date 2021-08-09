<template>
  <div id="music">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">
        <span>音乐&nbsp;|&nbsp;Music</span><br /><span>听我所听❤</span
        ><br /><span>It's my lovest songs</span>
      </div>
      <div class="container" key="container">
        <aplayer :music="audio[0]" :list="audio" :showlrc="true"></aplayer>
      </div>
    </transition-group>
    <myfooter class="footer"></myfooter>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {
      // 音频列表
      audio: [
        {
          title: "打上花火",
          artist: "米津玄师",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/DAOKO%2C%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20-%20%E6%89%93%E4%B8%8A%E8%8A%B1%E7%81%AB.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
        {
          title: "A Little Story",
          artist: "Valentin",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/Valentin%20-%20A%20Little%20Story.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
        {
          title: "again",
          artist: "YUI",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/YUI%20-%20again.mp3",
          pic: 'https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png', // prettier-ignore
          lrc: "",
        },
        {
          title: "樱花樱花想见你",
          artist: "ゆう十",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/%E3%82%86%E3%81%86%E5%8D%81%20-%20%E6%A8%B1%E8%8A%B1%E6%A8%B1%E8%8A%B1%E6%83%B3%E8%A7%81%E4%BD%A0%EF%BC%88Cover%20RSP%EF%BC%89.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
        {
          title: "化身孤岛的蓝鲸",
          artist: "不才",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/%E4%B8%8D%E6%89%8D%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
        {
          title: "爱人错过",
          artist: "初月",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/%E5%88%9D%E6%9C%88%20-%20%E7%88%B1%E4%BA%BA%E9%94%99%E8%BF%87.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
        {
          title: "我吹过你吹过的晚风",
          artist: "崔小茶tea",
          url: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/music/%E5%B4%94%E5%B0%8F%E8%8C%B6tea%20-%20%E6%88%91%E5%90%B9%E8%BF%87%E4%BD%A0%E5%90%B9%E8%BF%87%E7%9A%84%E6%99%9A%E9%A3%8E.mp3",
          pic: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg11.png",
          lrc: "",
        },
      ],
    };
  },
  components: { aplayer, myfooter },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
};
</script>
<style lang="scss" scoped>
#music {
  width: 100%;
  height: 100vh;
  background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg13.png)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
  .container {
    position: relative;
    // bottom: 150px;
    width: 500px;
    transition: all 0.8s ease;
  }
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
  .footer {
    color: white;
  }
}
</style>