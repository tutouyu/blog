<template>
  <div id="admin">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="1"
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
            <span slot="title">分类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">直播</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="editor">
          <editor></editor>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import editor from "./Child/editor.vue";
export default {
  components: {
    editor,
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.commit("isOther");
    });
  },
  methods: {
    select(index) {
      if (index == 1) {
        this.$router.push("admin");
      } else if (index == 2) {
        this.$router.push("edite");
      } else if (index == 3) {
        this.$router.push("type");
      } else if (index == 4) {
        this.$router.push("view");
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
  .editor {
    margin-left: 180px;
    width: 90vw;
    margin-top: 60px;
    height: calc(100vh - 60px);
  }
  .content {
    height: 50vh;
    background-color: black;
  }
}
</style>