<template>
  <div id="sample">
    <mytitle style="width:100%"><span slot="icon">&#xe637; </span> <span slot="title">推荐</span></mytitle>
    <div class="content">
      <div v-for="(item, index) in samples" :key="index" class="article"  @click="toArticle(index)">
        <img v-lazy="item.img" alt="assets/img/lazy/error.jpeg" />
        <div class="overWord">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mytitle from "@/components/title.vue";
export default {
   methods: {
    toArticle(index) {
       this.samples[index].content = this.samples[index].content.replaceAll(
        "&amp;nbsp;",
        ""
      );
      this.samples[index].content = this.samples[index].content.replaceAll(
        "&amp;lt;",
        "<."
      );
      this.samples[index].content = this.samples[index].content.replaceAll(
        "&amp;gt;",
        ">"
      );
      this.$store.commit("showArticles", this.samples[index]);
      this.$router.push("article");
    },
  },
   props: {
    samples: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
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
  width: 55%;
  min-width: 845px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 25vh;
  min-height: 220px;
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