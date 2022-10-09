<template>
  <Button @login-form="$emit('toggle-show-form')"
  :text="showLoginForm ? 'Connexion' : 'Connectez-vous'"
>
  
  </Button>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "Login",
  props: {
    showLoginForm: Boolean,
  },
  components: {
    Button,
  },
};
</script>
