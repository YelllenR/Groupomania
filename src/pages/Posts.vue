<template>
    <header id="container">
        <HeaderPosts />
    </header>

    <main id="mainPost-container">
        <section class="box-userAccount">
            <div class="userAccount">
                <img class="userPicture" :src="userProfilPicture" alt="Photo de profil">
                <textarea name="userPost" id="userPost" v-model="userPostArea">{{}}</textarea>
            </div>
            <button class="post-button" @click="newsPost">Publiez</button>
        </section>

        <section>
            <PostsBox></PostsBox>
        </section>
    </main>

    <footer>
        <FooterIcons>{{ }}</FooterIcons>
    </footer>
</template>


<script setup>
import { defineComponent } from 'vue';
import HeaderPosts from '../components/HeaderPosts.vue';
import PostsBox from '../components/PostsBox.vue';
import FooterIcons from "../components/Footer.vue";
import { deferredComputed } from '@vue/reactivity';


const components = defineComponent({
    HeaderPosts,
    PostsBox,
    FooterIcons
});

const computed = deferredComputed({

})

</script>