<template>
  <form @submit="onSubmit" class="login-form">
    <div class="form-control-login">

      <div class="email-input">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" placeholder="Renseigner votre adresse email" required="true" />
      </div>
      <div class=" password-input">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" name="password" placeholder="Renseigner votre mot de passe"
          required="true" />
      </div>

      <div :class="errorLogin">{{ errorLogin }}</div>
      <input type="submit" value="Connexion" class="button button-login" />
    </div>
  </form>
</template>


<script setup>
// import { useFormValidations } from '../stores/formsValidationStore';

import { ref, computed } from "vue";


// const formValidation = useFormValidations();
// const userAuth = useUserAuth();


// const defineProps = {
//   props: {
//     errorLogin: String,
//   }
// }

// const name = "LoginForm";



// function onSubmit(e) {
//   e.preventDefault();

//   if (!this.email && !this.password) {
//     return (errorLogin =
//       "Veuillez renseigner les informations nécessaires pour la connexion");
//   }

//   const userLogin = ref(
//     {
//       email: userAuth.email,
//       password: userAuth.password
//     }
//   )


//   this.$emit("show-form", userLogin);

//   this.email = "";
//   this.password = "";
// }


</script>

