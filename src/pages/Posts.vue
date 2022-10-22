<template>
    <header id="container">
        <HeaderPosts />
    </header>

    <main id="mainPost-container">
        <section class="box-userAccount">
            <div class="userAccount">
                <img class="userPicture" src="../assets/mulet.jpg" alt="Photo de profil">
                <textarea name="userPost" id="userPost" v-model="userPostArea">{{}}</textarea>
            </div>
            <button class="post-button" @click="newsPost">Publiez</button>
        </section>

        <section>
            <PostsBox></PostsBox>
        </section>
    </main>

    <footer>
        <FooterIcons>{{}}</FooterIcons>
    </footer>
</template>


<script setup>
import { defineComponent } from 'vue';
import HeaderPosts from '../components/HeaderPosts.vue';
import PostsBox from '../components/PostsBox.vue';
import FooterIcons from "../components/Footer.vue";


const components = defineComponent({
    HeaderPosts,
    PostsBox,
    FooterIcons
});


</script>