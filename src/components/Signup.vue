<template>
  <ButtonSignup
    @show-form="$emit('toggle-show-signup')"
    :text="showSignupForm ? 'Création du compte' : 'Créez-en un!'"
  >
  </ButtonSignup>
</template>


<script>
import ButtonSignup from "./Button.vue";

export default {
  name: "Signup",
  props: {
    showSignupForm: Boolean,
  },
  components: {
    ButtonSignup,
  },
};
</script>
