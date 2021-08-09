<template>
 <div class="top">
     <div class="title"><slot name="title"></slot></div>
 </div>
</template>

<script>
export default {

}

</script>
<style lang="scss" scoped>
.top{
    width: 100vw;
    height: 45vh;
    background: url(https://img-1306599808.cos.ap-nanjing.myqcloud.com/bg4.png) fixed no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
        color: white;
      font-size: 30px;
    }
}
</style>>
