<template>
  <div id="comment">
    <div class="title">{{ this.$store.state.length }} 条评论</div>
    <transition-group name="flip-list" tag="ul">
      <div v-for="(item, index) in showComments" :key="index" class="item">
        <span>{{ item.name }}</span
        ><span>{{ item.system }}</span
        ><span>{{ item.browser }}</span
        ><span>{{ item.time }}</span>
        <div>
          {{ item.content }}
          <span class="replay" @click="replay(index)">回复</span>
        </div>
        <board
          class="board"
          v-if="isReplay[index]"
          @comment="comment($event, index)"
        ></board>
        <commentChild
          :children="item.children"
          :parent="item.name"
          @pushCom="pushCom"
        ></commentChild>
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
import board from "./board.vue";
import commentChild from "./commentChild.vue";
import { setComment } from "@/network/comment.js";
export default {
  watch: {
    comments: {
      handler() {
        // 监听获取ajax数据
        this.showComments = [];
        for (let i = 0; i < 4; i++) {
          if (this.comments[i]) {
            this.isReplay[i] = false;
            this.showComments.push(this.comments[i]);
          }
        }
      },
      // 监听到数据变化时立即调用
      immediate: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      showComments: [],
      isReplay: [],
    };
  },
  methods: {
    pushCom(newCom) {
      console.log(newCom);
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].id == newCom.parent) {
          this.comments[i].children.push(JSON.parse(JSON.stringify(newCom)));
        }
      }
    },
    comment(content, index) {
      var myDate = new Date();
      myDate.toLocaleDateString();
      setComment(
        content.name,
        content.mail,
        content.content,
        myDate.toLocaleDateString(),
        this.comments[(this.currentPage - 1) * 4 + index].id
      ).then((res) => {
        let newCom = {
          name: content.name,
          mail: content.mail,
          content: content.content,
          time: myDate.toLocaleDateString(),
          parent: this.comments[(this.currentPage - 1) * 4 + index].id,
          id: this.$store.state.length + 1,
          system: res.terminal,
          browser: res.browser,
        };
        this.$store.commit("comment");
        this.$emit("pushCom", newCom);
      });
      this.$set(this.isReplay, index, !this.isReplay[index]);
    },
    replay(index) {
      console.log(this.isReplay);
      this.$set(this.isReplay, index, !this.isReplay[index]);
    },
    handleCurrentChange(current) {
      this.showComments.splice(0, 4);
      this.currentPage = current;
      for (let i = (this.currentPage - 1) * 4; i < this.currentPage * 4; i++) {
        if (this.comments[i]) this.showComments.push(this.comments[i]);
      }
    },
  },
  components: { commentChild, board },
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
  background-color: rgba(255, 255, 255, 0.9);
  border: 0;
}
.el-pagination button:disabled,
.el-pagination .btn-next,
.el-pagination .btn-prev,
.el-dialog,
.el-pager li {
  color: white;
  background-color: rgba(139, 137, 137, 0);
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
    background-color: rgba(206, 206, 206, 0.9);
    span {
      padding: 10px;
      font-size: 10px;
      color: rgb(71, 71, 71);
      &:nth-child(1) {
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: bold;
      }
      &:nth-child(4) {
        font-size: 15px;
        float: right;
        padding-right: 10px;
      }
    }
    div {
      padding: 10px;
    }
    .replay {
      font-size: 15px !important;
      float: right;
      margin-right: -70px;
      &:hover {
        color: rgb(200, 155, 241);
      }
    }
    .board {
      width: 100%;
    }
  }
  .title {
    @extend .item;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>