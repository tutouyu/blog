<template>
  <div id="footer">
    <div @click="admin">@2021</div>
    <div>It is TuTouyu's bolg</div>
  </div>
</template>

<script>
export default {
  methods: {
    admin() {
      if (window.localStorage.getItem("token")) {
          this.$router.push("admin");
      } else {
        this.$router.push("login");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#footer {
  background-color: rgba(0, 0, 0, 0);
  margin: 20px 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: purple;
  div {
    width: 100%;
    text-align: center;
  }
}
</style>>