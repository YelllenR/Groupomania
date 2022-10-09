<template>
  <form @submit="onSubmit" class="login-form">
    <div class="form-control-login">
      <label>Connexion</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Renseigner votre adresse email"
        required="true"
      />
      <label>Mot de passe</label>
      <input
        type="password"
        v-model="password"
        name="password"
        required="true"
      />
    </div>

    <div :class="error">{{ error }}</div>

    <input type="submit" value="Connexion" class="button button-login" />
  </form>
</template>


<script>
export default {
  name: "LoginForm",
  props: {
    error: String,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.email && !this.password) {
        return (error =
          "Veuillez renseigner les informations nécessaires pour la connexion");
      }

      const userLogin = {
        id: Number,
        email: this.email,
        password: this.password,
      };

      this.$emit('LoginForm', userLogin)

      this.email = "";
      this.password = "";
    },
  },
};
</script>


<style scoped>
.login-form{
  margin-bottom: 40px;
    margin: 20px 8px;
  padding: 8px;
  border: 1px solid green;
}


.form-control-login label {
  display: block;
}

.form-control-login input {
  width: 90%;
  height: auto;
  margin: 5px;
  padding: 3px 7px;
  font-size: 12px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 16px;
}

.btn-block {
  width: 90%;
  margin: 0px 0px 0px 16px;
  background-color: black;
}
</style>