<template>
  <div id="game">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
      ><div class="title" key="title">
        <span>番剧&nbsp;|&nbsp;Anime</span><br /><span>玩我所玩❤</span
        ><br /><span>It's my greatest preasure</span>
      </div>
      <div class="content" key="content">
        <paginatedList :animes="animes" type="game"></paginatedList>
      </div>
    </transition-group>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
import paginatedList from "@/components/paginatedList.vue";
import { getGame } from "@/network/list.js";
export default {
  data() {
    return {
      animes: [],
    };
  },
  created(){
     getGame().then((res) => {
       console.log(res)
       for(let i=0;i<res.length;i++){
         if(res[i]){
         this.animes.push(res[i]);}
       }
     });
  },
  components: {
    myfooter,
    paginatedList,
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
#game {
  width: 100%;
  background: url(https://blog-1306599808.file.myqcloud.com/other/bg14.webp)
    fixed no-repeat center;
  background-size: cover;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
   .flip-list,
  .flip-list-active {
    position: absolute;  opacity: 0;
    transform: translateY(30px);
  }
  .content{
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