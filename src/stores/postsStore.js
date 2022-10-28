import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

import fetchUrl from '../helpers/url.json';

import { useUserInfosStore } from './userInfosStore'

const baseUrl = fetchUrl.baseUrl;

export const usePostsStore = defineStore("posts", {
    state: () => {
        return {
            posts: ref({
                imagePost: "",
                dateOfPost: "",
                post: "",
                idOfPost: "",
                imageProfil: "",
                firstname: "",
                lastname: ""
            }),
        }
    },

    actions: {
        /**
         * Fetch API for post page - get data of posts
         */
        FetchPublications() {
            fetch(`${baseUrl}Posts`)
                .then(response => response.json())
                .then(data => this.IsPostEmpty(data))
                .then(data => this.FormatDataToRender(data))
        },


        /**
         * @param {*} data 
         * @returns {*} Boolean and data from API
         */
        IsPostEmpty(data) {
            let hasPosts;

            if (data.length < 0) {
                hasPosts = false;
            } else {
                hasPosts = true;
            }

            return hasPosts, data
        },

        /**
         * @param {*} data from Fetch request
         * 
         * Set the state of posts with the according refs
         */
        FormatDataToRender(data) {
            this.posts = data;
            this.posts.idOfPost = data.idOfPost;

            const userInfos = useUserInfosStore()
            const { userData } = storeToRefs(userInfos)

            if (userInfos.checkUserId(data)) {
                return userData.value
            }

            this.posts.imagePost = data.imagePost;
            this.posts.dateOfPost = data.dateOfPost;
            this.posts.post = data.post;
            this.posts.firstname = userData.value.firstname;
            this.posts.lastname = userData.value.lastname;
            this.posts.imageProfil = userData.value.imageProfil


            console.log(data, this.posts.imageProfil)
        },

    },

})