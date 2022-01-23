<template>
  <div id="admin">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="6"
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
          <el-menu-item index="6">
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
        >
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
        <div class="list">
          <el-button
            type="warning"
            round
            class="button"
            @click="dialogVisible = true"
            style="margin-left: 500px"
            >添加</el-button
          >
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-input
        placeholder="请输入分类"
        v-model="newType"
        style="margin: 20px 0"
      >
      </el-input>
      <el-input placeholder="请输入标签" v-model="newTag"> </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addType">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="false"
      class="edit-form"
      :before-close="handleClose"
    >
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="分类" prop="type">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
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
import { getType, delType, addType, editType } from "@/network/type.js";
import editor from "./Child/editor.vue";
export default {
  data() {
    return {
      newType: "",
      newTag: "",
      textarea1: "",
      textarea2: "",
      search: "",
      dialogVisible: false,
      editFormVisible: false,
      activeIndex: "1",
      tableData: [],
      editIndex: "",
      editForm: {
        type: "",
        tag: "",
        id: 0,
      },
    };
  },
  components: {
    editor,
  },
  created() {
    getType().then((res) => {
      for (let i = 0; i < res.length; i++) {
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
    addType() {
      addType(this.newType, this.newTag, 0).then((res) => {
        this.tableData.push({
          type: this.newType,
          tag: this.newTag,
          id: this.tableData.length,
        });
      });
      this.dialogVisible = false;
    },
    select(index) {
      if (index == 1) {
        this.$router.push("admin");
      } else if (index == 2) {
        this.$router.push("edite");
      } else if (index == 6) {
        this.$router.push("type");
      } else if (index == 4) {
        this.$router.push("view");
      }
    },
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editIndex = index;
      this.editForm = Object.assign({}, row); //这句是关键！！！
    },
    handleClose(done) {
      this.editFormVisible = false;
    },
    handleCancel(formName) {
      this.editFormVisible = false;
    },
    handleUpdate(forName) {
      editType(this.editForm.type, this.editForm.tag, this.editForm.id).then(
        (res) => {}
      );
      this.editFormVisible = false;
    },
    handleDelete(index, row) {
      delType(
        this.tableData[index].type,
        this.tableData[index].tag,
        this.tableData[index].id
      ).then((res) => {});
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
    margin-top: 10px;
  }
  .content {
    height: 50vh;
    background-color: black;
  }
}
</style>