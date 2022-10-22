<template>
  <form method="post" enctype="multipart/form-data" @submit.prevent="createAccount" class="create-Account-form">

    <div class="form-control-signup">

      <div class="lastname-field">
        <label for="lastname">Nom</label>
        <input type="text" v-model="userInput.lastname" name="lastname" placeholder="Doe" required="true"/>
        <span v-if="message.errorLastname">{{message.errorLastname}}</span>
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="userInput.firstname" name="firstname" placeholder="John" required="true"/>
        <span v-if="message.errorFirstname">{{message.errorFirstname}}</span>
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input type="email" v-model="userInput.email" name="email" placeholder="john-doe@outlook.fr" required="true"/>
        <span v-if="message.errorEmail">{{message.errorEmail}}</span>
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="userInput.password" name="password"  required="true"/>

      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" ref="image" @change="imageSelected" 
        required="true"/>
      </div>

      <input type="submit" value="Création" class="button button-signup">
    </div>
  </form>
</template>



<script setup>
import { ref, watchEffect } from 'vue'

import { useUserCreationStore } from '../stores/userCreateAccountStore';

import { useFormValidations } from '../stores/formsValidationStore'


const userStore = useUserCreationStore();
// const formValidation = useFormValidations();


const userInput = ref({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  image: "",
  // isDisable: Boolean
});

const message = ref({
  errorFirstname: "",
  errorLastname: "",
  errorEmail: "",

});

const imageSelected = (event) => {
  userInput.value.image = event.target.files[0]
};

const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const firstnameRegex = /^[a-zA-Z][A-zÀ-ú]{0,40}$/;
const lastnameRegex = /[a-zA-Z][A-zÀ-ú]+$/;

watchEffect(() => {
  validateEmail(),
    validateFirstname(),
    validateLastname()
});


function validateEmail() {
  if (emailRegex.test(userInput.value.email.trim(""))) {
    message.value.errorEmail = ""
  } else {
    message.value.errorEmail = "Veuillez respecter la saisie"
  }
};

function validateFirstname() {
  if (firstnameRegex.test(userInput.value.firstname.trim(""))) {
    message.value.errorFirstname = ""
  } else {
    message.value.errorFirstname = "Veuillez respecter la saisie"
  }
};

function validateLastname() {
  if (lastnameRegex.test(userInput.value.lastname.trim(""))) {
    message.value.errorLastname = ""
  } else {
    message.value.errorLastname = "Veuillez respecter la saisie"
  }
};

const createAccount = () => {
  userStore.Create(userInput.value);
}



</script>
