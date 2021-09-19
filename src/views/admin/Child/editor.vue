<template>
  <div id="editor">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @blur="onEditorBlur($event)"
      @change="onEditorChange($event)"
      class="editor"
    ></quill-editor>

    <form
      action
      method="post"
      enctype="multipart/form-data"
      id="uploadFormMulti"
    >
      <input
        style="display: none"
        :id="uniqueId"
        type="file"
        name="file"
        multiple
        accept="image/jpg, image/jpeg, image/png, image/gif"
        @change="uploadImg('uploadFormMulti')"
      />
    </form>
    <el-row>
      <el-button type="warning" round @click="drawer = true">提交</el-button>
    </el-row>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      class="drawer"
    >
      <div class="title">图片</div>
      <input
        type="file"
        id="ipa_file-selector"
        data-name="game"
        @change="ipa_selectFile"
      />
      <div class="title">标题</div>
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <div class="title">描述</div>
      <el-input v-model="des" placeholder="请输入描述"></el-input>
      <div class="title">分类</div>
      <div class="type">
        <span
          v-for="(item, index) in type"
          :key="index"
          class="typeItem"
          @click="chooseType(index)"
          >{{ item }}</span
        >
      </div>
      <div class="title">标签</div>
      <div class="tag">
        <span
          v-for="(item, index) in tag"
          :key="index"
          class="tagItem"
          @click="chooseTag(index)"
          >{{ item }}</span
        >
      </div>
      <el-row class="button">
        <el-button type="warning" round @click="add">提交</el-button>
      </el-row>
    </el-drawer>
    <div class="content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { getType } from "@/network/type.js";
import { quillEditor } from "vue-quill-editor";
import { addArticles } from "@/network/articles.js";
import COS from "cos-js-sdk-v5";
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
  [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
  [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ font: [] }], // 字体种类-----[{ font: [] }]
  [{ align: [] }], // 对齐方式-----[{ align: [] }]
  ["clean"], // 清除文本格式-----['clean']
  ["image", "video"], // 链接、图片、视频-----['link', 'image', 'video']
];

export default {
  name: "",
  components: {
    quillEditor,
  },
  data() {
    return {
      img:'',
      cos: null,
      des: "",
      tag: [],
      type: [],
      resTag: "",
      resType: "",
      title: "",
      drawer: false,
      uniqueId: "uniqueId",
      content: "", // 富文本编辑器默认内容
      editorOption: {
        //  富文本编辑器配置
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
        placeholder: "请输入正文",
      },
    };
  },
  computed: {
    //当前富文本实例
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  methods: {
    submit() {},
    add() {
      var myDate = new Date();
      addArticles(
        this.title,
        this.content,
        myDate.toLocaleDateString(),
        this.resType,
        this.resTag,
        this.des,
        0,
        0,
        this.img
      ).then((res) => {});
    },
    chooseType(index) {
      this.resTag = this.tag[index];
    },
    chooseTag() {
      this.resType = this.type[index];
    },
    // 准备富文本编辑器
    onEditorReady() {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur() {},
    // 富文本编辑器 获得焦点事件
    onEditorFocus() {},
    // 富文本编辑器 内容改变事件
    onEditorChange() {},
    uploadImg: async function () {
      var _this = this;
      //构造formData对象
      var formData = new FormData();
      formData.append("file", document.getElementById(_this.uniqueId).files[0]);

      try {
        //调用上传文件接口
        this.$http.productapi.uploadImgReq(formData).then((res) => {
          //返回上传文件的地址
          let url = res;
          if (url != null && url.length > 0) {
            let Range = _this.editor.getSelection();
            url = url.indexOf("http") != -1 ? url : "http:" + url;
            //上传文件成功之后在富文本中回显(显示)
            _this.editor.insertEmbed(
              Range != null ? Range.index : 0,
              "image",
              url
            );
          } else {
            _this.$message.warning("图片上传失败");
          }
          //成功之后,将文件的文本框的value置空
          document.getElementById(_this.uniqueId).value = "";
        });
      } catch ({ message: msg }) {
        document.getElementById(_this.uniqueId).value = "";
        _this.$message.warning(msg);
      }
    },
    ipa_selectFile(e) {
      console.log(e);
       var file = document.getElementById('ipa_file-selector').files[0]   
      this.cos.putObject(
        {
          Bucket: "img-1306599808" /* 必须 */,
          Region: "ap-nanjing" /* 存储桶所在地域，必须字段 */,
          Key: "example.png" /* 必须 */,
          StorageClass: "STANDARD",
          Body: file, // 上传文件对象
          onProgress: function (progressData) {
            console.log(JSON.stringify(progressData));
            this.img=JSON.stringify(progressData).location;
          },
        },
        function (err, data) {
          console.log(err || data);
        }
      );
    },
  },
  created() {
    getType().then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].tag) {
          this.tag.push(res[i].tag);
        }
        if (res[i].type) {
          this.type.push(res[i].type);
        }
      }
    });
  },
  mounted() {
    var _this = this;
    var imgHandler = async function (image) {
      if (image) {
        var fileInput = document.getElementById(_this.uniqueId); //隐藏的file文本ID
        fileInput.click(); //加一个触发事件
      }
    };
    _this.editor.getModule("toolbar").addHandler("image", imgHandler);
    //改下指向，不然下面methods(){}内的cos.xxx找不到
    _this.cos = new COS({
      SecretId: "AKIDOegV64rPggT1JK5aoqd9PObicFciaHm1",
      SecretKey: "0jBMGtFL1UgaDZeS5TaRkqfEWBdqmQnt",
    });
  },
};
</script>
<style lang="scss" scoped>
#editor {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 60vh;
  align-content: space-between;
  .editor {
    width: 100%;
  }
  .content {
    width: 100%;
    min-height: 30vh;
    border: 3px solid rgb(124, 124, 124);
  }
  .drawer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .button {
      display: flex;
      justify-content: center;
    }
    .title {
      padding: 15px;
      display: flex;
      justify-content: center;
    }
    margin-top: 60px;
    .type {
      padding: 10px;
      .typeItem {
        border-radius: 10px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        margin: 5px;
        background-color: rgb(164, 164, 238);
      }
    }
    .tag {
      padding: 10px;
      .tagItem {
        border-radius: 10px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        margin: 5px;
        background-color: rgb(164, 164, 238);
      }
    }
  }
}
</style>