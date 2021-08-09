<template>
 <div>书籍</div>
</template>

<script>
export default {
mounted(){
    this.$nextTick(function () {
       this.$store.commit('isOther')
      });
 
}
}

</script>
<style>
</style>