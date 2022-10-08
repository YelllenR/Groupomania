<template>
  <div id="container">
    <HeaderComponent class="header">{{}}</HeaderComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";

export default {
  name: "App",

  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
</style>
