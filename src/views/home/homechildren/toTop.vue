<template>
  <div id="toTop">
    <div class="container">
      <div class="top">
        <img
          src="https://img-1306599808.cos.ap-nanjing.myqcloud.com/anime/top.png"
          alt=""
          class="img1"
        />
        <div class="body">
          <img
            src="https://img-1306599808.cos.ap-nanjing.myqcloud.com/anime/body.png"
            alt=""
            class="img2"
          />
          <div class="foot">
            <img
              src="https://img-1306599808.cos.ap-nanjing.myqcloud.com/anime/foot.png"
              alt=""
              class="img3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#toTop {
  margin-top: 150px;
  position: absolute;
  z-index: 99999;
  .container {
    position: relative;
    .top {
      position: relative;
      top: -41px;
      left: 32px;
      z-index: 100;
      animation: swing4-1 5s ease-in-out infinite;
      transform: rotate(-2deg);
      transform-origin: top center;
      @keyframes swing4-1 {
        0% {
          transform: rotate(-3deg);
        }
        50% {
          transform: rotate(3deg);
        }
        100% {
          transform: rotate(-3deg);
        }
      }
      .img1 {
        width: 25px;
        height: 55px;
      }
      .body {
        position: absolute;
        z-index: -1;
        left: -33px;
        top: 40px;
        animation: swing4-2 8s ease-in-out infinite;
        transform: rotate3d(0, 1, 0, 20deg);
        transform-origin: top center;
        @keyframes swing4-2 {
          0% {
            transform: rotate3d(0, 1, 0, 20deg);
          }
          50% {
            transform: rotate3d(0, 1, 0, -20deg);
          }
          100% {
            transform: rotate3d(0, 1, 0, 20deg);
          }
        }
        .img2 {
          width: 90px;
          height: 110px;
        }
        .foot {
          position: absolute;
          z-index: 100;
          left: 35px;
          bottom: -30px;
          animation: swing4-3 8s ease-in-out infinite;
          transform: rotate(3deg);
          transform-origin: top center;
          @keyframes swing4-3 {
            0% {
              transform: rotate(3deg);
            }
            50% {
              transform: rotate(-3deg);
            }
            100% {
              transform: rotate(3deg);
            }
          }
          .img3 {
            width: 20px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>