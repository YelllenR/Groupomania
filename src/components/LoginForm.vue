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

      <input type="submit" value="Connexion" class="button button-login" />

    </div>
  </form>
</template>


<script setup>
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserLogin } from '../stores/userLogin';
import { useFormValidations } from '../stores/formsValidationStore';
import { useRouter } from 'vue-router';

const formValidation = useFormValidations();

const { user, message } = storeToRefs(formValidation)

const loginUser = useUserLogin();
const { stateLogs } = storeToRefs(loginUser);

const router = useRouter();

watchEffect(() => {
  formValidation.validateEmail(user.value.email);
});


const onSubmit = async () => {
  await loginUser.Login(user.value);

  if (stateLogs.value.hasToken === true) {
    await router.push({ name: "Posts" });
   window.location.reload();
  }
};



</script>

