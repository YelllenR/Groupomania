<template>
    <div id="post-container">
        <div class="onePost" v-for="post in posts">
            <!-- v-for="post in posts" -->
            <div class="usersPic">
                <img :src="posts.imagePost" alt="Profil picture" class="profil-picture">
                <!-- User picture -->
                <span class="username">{{ `${posts.lastname} ${posts.firstname}` }}</span>
            </div>

            <div class="userPost">
                <div class="box-date-post">
                    <div class="dateTime" v-bind="posts.dateTime">{{ posts.dateTime }}</div>
                    <div class="post" :ref="posts.post">{{ posts.post }}
                    </div>
                </div>

                <div class="reaction-icons-post">
                    <i class="fas fa-frown reaction"></i>
                    <i class="fas fa-laugh-beam reaction"></i>
                    <i class="fas fa-comment reaction"></i>
                </div>
                <!-- <span v-if="accountOwner">{{modification}}</span> -->
            </div>
        </div>

    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePostsStore } from '../stores/postsStore';

const postsData = usePostsStore();

const { posts } = storeToRefs(postsData);

postsData.FetchPublications()


</script>