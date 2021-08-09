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
        <paginatedList :animes="animes"></paginatedList>
      </div>
    </transition-group>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from "@/components/myfooter.vue";
import paginatedList from "@/components/paginatedList.vue";
export default {
  data() {
    return {
      animes: [
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
        {
          cnName: "中二病也要谈恋爱！",
          jpName: "中二病でも恋がしたい！",
          img: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg9.png",
          introduce:
            "男主角富樫勇太在国中时是一名邪眼系的中二病患者，但上了高中便从中二病毕业了。可是，原本打算忘掉过去黑历史的勇太，与他同班的女主角小鸟游六花，自称“邪王真眼的使用者”的现任中二病却强逼勇太与她立下契约！而另一方面，勇太在国中时唯一理解他的朋友七宫智音，自称“索非亚琳·SP·撒旦7世”的超中二者也再次出现在勇太的面前，于是勇太那中二病的黑历史正渐渐再次浮现。 [1]",
        },
      ],
    };
  },
  components: {
    myfooter,
    paginatedList,
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
};
</script>
<style lang="scss" scoped>
#anime {
  width: 100%;
  background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg10.png)
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