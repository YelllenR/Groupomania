<template>
  <form method="post" action="" enctype="multipart/form-data" @submit.prevent="createAccount"
    class="create-Account-form">

    <div class="form-control-signup">

      <div class="lastname-field">
        <label for="lastname">Nom</label>
        <input type="text" v-model="user.lastname" name="lastname" placeholder="Doe" required="true" />
        <span v-if="message.errorLastname">{{ message.errorLastname }}</span>
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="user.firstname" name="firstname" placeholder="John" required="true" />
        <span v-if="message.errorFirstname">{{ message.errorFirstname }}</span>
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" name="email" placeholder="john-doe@outlook.fr" required="true" />
        <span v-if="message.errorEmail">{{ message.errorEmail }}</span>
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="user.password" name="password" required="true" />

      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" ref="image" @change="imageSelected"
          required="true" />
      </div>

      <input type="submit" value="Création" class="button button-signup">
    </div>
  </form>
</template>



<script setup>
import { watchEffect } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserCreationStore } from '../stores/userCreateAccountStore';
import { useFormValidations } from '../stores/formsValidationStore'
import { useRouter } from 'vue-router'


const userStore = useUserCreationStore();

const formValidation = useFormValidations();
const { user, message } = storeToRefs(formValidation)



// Gets the targeted image
const imageSelected = (event) => {
  user.value.image = event.target.files[0];
};


// to watch modifications of inputs and render errors, it calls the formValidation store
watchEffect(() => {
  formValidation.validateEmail(user.value.email);
  formValidation.validateFirstname(user.value.firstname);
  formValidation.validateLastname(user.value.lastname);
});


// on click, calls the userStore for post request
const createAccount = async () => {
  await userStore.Create(user.value)
};

</script>
