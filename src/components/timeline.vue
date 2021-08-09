<template>
  <div id="timeline">
    <div class="timeline" v-if="isArticle">
      <div class="top">文章总览-125</div>
      <transition-group name="flip-list" tag="ul">
        <div class="item" v-for="(item, index) in showArticles" :key="index">
          <div class="img"><img :src="article[index].img" alt="" /></div>
          <div class="info">
            <div class="infoitem">
              <span class="icon iconfont iconexit">&#xe666;</span>&nbsp;{{
                article[index].time
              }}
            </div>
            <div class="infoitem">{{ article[index].title }}</div>
            <div class="infoitem">{{ article[index].content }}</div>
          </div>
        </div>
      </transition-group>
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="4"
        :pager-count="5"
        layout="prev, pager, next"
        :total="article.length"
        class="page"
      >
      </el-pagination>
    </div>
    <div v-else class="none">抱歉！目前没有文章</div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.article.length == 0) {
      this.isArticle = false;
      alert("没文章");
    }
  },
  created() {
    for (let i = 0; i < 4; i++) {
      this.showArticles.push(this.article[i]);
    }
  },
  methods: {
    handleCurrentChange(current) {
      this.showArticles.splice(0, 4);
      this.currentPage = current;
      for (let i = (this.currentPage - 1) * 4; i < this.currentPage * 4; i++) {
        if (this.article[i]) this.showArticles.push(this.article[i]);
      }
    },
  },
  data() {
    return {
      isArticle: true,
      currentPage: 1,
      showArticles: [],
    };
  },
  props: {
    article: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.el-textarea__inner,
.el-input__inner {
  background-color: rgba(170, 170, 170, 0.9);
  border: 0;
}
.el-pagination button:disabled,
.el-pagination .btn-next,
.el-pagination .btn-prev,
.el-dialog,
.el-pager li {
  color: white;
  background-color: rgba(196, 195, 195, 0);
}
</style>
<style lang="scss" scoped>
.flip-list-enter,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.flip-list-leave-active {
  position: absolute;
}
#timeline {
  width: 75%;
  display: flex;
  justify-content: center;
  background-color: rgba(235, 228, 228, 0.8);
  border-radius: 15px;
  margin: 15px;
  height: auto;
  padding-bottom: 25px;
  position: relative;
}
.page {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.none {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.timeline {
  .item {
    transition: all 1s;
    height: 150px;
    margin-left: 30px;
    width: calc(100% - 30px);
    position: relative;
    margin-bottom: 15px;
    display: flex;
    padding: 15px;
    .img {
      overflow: hidden;
      width: 400px;
      height: 120px;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
      }
    }
    &:hover {
      box-shadow: 10px 0px 15px #000000;
      img {
        transform: scale(1.2, 1.2);
      }
    }
    .info {
      .infoitem {
        margin: 12px;
      }
      .infoitem:nth-child(1) {
        color: rgb(110, 110, 110);
      }
      .infoitem:nth-child(2) {
        font-size: 20px;
        font-weight: bold;
      }
      .infoitem:nth-child(3) {
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 3px solid white;
      background-color: #9e5add;
      position: absolute;
      left: -15px;
      top: 65px;
      z-index: 100;
    }
    &::after {
      content: "";
      width: 3px;
      height: calc(100% + 15px);
      background-color: #9e5add;
      position: absolute;
      top: 15;
      left: -7px;
    }
  }
  .top {
    @extend .item;
    font-size: 20px;
    height: 50px;
    &::before {
      top: 15px;
      border: 5px solid #9e5add;
      background-color: white;
    }
    &:hover {
      box-shadow: 0 0 0 0;
    }
  }
}
</style>>