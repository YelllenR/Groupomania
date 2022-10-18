<template>
  <form method="post" enctype="multipart/form-data" @submit="createAccount" class="create-Account-form">
    <div class="form-control-signup">
      <div class="lastname-field">
        <label for="name">Nom</label>
        <input type="text" v-model="lastName" name="lastname" placeholder="Doe" required="true" />
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="firstName" name="firstname" placeholder="John" required="true" />
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" placeholder="john-doe@outlook.fr" required="true" />
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" name="password" required="true" />
      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" required="true" />
      </div>

      <!-- <div :class="errorSignup">{{ errorLogin }}</div> -->
      <input type="submit" value="Création" class="button button-signup" @click="submitSignup" />
    </div>
  </form>
</template>

<script>

// // import { useUserStore } from '../stores/userStore'
// import { ref } from 'vue'

// export default {

// setup() {
//   // const userStore = useUserStore()
//   const lastName = ref('')
//   const firstName = ref('')
//   const email = ref('')
//   const password = ref('')


// const submitSignup = () => {
//   // userStore;
// },


// return {
//   userStore,
//   lastName,
//   firstName,
//   email,
//   password, 

//   submitSignup
// }
//   },

//   name: "SignupForm",

//   // props: {
//   //   error: String,
//   // },
// }

export default {
  name: "SignupForm",

  data() {
    return {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
    }
  }
}
</script>
