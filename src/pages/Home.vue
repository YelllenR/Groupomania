<template>
  <div id="container">
    <HeaderComponent>{{}}</HeaderComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";


export default {
  name: "Home",

  components: {
    HeaderComponent,
  
  },
};
</script>

