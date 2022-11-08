
import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import fetchUrl from '../helpers/url.json';


const baseUrl = fetchUrl.baseUrl;

const auth = localStorage.getItem("token");


axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;

export const useReactionPost = defineStore("usersReactions", {
    state: () => {
        return {
            reactions: ref({
                postId: "",
                like: 0,
                dislike: 0,
                userId: "",
            }),

            usersComments: ref({
                idOfPost: "",
                idOfUser: "",
                comment: "",
                createdAt: "",
                updatedAt: "",
                commentId: "",
                imageProfil: "",
                firstname: "",
                lastname: "",
            })
        }
    },

    actions: {
        /**
         * 
         * @param {*} post 
         * @returns axios post Like
         */
        async incrementLikes(post) {
            const data = post;

            if (data.idOfPost) {
                this.reactions.postId = data.idOfPost;

                console.log(this.reactions.postId = data.idOfPost)
            }

            if (this.reactions.like === 0 && this.reactions.postId) {
                return this.reactions.like++;
            }


            const sendLike = await axios.post(`${baseUrl}Posts/reactions`, {
                idOfPost: data.idOfPost,
                happy: this.reactions.like,
            });

            return sendLike
        },

        /**
         * 
         * @param {*} post 
         * @returns axios post dislike
         */
        async incrementDislikes(post) {
            const data = post;

            if (data.idOfPost) {
                this.reactions.postId = data.idOfPost;
            }

            if (this.reactions.dislike === 0 && this.reactions.postId) {
                this.reactions.dislike++;

            }

            const sendDislike = await axios.post(`${baseUrl}Posts/reactions`, {
                idOfPost: data.idOfPost,
                sad: this.reactions.dislike,
            });


            return sendDislike
        },

        /**
         * 
         * @param {*} post 
         * @returns Sends new comment for a specific post
         */
        async commentOnPost(post) {
            this.reactions.postId = post.idOfPost;
            const params = new URLSearchParams(window.location.search);
            const sendData = await axios.post(baseUrl + params.get('id'), { "comment": this.usersComments.comment });

            return sendData;
        },

        /**
         * get request for a post (with id of the post)
         * the returned value is set to the usersComments state
         */
        async GetComments() {
            const params = new URLSearchParams(window.location.search);
            const data = await axios.get(baseUrl + params.get('id'));
            this.usersComments = data.data

        },
    }

});