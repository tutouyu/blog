<template>
  <div id="sample">
    <mytitle><span slot="icon">&#xe637; </span> <span slot="title">推荐</span></mytitle>
    <div class="content">
      <div v-for="(item, index) in sample" :key="index" class="article">
        <img :src="sample[index].image" alt="" />
        <div class="overWord">
          <span>{{ sample[index].title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mytitle from "@/components/title.vue";
export default {
  data() {
    return {
      sample: [
        {
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
          title: "第一篇",
        },
        {
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
          title: "第二篇",
        },
        {
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg6.png",
          title: "第三篇",
        },
      ],
    };
  },
  components: {
    mytitle,
  },
};
</script>
<style lang="scss" scoped>
#sample {
  margin-top: 10px;
  width: 845px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 220px;
  .content {
    padding-top: 10px;
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: space-around;
    .article {
      width: 32%;
      height: 100%;
      text-align: center;
      overflow: hidden;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        overflow: hidden;
      }
      &:hover {
        img {
          transform: scale(1.2, 1.2);
        }
        .overWord {
          opacity: 1;
        }
      }
      .overWord {
        opacity: 0;
        transition: all 0.3s ease;
        position: relative;
        top: -102%;
        background-color: rgba(151, 151, 151, 0.3);
        width: 100%;
        height: 100%;
        color: black;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>>