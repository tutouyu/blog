<template>
  <div id="comment">
    <div class="title">{{ comments.length }} 条评论</div>
    <transition-group name="flip-list" tag="ul">
      <div v-for="(item, index) in showComments" :key="index" class="item">
        {{ item.name }}{{ item.system }}{{ item.browser }}
        <div>{{ item.time }}</div>
        <div>{{ item.content }}</div>
        <commentChild :children="item.children"></commentChild>
      </div>
    </transition-group>
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="4"
      :pager-count="5"
      layout="prev, pager, next"
      :total="comments.length"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import commentChild from "./commentChild.vue";
export default {
  data() {
    return {
      currentPage: 1,
      showComments: [],
    };
  },
  created() {
    for (let i = 0; i < 4; i++) {
      this.showComments.push(this.comments[i]);
    }
  },
  methods: {
    handleCurrentChange(current) {
      this.showComments.splice(0, 4);
      this.currentPage = current;
      for (let i = (this.currentPage - 1) * 4; i < this.currentPage * 4; i++) {
        if (this.comments[i]) this.showComments.push(this.comments[i]);
      }
    },
  },
  components: { commentChild },
  props: {
    comments: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.el-textarea__inner,                                    /**element-ui组件必须在style里修改 scss修改无效 */
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
#comment {
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item {
    transition: all 1s;
    border-radius: 10px;
    width: 600px;
    padding: 15px;
    margin: 5px 0;
    background-color: rgba(170, 170, 170, 0.7);
  }
  .title {
    @extend .item;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>