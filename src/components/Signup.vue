<template>
  <!-- It emits the toggle show signup on click and changes the text -->
  <ButtonSignup class="SignupButton"
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
