<template>
  <div id="admin">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo nav"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="select"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">写博客</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">编辑博客</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">番剧</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">音乐</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">游戏</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">分类</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="anime">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入歌名"
          v-model="textarea1"
          class="input"
        >
        </el-input>
        <el-input
          type="textarea"
          autosize
          placeholder="请输入作者"
          v-model="textarea2"
          class="input"
        >
        </el-input>
        <el-button type="warning" round class="button" @click="add">添加</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { setMusic } from "@/network/list.js";
export default {
  data() {
    return {
      textarea1: "",
      textarea2: "",
      img: "",
      url: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
  methods: {
    add() {
      setMusic(this.textarea1, this.textarea2, this.url, this.img).then(
        (res) => {}
      );
    },
    select(index) {
      if (index == 1) {
        this.$router.push("admin");
      } else if (index == 2) {
        this.$router.push("edite");
      } else if (index == 3) {
        this.$router.push("addAnime");
      } else if (index == 4) {
        this.$router.push("addMusic");
      } else if (index == 5) {
        this.$router.push("addGame");
      } else if (index == 6) {
        this.$router.push("type");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#admin {
  .nav {
    position: fixed;
    left: 0;
    width: 180px;
    margin-top: 60px;
    height: calc(100vh - 60px);
  }
  .anime {
    margin-left: 180px;
    width: 90vw;
    margin-top: 60px;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    .button {
      margin: 20px 0;
    }
  }
  .content {
    height: 50vh;
    background-color: black;
  }
}
</style>