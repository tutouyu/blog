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
            <span slot="title">分类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">直播</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <el-table
          :data="
            tableData.filter(
              (data) =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          class="list"
          height="920"
        >
          <el-table-column label="标题" prop="title" width="200">
          </el-table-column>
          <el-table-column label="描述" prop="des" width="200">
          </el-table-column>
          <el-table-column label="分类" prop="type" width="200">
          </el-table-column>
          <el-table-column label="标签" prop="tag" width="200">
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="false"
      class="edit-form"
      :before-close="handleClose"
    >
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="editForm.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="des">
          <el-input v-model="editForm.des" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="type">
          <el-input v-model="editForm.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-input v-model="editForm.tag" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="editForm.content" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel('editForm')">取消</el-button>
        <el-button type="primary" @click.native="handleUpdate('editForm')"
          >更新</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTimeLine, delArticles, editArticles } from "@/network/articles.js";
import editor from "./Child/editor.vue";
export default {
  data() {
    return {
      search: "",
      editFormVisible: false,
      articles: [],
      activeIndex: "1",
      tableData: [],
      editIndex: "",
      editForm: {
        title: "",
        type: "",
        tag: "",
        content: "",
        des: "",
      },
      editindex: 0,
    };
  },
  components: {
    editor,
  },
  created() {
    getTimeLine().then((res) => {
      for (let i = 0; i < res.length; i++) {
        res[i].time = res[i].time.slice(0, 10);
        this.tableData.push(res[i]);
      }
    });
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
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editIndex = index;
      this.editForm = Object.assign({}, row); //这句是关键！！！
      this.editindex = index;
    },
    handleClose(done) {
      /*done();
                location.reload();*/
      this.editFormVisible = false;
    },
    handleCancel(formName) {
      this.editFormVisible = false;
    },
    handleUpdate(forName) {
      this.editFormVisible = false;
      let title = this.editForm.title;
      let content = this.editForm.content;
      let type = this.editForm.type;
      let tag = this.editForm.tag;
      let des = this.editForm.des;
      let id = this.tableData[this.editIndex].id;
      editArticles(title, content, type, tag, des, id).then((res) => {});
    },
    handleDelete(index, row) {
      console.log(this.tableData[index]);
      let id = this.tableData[index].id;
      delArticles(id).then((res) => {});
      this.tableData.splice(index, 1);
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
  .list {
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