<template>
  <div id="container">
    <HeaderComponent>{{}}</HeaderComponent>
  </div>

  <main id="main-container">
    <Login
      @toggle-show-login="toggleLogForm"
      title="Connexion"
      :showLoginForm="showLoginForm"
    ></Login>

    <div v-if="showLoginForm">
      <LoginForm/>
    </div>

    <p class="create-account">Pas encore de compte ?</p>

    <Signup
      @toggle-show-signup="toggleSignupForm"
      title="Créez-en un!"
      :showSignupForm="showSignupForm"
    >
    </Signup>

    <div v-if="showSignupForm">
      <SignupForm></SignupForm>
    </div>
  </main>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "Home",

  components: {
    HeaderComponent,
    Login,
    Signup,
    LoginForm,
    SignupForm,
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

