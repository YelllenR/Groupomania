<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <div class="form-control-login">

      <div class="email-input">
        <label for="email">Email</label>
        <input type="email" v-model="UserLogInput.email" name="email" placeholder="Renseigner votre adresse email" required="true" />
      </div>
      <div class=" password-input">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="UserLogInput.password" name="password" placeholder="Renseigner votre mot de passe"
          required="true" />
      </div>

      <!-- <div :class="errorLogin">{{ errorLogin }}</div> -->
      <input type="submit" value="Connexion" class="button button-login" />
    </div>
  </form>
</template>


<script setup>
import { ref, computed } from "vue";
import { useUserLogin } from '../stores/userLogin'

const UserLogInput = ref({
  email: "",
  password: ""
});


const loginUser = useUserLogin();

const onSubmit = () => {
  loginUser.Login(UserLogInput.value)
}




</script>

