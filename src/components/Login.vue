<template>
  <ButtonLogin @show-form="$emit('toggle-show-login')"
  :text="showLoginForm ? 'Connexion' : 'Connectez-vous'"
>
  </ButtonLogin>
</template>


<script>
import ButtonLogin from "./Button.vue";

export default {
  name: "Login",
  props: {
    showLoginForm: Boolean,
  },
  components: {
    ButtonLogin,
  },
};
</script>
