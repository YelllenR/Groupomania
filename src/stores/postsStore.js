import { defineStore } from "pinia";

import { ref } from "vue";
import fetchUrl from '../helpers/url.json';


const baseUrl = fetchUrl.baseUrl;

export const usePostsStore = defineStore("posts", {
    state: () => {

        return {
            posts: ref({
                imagePost: "",
                dateTime: "",
                post: "",
                firstname: "",
                lastname: ""
            }),

        }
    },
    actions: {
        FetchPublications() {
            fetch(`${baseUrl}Posts`)
                .then(response => response.json())
                .then(result => this.PostsToDisplay(result))
        },

        PostsToDisplay(result){
            this.posts.imagePost = result.imagePost;
            this.posts.dateTime = result.dateOfPost;
            this.posts.post = result.post;
            this.posts.firstname = result.firstname;

            console.log(result)
        }
    },

})