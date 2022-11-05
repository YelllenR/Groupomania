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
                        <div class="post" :ref="post.post">{{ post.post }}
                        </div>
                    </div>

                    <div class="reaction-icons-post">
                        <i class="fas fa-frown reaction" @click="usersReactions.incrementDislikes(post)"></i>
                        <i class="fas fa-laugh-beam reaction" :ref="post.like"
                            @click="usersReactions.incrementLikes(post)"></i>
                        <i class="fas fa-comment reaction" @click="openComments(post)">
                            <div class="comments" v-show="!comment">
                                <label for="commentPost">
                                    <input type="text" id="commentPost" />
                                </label>
                            </div>
                        </i>
                    </div>

                    <div class="modify-post" v-if="userData.idOfUser === post.idOfUser">
                        <!-- A régler le v-show on click -->
                        <div class="check" @click="openModification(click)">Modification
                            <div v-show="click">
                                <p @click="deletePost()" class="deletePost">Suppression</p>
                                <div class="changes">
                                    <input @change="ModifyPost()" v-model="post.post" />
                                    <button class="modify" @click="Modify()">
                                        <i class="fas fa-check-square"></i>
                                    </button>
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
import { useReactionPost } from '../stores/reactOnPostStore'




const postsData = usePostsStore();
const { posts } = storeToRefs(postsData);

const userInfos = useUserInfosStore()
const { userData } = storeToRefs(userInfos)

const usersReactions = useReactionPost();
const { reactions } = storeToRefs(usersReactions);


postsData.FetchPublications();


let click = true
function openModification(click) {
    click = !click
    // console.log(click = !click)
}


let comment = true;
function openComments(post) {

    usersReactions.commentOnPost(post),
    this.comment = !this.comment
    console.log("click ligne 89")
}

// function ModifyPost() {

// }


// function Modify() {

// }

// function deletePost() {

// }

</script>
