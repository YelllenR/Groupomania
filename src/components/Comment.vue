<template>
    <section id="container-Comment">
        <div class="usersComments">
            <div class="box-comment" v-for="comment in usersComments" :key="comment.idOfPost">

                <div class="userInformations">
                    <img :src="comment.imageProfil" alt="image de profil" name="image" class="userImage">
                    <p :ref="comment.lastname" class="userNameComment">{{ comment.lastname }}</p>
                    <p :ref="comment.firstname" class="userNameComment">{{ comment.firstname }}</p>
                </div>

                <div class="infosComment">
                    <div class="dateOfComment" :ref="comment.createdAt">{{ comment.createdAt }}</div>
                    <div class="commentOfUser" :ref="comment.comment">
                        {{ comment.comment }}
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useReactionPost } from '../stores/reactOnPostStore';


const usersReactions = useReactionPost();
const { usersComments } = storeToRefs(usersReactions)

defineComponent({
    Comment,
})


</script>