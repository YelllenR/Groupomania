<template>
  <header class="header-container">
    <ThemeColor class="theme-switch"/>
    <div class="header-logo-container">
      <img class="logo-sphere" src="../assets/Logo-sphere.svg" alt="Groupomania" />
      <img class="logo-name" src="../assets/Logo-Name.svg" alt="Groupomania" />
    </div>

    <div class="header-end-line">
      <img src="../assets/color-modes.svg" alt="mini-logo" />
      <div class="line"></div>
      <img src="../assets/color-modes.svg" alt="mini-logo" />
    </div>
  </header>
</template>


<script>
import ThemeColor from "./ThemeColor.vue";

export default {
  name: "HeaderElements",

  components: {
    ThemeColor,
  },
};
</script>

