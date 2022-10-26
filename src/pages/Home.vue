<template>
  <header id="container">
    <HeaderComponent>{{}}</HeaderComponent>
  </header>

  <main id="main-container">
    <div v-if="!showSignupForm" class="showForm">
      <Login
        @toggle-show-login="toggleLogForm"
        title="Connexion"
        :showLoginForm="showLoginForm"
      >
      </Login>

      <div v-if="showLoginForm">
        <LoginForm />
      </div>
    </div>

    <div v-if="!showLoginForm" class="showForm">
      <p v-if="!showSignupForm" class="create-account">
        Pas encore de compte ?
      </p>

      <Signup
        @toggle-show-signup="toggleSignupForm"
        title="Créez-en un!"
        :showSignupForm="showSignupForm"
      >
      </Signup>

      <div v-if="showSignupForm">
        <SignupForm />
      </div>
    </div>
  </main>

  <footer>
    <FooterIcons>{{}}</FooterIcons>
  </footer>

  
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import FooterIcons from "../components/Footer.vue";

export default {
  name: "Home",

  components: {
    HeaderComponent,
    Login,
    Signup,
    LoginForm,
    SignupForm,
    FooterIcons,
  },

  data() {
    return {
      showLoginForm: false,
      showSignupForm: false,
    };
  },

  methods: {
    toggleLogForm() {
      this.showLoginForm = !this.showLoginForm;
    },

    toggleSignupForm() {
      this.showSignupForm = !this.showSignupForm;
    },
  },
};
</script>

