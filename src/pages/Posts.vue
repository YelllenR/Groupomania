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

                    <label class="upload-file" for="imagePost">
                        <input id="imagePost" type="file" accept="image/*" name="imagePost"
                            :ref="postPageUser.imagePost" @change="imageUserPost" />
                        <i class="fas fa-camera photo"></i>
                    </label>
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

userInfos.GetOneUser();

const imageUserPost = (event) => {
    postPageUser.value.imagePost = event.target.files[0];
};







function newsPost() {
    userInfos.PublishFromAccountOwner()
}



</script>