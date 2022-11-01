<template>
    <div id="post-container">
        <div class="hasPosts onePost">
            <div class="onePost" v-for="post in posts" :key="post.idOfPost">

                <div class="usersPic">
                    <img :src="post.imageProfil" alt="Profil picture" class="profil-picture" name="image">
                    <span class="username" :ref="post.firstname">{{ post.firstname }}</span>
                    <span class="username" :ref="post.lastname">{{ post.lastname }}</span>
                </div>

                <div class="userPost">
                    <div class="box-date-post">
                        <div class="dateTime" :ref="post.dateOfPost">{{ post.dateOfPost }}</div>
                        <div class="post" :ref="post.post">{{ post.post }}
                        </div>
                    </div>

                    <div class="reaction-icons-post">
                        <i class="fas fa-frown reaction"></i>
                        <i class="fas fa-laugh-beam reaction"></i>
                        <i class="fas fa-comment reaction"></i>
                    </div>
                    <!-- <span v-if="accountOwner">{{ modification }}</span> -->
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>


import { storeToRefs } from 'pinia';
import { usePostsStore } from '../stores/postsStore';


const postsData = usePostsStore();

const { posts } = storeToRefs(postsData);




postsData.FetchPublications();




</script>