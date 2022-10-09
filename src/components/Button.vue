<template>
  <button @click="onClick()" class="button loginButton">
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
      this.$emit('login-form')
    },
  },
};
</script>
