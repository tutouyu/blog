<template>
  <div id="myarticle">
    <mytitle
      ><span slot="icon">&#xe64f; </span>
      <span slot="title">文章</span></mytitle
    >
    <div
      v-for="(item, index) in myBlog"
      :key="index"
      :class="{ articleItem1: index % 2 == 0, articleItem2: index % 2 == 1 }"
    >
      <div class="img"><img :src="myBlog[index].image" alt="" /></div>
      <div class="resume">
        <div class="info time">
          <span class="icon iconfont iconexit">&#xe667; </span> &nbsp;{{
            item.time
          }}
        </div>
        <div class="info title">{{ item.title }}</div>
        <div class="info type">
          <span class="icon iconfont iconexit">&#xe659; </span>{{
            item.type
          }}
          &nbsp; ·&nbsp;<span class="icon iconfont iconexit">&#xe65a; </span>
          {{ item.tag }}
        </div>
        <div class="info des">
          <span class="icon iconfont iconexit">&#xe662; </span> &nbsp;{{
            item.description
          }}
        </div>
        <div class="info">···</div>
      </div>
    </div>
       <el-row class="button">
        <el-button round>加载更多</el-button>
      </el-row>
  </div>
</template>

<script>
import mytitle from "@/components/title.vue";
export default {
  data() {
    return {
      myBlog: [
        {
          time: "2010-02-03 15:03",
          title: "js天下第一! js天下第一",
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
          type: "js",
          tag: "技术",
          description: "js为什么天下第一呢 因为我说的",
        },
        {
          time: "2010-02-03 15:03",
          title: "js天下第一! js天下第一",
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
          type: "js",
          tag: "技术",
          description: "js为什么天下第一呢 因为我说的",
        },
        {
          time: "2010-02-03 15:03",
          title: "js天下第一! js天下第一",
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
          type: "js",
          tag: "技术",
          description: "js为什么天下第一呢 因为我说的",
        },
        {
          time: "2010-02-03 15:03",
          title: "js天下第一! js天下第一",
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
          type: "js",
          tag: "技术",
          description: "js为什么天下第一呢 因为我说的",
        },
        {
          time: "2010-02-03 15:03",
          title: "js天下第一! js天下第一",
          image: "https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg5.png",
          type: "js",
          tag: "技术",
          description: "js为什么天下第一呢 因为我说的",
        },
      ],
    };
  },
  components: {
    mytitle,
  },
};
</script>
<style lang="scss" scoped>
#myarticle {
  width: 55%;
  margin-top: 30px;
  .articleItem1 {
    box-shadow: 0px 0px 15px #888888;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    width: calc(100% - 20px);
    height: 40vh;
    margin: 35px 10px;
    
    .img {
      overflow: hidden;
      width: 55%;
      height: 40vh;
      border-radius: 15px 0 0 15px;
      img {
        width: 100%;
        height: 40vh;
        transition: all 0.3s ease;
      }
    }
    &:hover {
      box-shadow: 0px 0px 15px #000000;
      img {
        transform: scale(1.2, 1.2);
      }
    }
    .resume {
      width: 45%;
      .info {
        padding: 15px 32px;
        width: 100%;
        text-align: right;
      }
      .info:nth-child(5){
        margin-top:20px;
        font-size: 40px;
        font-weight: bold;
      }
      .time {
        color: rgb(138, 135, 135);
        font-size: 10px;
        span {
          font-size: 15px;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .type {
        span {
          font-size: 15px;
        }
      }
      .des {
        font-size: 20px;
      }
    }
  }
  .articleItem2 {
    @extend .articleItem1;
    display: flex;
    flex-direction: row-reverse;
    .img {
      border-radius: 0 15px 15px 0;
    }
    .resume {
      .info {
        text-align: left;
      }
    }
  }
  .button{
    display: flex;
    justify-content: center;
  }
}
</style>>