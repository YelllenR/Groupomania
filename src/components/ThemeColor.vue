<template>
  <!-- <input
    @change="toogleTheme"
    id="checkbox"
    type="checkbox"
    class="switch-theme"
  /> -->
  <label for="checkbox" class="switch"></label>
  <span>
    <img  src="../assets/color-modes.svg" alt="Theme color" />
  </span>
  <div class="switch" :class="{}"></div>
</template>

<script>
export default {
    mounted() {
        const userTheme = this.getTheme() 
    },




    }


</script>
