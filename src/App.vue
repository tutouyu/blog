<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="child-view" />
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
export default {
  name: "app",
  created() {
    document.body.removeChild(document.getElementById("Loading"));
  },
  components: {
    navbar,
  },
  data() {
    return {
      transitionName: "slide-left",
    };
  },
  watch: {
    $route(to, from) {
      //页面的进出通过路由上的index参数来决定
      const prevStamps = from.query.stamps || 0;
      const nextStamps = to.query.stamps || 0;
      this.transitionName =
        prevStamps > nextStamps ? "slide-right" : "slide-left";
    },
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
