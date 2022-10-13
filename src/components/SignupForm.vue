<template>
  <form
    method="post"
    enctype="multipart/form-data"
    @submit="createAccount"
    class="create-Account-form"
  >
    <div class="form-control-signup">
      <div class="lastname-field">
        <label for="name">Nom</label>
        <input
          type="text"
          v-model="lastname"
          name="lastname"
          placeholder="Doe"
          required="true"
        />
      </div>

      <div class="firstname-field">
        <label for="firstname">Prénom</label>
        <input
          type="text"
          v-model="firstname"
          name="firstname"
          placeholder="John"
          required="true"
        />
      </div>

      <div class="email-field">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="emailSignup"
          name="email"
          placeholder="john-doe@outlook.fr"
          required="true"
        />
      </div>

      <div class="password-field">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          v-model="passwordSignup"
          name="password"
          required="true"
        />
      </div>

      <div class="image-field">
        <label for="image">Photo de profil</label>
        <input class="image-file" type="file" accept="image/*" name="image" required="true" />
      </div>

      <div :class="errorSignup">{{ errorLogin }}</div>
      <input type="submit" value="Création" class="button button-signup" />
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupForm",

  props: {
    error: String,
  },
};
</script>
