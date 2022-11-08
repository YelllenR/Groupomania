<template>
    <div id="post-container">
        <div class="hasPosts onePost">
            <div class="onePost" v-for="post in posts" :key="post.idOfPost">

                <div class="usersPic">
                    <img :src="post.imageProfil" alt="Profil picture" class="profil-picture" name="image">
                    <p class="username" :ref="post.firstname">{{ post.firstname }}
                    </p>
                    <p class="username" :ref="post.firstname">{{ post.lastname }}
                    </p>
                </div>

                <div class="userPost">
                    <div class="box-date-post">
                        <div class="dateTime" :ref="post.dateOfPost">{{ post.dateOfPost }}</div>
                        <div class="post" :ref="post.post">
                            {{ post.post }}
                            <img :src="post.imagePost" class="imageFromPost">
                        </div>
                    </div>

                    <div class="reaction-icons-post">
                        <i class="fas fa-frown reaction" @click="usersReactions.incrementDislikes(post)"></i>
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

                    <div class="modify-post" v-if="userData.idOfUser === post.idOfUser">
                        <div class="check" @click="isModifyOpen = true">Modification</div>
                        <div class="modificationsUser" v-if="isModifyOpen">
                            <div class="changes">
                                <i class="fas fa-window-close fa-1.5x" @click="isModifyOpen = false"></i>
                                <label for="postChange"></label>
                                <input class="inputChange" id="postChange" v-model="post.post" name="comment" />
                                <div class="button-box">
                                    <button class="confirmChange" @click="modifyOwnPost(post)">Confirmez</button>
                                    <button class="deletePost" @click="deletePost(post)">Suppression</button>
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
const { userData } = storeToRefs(userInfos)

const usersReactions = useReactionPost();
const { reactions, usersComments } = storeToRefs(usersReactions);

postsData.FetchPublications();

let isOpen = ref(false);
let isModifyOpen = ref(false);


const Open = async (post, reactions) => {
    reactions.postId = post.idOfPost;
    await router.replace({ query: { "id": reactions.postId } });
    await usersReactions.GetComments();

};

const removeIdUlr = async () => {
    await router.replace({ name: 'Posts' })
}

const modifyOwnPost = async (post) => {
    await postsData.ModifyOwnPost(post);
}


const deletePost = async (post) => {
    await postsData.DeleteOwnPost(post)
}

const sendComment = async (post) => {
    await usersReactions.commentOnPost(post);
    await usersReactions.GetComments();
}


const sendLikeOnPost = (post) => {
    usersReactions.incrementLikes(post)
}

</script>


