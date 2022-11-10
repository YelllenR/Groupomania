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

// Emit is called to emit the form on click
  methods: {
    onClick() {
      this.$emit('show-form')
    },
  },
};
</script>
