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
        <aplayer :music="audio[0]" :list="audio" :showlrc="true" :autoplay="true"></aplayer>
      </div>
    </transition-group>
    <myfooter class="footer"></myfooter>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
import myfooter from "@/components/myfooter.vue";
import { getMusic } from "@/network/list.js";
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
      ],
    };
  },
  created(){
       getMusic().then((res) => {
      for (let i = 0; i < res.length; i++) {
        this.audio.push(res[i]);
      }
    });
  },
  components: { aplayer, myfooter },
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
#music {
  width: 100%;
  height: 100vh;
  background: url(https://blog-1306599808.file.myqcloud.com/other/bg13.webp)
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
  .flip-list-active {
    opacity: 0;
    transform: translateY(30px);
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