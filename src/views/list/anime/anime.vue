<template>
  <div id="anime">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">
        <span>番剧&nbsp;|&nbsp;Anime</span><br /><span>爱我所爱❤</span
        ><br /><span>It's my past times</span>
      </div>
      <div class="content" key="content">
        <paginatedList :animes="animes" type="anime"></paginatedList>
      </div>
    </transition-group>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
import paginatedList from "@/components/paginatedList.vue";
import { getAnime } from "@/network/list.js";
export default {
  data() {
    return {
      animes: [],
    };
  },
  components: {
    myfooter,
    paginatedList,
  },
  created() {
    getAnime().then((res) => {
      for (let i = 0; i < res.length; i++) {
        this.animes.push(res[i]);
      }
    });
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
#anime {
  width: 100%;
  background: url(https://blog-1306599808.file.myqcloud.com/other/bg10.webp)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
  .flip-list,
  .flip-list-active {
    opacity: 0;
    transform: translateY(30px);
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