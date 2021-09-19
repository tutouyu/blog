<template>
  <div id="message">
    <transition-group
      appear
      name="flip-list"
      appear-class="flip-list"
      appear-to-class="flip-list-to"
      appear-active-class="flip-listr-active"
      tag="div"
    >
      <div class="title" key="title">
        <span>留言板&nbsp;|&nbsp;Message</span><br /><span>留你所想❤</span
        ><br /><span>It's your saying time</span>
      </div>
      <div class="content" key="content">
        <board @comment="comment"></board>
        <comment :comments="comments" @pushCom="pushCom"></comment>
      </div>
    </transition-group>
    <myfooter></myfooter>
  </div>
</template>

<script>
import comment from "./messageChildren/comment.vue";
import board from "./messageChildren/board.vue";
import myfooter from "@/components/myfooter.vue";
import { getComment, setComment } from "@/network/comment.js";
export default {
  methods: {
    pushCom(newCom) {
      console.log(newCom);
      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].id == newCom.parent) {
          this.comments[i].children.push(JSON.parse(JSON.stringify(newCom)));
        }
      }
    },
    comment(content) {
      var myDate = new Date();
      myDate.toLocaleDateString();
      setComment(
        content.name,
        content.mail,
        content.content,
        myDate.toLocaleDateString(),
        null
      ).then((res) => {
        let newCom = {
          name: content.name,
          mail: content.mail,
          content: content.content,
          time: myDate.toLocaleDateString(),
          parent: null,
          id: ++this.length,
          system: res.terminal,
          browser: res.browser,
        };
        this.comments.unshift(newCom);
        this.$store.commit("comment");
      });
    },
  },
  created() {
    getComment().then((res) => {
      let flag = [];
      let j = 0;
      for (let i = 0; i < res.length; i++) {
        res[i].time = res[i].time.slice(0, 10);
        this.comments.push(res[i]);
        this.comments[i].children = [];
      }
      this.$store.commit("initLength", res.length);

      function find(children, parent, comments) {
        for (let u = 0; u < children.length; u++) {
          if (children[u].id == parent) {
            children[u].children.push(JSON.parse(JSON.stringify(comments)));
          } else {
            find(children[u].children, parent, comments);
          }
        }
      }

      for (let i = 0; i < this.comments.length; i++) {
        if (this.comments[i].parent) {
          find(this.comments, this.comments[i].parent, this.comments[i]);
          this.comments.splice(i,1);
          i--;
        }
      }
      this.comments.reverse();
    });
  },
  data() {
    return {
      comments: [],
    };
  },
  components: {
    myfooter,
    board,
    comment,
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
#message {
  width: 100%;
  background: url(https://blog-1306599808.file.myqcloud.com/other/bg15.webp)
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