<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="createAccount" class="create-Account-form">

    <div class="form-control-signup">

      <div class="lastname-field">
        <label for="lastname">Nom</label>
        <input type="text" v-model="userInput.lastname" name="lastname" placeholder="Doe" />
        <!-- <span v-if="error">{{errorMessage}}</span> -->
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="userInput.firstname" name="firstname" placeholder="John" />
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input type="email" v-model="userInput.email" name="email" placeholder="john-doe@outlook.fr" />
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="userInput.password" name="password" />
      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" ref="image" @change="imageSelected" />
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
  image: "",
});


const imageSelected = (event) => {
  userInput.value.image = event.target.files[0]
}


// // watch fonctionne
// watch(() =>
//   userInput.value.firstname, (currentValue, oldvalue) => {
//     console.log(currentValue, oldvalue)
//   }
// )



const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const firstnameRegex = /^[a-zA-Z][A-zÀ-ú]{0,40}$/;
const lastnameRegex = /[a-zA-Z][A-zÀ-ú]+$/;
const valueFirstname = firstnameRegex.test(userInput.value.firstname.trim(""))



// const IsError = () => {
//   if (userInput.value.firstname === "") {
//     error = true;
//     console.log(errorMessage)
//   }
// }

// const CheckFirstname = (userInput) => {

//   return firstnameRegex.test(userInput.firstname.value.trim(""));
// }



const createAccount = () => {
  userStore.Create(userInput.value)
}

// const formdata = new FormData(); 
// formdata.append('image', userInput.value)
// console.log(formdata)


</script>
