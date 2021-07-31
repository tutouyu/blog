<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
export default {
  name: "app",
  components: {
    navbar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
