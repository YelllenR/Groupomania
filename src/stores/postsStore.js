import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import axios from "axios";
import fetchUrl from '../helpers/url.json';
// import { useUsersDataStore } from '../stores/usersDataStore';

const baseUrl = fetchUrl.baseUrl;
const auth = localStorage.getItem("token");


axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;

export const usePostsStore = defineStore("posts", {
    state: () => {
        return {
            posts: ref({
                imagePost: "",
                dateOfPost: "",
                post: "",
                idOfPost: "",
                idOfUser: "",
                lastname: "",
                imageProfil: "",
                firstname: "",
            })

        }
    },

    actions: {
        /**
         * Fetch API for post page - get data of posts
         */
        async FetchPublications() {

            const data = await axios.get(`${baseUrl}Posts`)
            this.posts = data.data

            this.IsPostEmpty(data)

        },


        /**
         * @param {*} data 
         * @returns {*} Boolean and data from API
         */
        IsPostEmpty(data) {
            let hasPosts;

            if (data.length < 0) {
                hasPosts = false;
                alert("Pas encore de post, soyez le premier")
            } else {
                hasPosts = true;
            }

            return hasPosts
        },



    },

})