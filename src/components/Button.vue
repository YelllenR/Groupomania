<template>
  <button @click="onClick()" class="button formButton">
    {{ text }}
  </button>


</template>

<script>
export default {
  name: "ButtonPages",
  props: {
    text: String,
  },

  methods: {
    onClick() {
      this.$emit('show-form')
    },
  },
};
</script>
