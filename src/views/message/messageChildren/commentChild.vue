<template>
  <div id="commentChild">
    <div v-if="children.length != 0">
      <div v-for="(item, index) in children" :key="index" class="item">
        <p class="parent">回复_{{ parent }}</p>
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
          @pushCom="pushCom"
          :parent="item.name"
        ></commentChild>
        <!-- 递归调用组件本身 -->
      </div>
    </div>
  </div>
</template>

<script>
import board from "./board.vue";
import { setComment } from "@/network/comment.js";
export default {
  name: "commentChild",
  data() {
    return {
      isReplay: [],
    };
  },
  methods: {
    pushCom(newCom) {
      console.log(newCom);
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].id == newCom.parent) {
          this.children[i].children.push(JSON.parse(JSON.stringify(newCom)));
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
        this.children[index].id
      ).then((res) => {
        let newCom = {
          name: content.name,
          mail: content.mail,
          content: content.content,
          time: myDate.toLocaleDateString(),
           parent: this.children[(this.currentPage - 1) * 4 + index].id,
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
      this.$set(this.isReplay, index, !this.isReplay[index]);
    },
  },
  components: {
    board,
  },
  created() {
    for (let i = 0; i < this.children.length; i++) {
      this.isReplay[i] = false;
    }
  },
  props: {
    parent: {
      type: String,
      default() {
        return "";
      },
    },
    children: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
#commentChild {
  margin-top: 5px 0;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  .item {
    border-radius: 15px;
    width: 600px;
    padding: 15px;
    margin-left: 20px;
    background-color: rgba(170, 170, 170, 0.7);
     box-shadow: 0px 0px 5px #2e2d2d;
    .parent {
      padding: 5px;
    }
    span {
      padding: 10px;
      font-size: 10px;
      color: rgb(71, 71, 71);
      &:nth-child(2) {
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: bold;
      }
      &:nth-child(5) {
        font-size: 15px;
        float: right;
        margin-right: 15px;
      }
    }
    div {
      padding: 10px 10px 0 10px;
      .replay {
        line-height: 5px;
        font-weight: bold;
        font-size: 15px !important;
        float: right;
        margin-right: -70px;
        &:hover {
          color: rgb(200, 155, 241);
        }
      }
    }
  }
}
</style>