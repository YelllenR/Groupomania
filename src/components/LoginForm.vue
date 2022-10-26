<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <div class="form-control-login">

      <div class="email-input">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" name="email" placeholder="Renseigner votre adresse email"
          required="true" />
        <span v-if="message.errorEmail">{{ message.errorEmail }}</span>
      </div>


      <div class=" password-input">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="user.password" name="password" placeholder="Renseigner votre mot de passe"
          required="true" />
      </div>

      <!-- <div :class="errorLogin">{{ errorLogin }}</div> -->
      <input type="submit" value="Connexion" class="button button-login" href="../pages/Posts.vue"/>
      <!-- <router-link to="/posts"></router-link> -->
    </div>
  </form>
</template>


<script setup>
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserLogin } from '../stores/userLogin'
import { useFormValidations } from '../stores/formsValidationStore'


const formValidation = useFormValidations();

const { user, message } = storeToRefs(formValidation)

const loginUser = useUserLogin();

watchEffect(() => {
  formValidation.validateEmail(user.value.email);
});

const onSubmit = () => {
  loginUser.Login(user.value);
};

</script>

