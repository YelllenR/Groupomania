<template>
  <ButtonLogin @show-form="$emit('toggle-show-login')" :text="showLoginForm ? 'Connexion' : 'Connectez-vous'">
  </ButtonLogin>
</template>


<script setup>
import ButtonLogin from "./Button.vue";
import { defineComponent } from 'vue';

defineProps({
  showLoginForm: Boolean
});

defineComponent({
  ButtonLogin,

});


</script>
