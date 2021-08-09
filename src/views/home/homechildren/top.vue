<template>
  <div>
    <figure class="bg" ref="bg">
      <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="personal" key="personal">
        <img
          src="https://img-1306599808.cos.ap-nanjing.myqcloud.com/%E5%A4%B4%E5%83%8F.jpg"
          class="header"
          ref="head"
        />
        <div class="saying">
          <img
            @click="turnLeft"
            src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/next-b.svg"
            class="left"
          />
          <div>听好了傻逼们，老子叫秃头鱼</div>
          <br />
          <div>这老子的个人网站 啊呸</div>
          <img
            @click="turnRight"
            src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/next-b.svg"
            class="right"
          />
        </div>
      </div>
      </transition-group>
        <svg
          @click="toBlog"
          t="1627573300267"
          class="icon arrow"
          viewBox="0 0 1796 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6797"
          width="42"
          height="28"
        >
          <path
            d="M898.114556 1023.950105a125.486283 125.486283 0 0 1-88.913143-36.822615L36.874506 214.750688A125.785654 125.785654 0 0 1 214.750688 36.874506l683.563449 683.563449 683.563449-683.563449a125.785654 125.785654 0 0 1 177.876182 177.876182L987.077595 987.22728A125.436388 125.436388 0 0 1 898.114556 1023.950105z"
            p-id="6798"
            fill="#ffffff"
          ></path>
        </svg>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: [
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg1.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg2.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg3.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg4.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
        "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg7.png",
      ],
      imgIndex: 0,
    };
  },
  methods: {
    toBlog() {
      window.scroll({
        top: 753.6,
        behavior: "smooth",
      });
    },
    turnLeft() {
      if (this.imgIndex == 0) {
        this.imgIndex = 6;
        this.$refs.bg.style.background =
          "url(" +
          this.imgUrl[this.imgIndex] +
          ")" +
          " no-repeat fixed center / cover";
      } else {
        this.imgIndex--;
        this.$refs.bg.style.background =
          "url(" +
          this.imgUrl[this.imgIndex] +
          ")" +
          " no-repeat fixed center / cover";
      }
    },
    turnRight() {
      if (this.imgIndex == 6) {
        this.imgIndex = 0;
        this.$refs.bg.style.background =
          "url(" +
          this.imgUrl[this.imgIndex] +
          ")" +
          " no-repeat fixed center / cover";
      } else {
        this.imgIndex++;
        this.$refs.bg.style.background =
          "url(" +
          this.imgUrl[this.imgIndex] +
          ")" +
          " no-repeat fixed center / cover";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background: url("https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  text-align: center;
    .flip-list,
  .flip-list-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .flip-list-active {
    position: absolute;
  }
  .arrow {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%);
    animation: arrow 3s infinite;
  }
  @keyframes arrow {
    0% {
      top: 670px;
    }
    50% {
      top: 690px;
    }
    100% {
      top: 670px;
    }
  }
  .personal {
    transition: all 0.6s ease;
    .header {
      margin-bottom: 30px;
      width: 130px;
      height: 130px;
      border-radius: 65px;
      box-shadow: 0px 0px 15px #111111;
      transition: all 2s linear;
      &:hover {
        transform: rotate(360deg);
      }
    }
    .saying {
      display: flex;
      position: relative;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-around;
      color: whitesmoke;
      font-weight: bold;
      width: 350px;
      height: 80px;
      background-color: rgba(37, 37, 36, 0.5);
      border-radius: 10px;
      .left {
        z-index: 50;
        position: absolute;
        top: 20px;
        left: 300px;
        width: 35px;
        height: 35px;
      }
      .right {
        z-index: 50;
        position: absolute;
        top: 22px;
        right: 300px;
        transform: rotate(180deg);
        position: absolute;
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>