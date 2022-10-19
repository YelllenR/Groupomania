<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="createAccount" class="create-Account-form">
    <div class="form-control-signup">
      <div class="lastname-field">
        <label for="name">Nom</label>
        <input type="text" v-model="userInput.lastname" name="lastname" placeholder="Doe" />

        <!-- <span>{{error-message}}</span> -->
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="userInput.firstname" name="firstname" placeholder="John"  />
        <!-- <span>{{error-message}}</span> -->
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input type="email" v-model="userInput.email" name="email" placeholder="john-doe@outlook.fr" />
        <!-- <span>{{error-message}}</span> -->
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="userInput.password" name="password" />
        <!-- <span>{{error-message}}</span> -->
      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" ref="image" />
        <!-- <span>{{error-message}}</span> -->
      </div>

      <!-- <div :class="errorSignup">{{ errorLogin }}</div> -->
      <input type="submit" value="Création" class="button button-signup" />
    </div>
  </form>
</template>



<script setup>


import { ref, watch } from 'vue'
import { useUserStore } from '../stores/userStore';


const userStore = useUserStore();



const userInput = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  image: ""
});

const createAccount = () => {
  if(userInput.value.email === "" || userInput.value.firstname ===""){
    console.log("vide")
  }
}



const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const testEmail = emailRegex.test()

const firstnameRegex = /^[a-zA-Z][A-zÀ-ú]{0,40}$/;
const test = firstnameRegex.test()
const lastnameRegex = /[a-zA-Z][A-zÀ-ú]+$/;







// const firstname = ref("");
// const lastname = ref("");
// const email = ref("");
// const password = ref("");
// const image = ref("");

// function createAccount() {
//   formValidation.user.push({
//     userId: uuid(),
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     password: password.value,
//     image: image.value
//   });

//   firstname.value = "";
//   lastname.value = "";
//   email.value = "";
//   password.value = "";
//   image.value = "";
// }



</script>
