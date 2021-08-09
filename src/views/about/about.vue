<template >
  <div id="mine">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">
        <span>关于&nbsp;|&nbsp;About</span><br /><span>哈喽，我是秃头鱼🐟</span
        ><br /><span>聊聊我自己</span>
      </div>
      <div class="introduce" key="introduce">
        <div class="words">
          <p>一条前端开发，浙江台州人，</p>
          <p>目前是吉首大学的一名准大三学生</p>
          <p>决定往前端的h5游戏方向发展，</p>
          <p>目标是能够在明年的校招中拿到大厂offer</p>
          <p>个人是一名小阿宅，</p>
          <p>喜欢打打游戏，看看番剧，睡睡觉</p>
          <div>希望以后能找个像</div>
          <div id="text"></div>
          <div>一样的女旁友，</div>
          <p>嘿嘿嘿</p>
        </div>
        <img src="@/assets/img/head/六花.jpg" alt="" />
        <div class="name">
          <p>秃</p>
          <p>头</p>
          <p>鱼</p>
        </div>
      </div>
    </transition-group>

    <myfooter class="footer"></myfooter>
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
    setTimeout(() => {
      let divTyping = document.getElementById("text");
      let i = 0,
        timer = 0,
        str = "新垣结衣or小鸟游六花or杨超越";
      function typing() {
        if (i <= str.length) {
          divTyping.innerHTML = str.slice(0, i++) + "_";
          timer = setTimeout(typing, 300);
        } else {
          divTyping.innerHTML = str; //结束打字,移除 _ 光标
          clearTimeout(timer);
        }
      }
      typing();
    }, 2000);
  },
  components: {
    myfooter,
  },
};
</script>
<style lang="scss" scoped>
#mine {
  width: 100%;
  height: 100vh;
  background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg-8.png)
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
  .introduce {
    transition: all 0.8s ease;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 950px;
    height: 300px;
    .words {
      width: 50%;
      height: 100%;
      font-size: 25px;
      line-height: 35px;
      color: white;
      padding: 20px 0;
      #text {
        display: inline-block;
        color: rgb(200, 155, 241);
        border-bottom: 2px solid rgb(200, 155, 241);
        animation: girl 2s infinite;
      }
      @keyframes girl {
        0% {
          transform: translateY(2px);
        }
        50% {
          transform: translateY(-2px);
        }
        100% {
          transform: translateY(2px);
        }
      }
    }
    img {
      width: 250px;
      height: 250px;
      border-radius: 100%;
    }
    .name {
      font-family: mFont;
      font-size: 80px;
    }
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
    color: rgb(236, 162, 214);
    align-self: flex-end;
  }
}
</style>>
