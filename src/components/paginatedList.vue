<template>
  <div>
    <div class="content"  >
      <div
        v-for="(item, index) in showAnimes"
        :key="index"
        class="item"
        @click="show(index)"
      >
        <transition name="fade" mode="out-in">
          <div v-if="isIntro[index] == 1" key="first">
            <img :src="item.img" alt="" />
            <div>{{ item.name }}</div>
            <div>{{ item.jpname }}</div>
          </div>
          <div v-if="isIntro[index] == 2"></div>
          <div class="introduce" v-if="isIntro[index] == 3" key="second">
            <h3>{{ item.name }}</h3>
            {{ item.des }}
          </div>
        </transition>
      </div>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="6"
      :pager-count="5"
      layout="prev, pager, next"
      :total="animes.length"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    type:{
    type:String,
     default() {
        return '';
      },
    },
    animes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isIntro: [true, true, true, true, true, true],
      showAnimes: [],
      currentPage: 1,
    };
  },
  methods: {
    show(index) {
      if (this.isIntro[index] == 1) {
        this.$set(this.isIntro, index, 3);
      } else {
        this.$set(this.isIntro, index, 1);
      }
    },
    handleCurrentChange(current) {
      this.currentPage = current;
      this.showAnimes = [];
      for (let i = 0; i < 6; i++) {
        this.$set(this.isIntro, i, 2);
      }

      for (let i = (current - 1) * 6; i < current * 6; i++) {
        if (this.animes[i]) {
          this.showAnimes.push(this.animes[i]);
        }
      }
      this.$nextTick(function () {
        for (let i = 0; i < 6; i++) {
          this.$set(this.isIntro, i, 1);
        }
      });
    },
  },
  watch: {
    animes: {
      handler() {
        // 监听获取ajax数据
        console.log(this.article);
        this.showAnimes = [];
        for (let i = 0; i < 6; i++) {
          if (this.animes[i]) {
            this.showAnimes.push(this.animes[i]);
          }
        }
      },
      // 监听到数据变化时立即调用
      immediate: true,
    },
  },
};
</script>
<style>
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
.content {
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  .item {
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: rgba(170, 170, 170, 0.3);
    padding: 10px;
    width: 30%;
    height: 280px;
    .introduce {
      h3 {
        line-height: 30px;
        text-align: center;
      }
      line-height: 26px;
      padding:0 10px;
      text-align: left;
      height: 260px; //减去padding
      font-size: 15px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.4);
      color: black;
      overflow: hidden;
        -webkit-line-clamp: 10;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    img {
      border-radius: 10px;
      width: 100%;
      height: 200px;
    }
    div {
      text-align: center;
      color: white;
      font-size: 17px;
      line-height: 30px;
    }
  }
}
.page {
  display: flex;
  justify-content: center;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-280px);
}
</style>