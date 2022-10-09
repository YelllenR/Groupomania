<template>
  <div id="container">
    <HeaderComponent>{{}}</HeaderComponent>
  </div>

  <main id="main-container">
    <Login
      @toggle-show-form="toggleLogForm"
      title="Connexion"
      :showLoginForm="showLoginForm"
    ></Login>

    <div v-if="showLoginForm">
      <LoginForm @login-form="LoginForm"> </LoginForm>
    </div>

    <p class="create-account">Pas encore de compte ?</p>

    <h2 class="signup">
      Créez-en un!
      <Signup></Signup>
    </h2>
  </main>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Home",

  components: {
    HeaderComponent,
    Login,
    Signup,
    LoginForm,
  },

  data() {
    return {
      showLoginForm: false,
    };
  },

  methods: {
    toggleLogForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

