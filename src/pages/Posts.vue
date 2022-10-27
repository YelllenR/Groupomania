<template>
    <header id="container">
        <HeaderPosts />
    </header>

    <main id="mainPost-container">
        <section class="box-userAccount">
            <div class="userAccount">
                <img class="userPicture" :src="userData.imageProfil" alt="Photo de profil">
                <form action="" method="post" enctype="multipart/form-data">

                    <textarea name="post" id="userPost" v-model="postPageUser.newPostAccountOwner"></textarea>
                    <input class="image-post" type="file" accept="image/*" name="imagePost"
                        :ref="postPageUser.imagePost" @change="imagePost" />
                </form>
            </div>
            <button class="post-button" @click.prevent="newsPost">Publiez</button>
        </section>

        <section>
            <PostsBox></PostsBox>
        </section>
    </main>

    <footer>
        <FooterIcons></FooterIcons>
    </footer>
</template>


<script setup>
import { defineComponent } from 'vue';
import HeaderPosts from '../components/HeaderPosts.vue';
import PostsBox from '../components/PostsBox.vue';
import FooterIcons from "../components/Footer.vue";
import { useUserInfosStore } from '../stores/userInfosStore';
import { storeToRefs } from 'pinia';



const components = defineComponent({
    HeaderPosts,
    PostsBox,
    FooterIcons
});


const userInfos = useUserInfosStore();

const { userData, postPageUser } = storeToRefs(userInfos)

userInfos.FetchGetData();

const imagePost = (event) => {
    event.target.files[0];
};


function newsPost() {
    userInfos.PublishFromAccountOwner()
}


// Reste à faire => bloquer le bouton si pas d'input du user prini
</script>