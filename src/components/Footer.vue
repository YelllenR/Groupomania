<template>
  <div id="footer-container">
    <div class="social-icons">
      <a :href="twitter"><i class="fab fa-twitter fa-1x" /></a>
      <a :href="linkedIn"><i class="fab fa-linkedin-in fa-1x" /></a>
      <a :href="facebook"><i class="fab fa-facebook-f fa-1x" /></a>
    </div>
    <a href="mailto:contact@groupomania.fr"><i class="fas fa-mail-bulk fa-1x" /></a>
  </div>
</template>

<script>

export default {
  name: "FooterIcons",

  data() {
    return {
      twitter: "https://twitter.com/",
      linkedIn: "https://fr.linkedin.com/",
      facebook: "https://fr-fr.facebook.com/"
    }

  }
};
</script>

