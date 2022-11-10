<template>
    <header id="container">
        <HeaderPosts />
    </header>

    <main id="mainPost-container">
        <section class="box-userAccount">
            <div class="userAccount">
                <img class="userPicture" :src="userData.imageProfil" alt="Photo de profil">

                <form action="" method="post" class="newPostForm">
                    <textarea name="post" id="userPost" v-model="postPageUser.newPostAccountOwner"></textarea>

                    <label class="upload-file" for="imagePost">
                        <input id="imagePost" type="file" accept="image/*" name="imagePost"
                            :ref="postPageUser.imagePost" @change="imageUserPost" required="true" />
                        <i class="fas fa-camera photo"></i>
                    </label>
                </form>
            </div>
            <button :disabled="isDisabled()" class="post-button" @click="newsPost()">Publiez</button>
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
import { computed, defineComponent } from 'vue';
import HeaderPosts from '../components/HeaderPosts.vue';
import PostsBox from '../components/PostsBox.vue';
import FooterIcons from "../components/Footer.vue";
import { useUserInfosStore } from '../stores/userInfosStore';
import { storeToRefs } from 'pinia';
import { usePostsStore } from '../stores/postsStore';

defineComponent({
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

function isDisabled(){
    if(postPageUser.value.imagePost.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const postsData = usePostsStore();


async function newsPost() {

    await userInfos.PublishFromAccountOwner();
    await postsData.FetchPublications()
}



</script>