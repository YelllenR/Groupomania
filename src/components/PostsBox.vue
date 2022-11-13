<template>
    <div id="post-container">
        <div class="hasPosts onePost">
            <div class="onePost" v-for="post in posts" :key="post.idOfPost">

                <div class="usersPic">
                    <div class="boxUser">
                        <img :src="post.imageProfil" alt="Profil picture" class="profil-picture" name="image">
                        <p class="username" :ref="post.firstname">{{ post.firstname }}
                        </p>
                        <p class="username" :ref="post.firstname">{{ post.lastname }}
                        </p>
                    </div>


                </div>

                <div class="userPost">
                    <div class="dateTime" :ref="post.dateOfPost">{{ post.dateOfPost }}</div>
                    <div class="post" :ref="post.post">
                        {{ post.post }}
                        <img :src="post.imagePost" class="imageFromPost">
                    </div>

                    <div class="changePost"
                        v-if="userData.idOfUser === post.idOfUser || userData.role === 'superadmin'">
                        <label id="postChange"></label>
                        <input class="inputChange" id="postChange" v-model="post.post" name="post" />

                        <div class="button-box">
                            <button class="confirmChange" @click="modifyPost(post)">Confirmez</button>
                            <button class="deletePost" @click="deletePost(post)">Suppression</button>
                        </div>

                    </div>
                </div>

                <div class="reaction-icons-post">
                    <i class="fas fa-frown reaction" @click="sendDislikeOnPost(post)"></i>
                    <i class="fas fa-laugh-beam reaction" @click="sendLikeOnPost(post)"></i>
                    <i class="fas fa-comment reaction" @click="Open(post, reactions), isOpen = true"></i>

                    <div v-if="post.idOfPost === reactions.postId">
                        <div class="modal" v-if="isOpen">
                            <div class="container">
                                <Comment></Comment>

                                <label for="comments"> </label>
                                <textarea name="comment" id="comments" v-model="usersComments.comment"></textarea>
                                <div class="button-box">
                                    <button @click="sendComment(post)" class="send">Envoyer</button>
                                    <button @click="isOpen = false, removeIdUlr()" class="close">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>


</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePostsStore } from '../stores/postsStore';
import { useUserInfosStore } from '../stores/userInfosStore';
import { useReactionPost } from '../stores/reactOnPostStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Comment from './Comment.vue';


const router = useRouter();

const postsData = usePostsStore();
const { posts } = storeToRefs(postsData);

const userInfos = useUserInfosStore()
const { userData } = storeToRefs(userInfos);

const usersReactions = useReactionPost();
const { reactions, usersComments } = storeToRefs(usersReactions);

postsData.FetchPublications();
userInfos.GetOneUser()

let isOpen = ref(false);


const Open = async (post, reactions) => {
    reactions.postId = post.idOfPost;
    await router.replace({ query: { "id": reactions.postId } });
    await usersReactions.GetComments();
};


const removeIdUlr = async () => {
    await router.replace({ name: 'Posts' })
}



const modifyPost = async (post) => {
    await postsData.ModifyOwnPost(post)
    postsData.FetchPublications();

    confirm("Post modifié");
}



const deletePost = async (post) => {
    await postsData.DeleteOwnPost(post)
    postsData.FetchPublications();
}

const sendComment = async (post) => {
    await usersReactions.commentOnPost(post);
    await usersReactions.GetComments();
}

const sendDislikeOnPost = (post) => {
    reactions.value.dislike++;
    usersReactions.incrementDislikes(post);
}

const sendLikeOnPost = (post) => {
    reactions.value.like++;
    usersReactions.incrementLikes(post)
}


</script>


