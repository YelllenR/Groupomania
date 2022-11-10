import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import axios from "axios";
import fetchUrl from '../helpers/url.json';

/**
 * Base url to fetch data
 */
const baseUrl = fetchUrl.baseUrl;

/**
 * Gets the token from the localStorage
 */
const auth = localStorage.getItem("token");

// Defines axios headers on post and get methods
axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;


export const usePostsStore = defineStore("postStore", {
    state: () => {
        return {
            // creation a state to reference for post datas
            posts: ref({
                imagePost: "",
                dateOfPost: "",
                post: "",
                idOfPost: "",
                idOfUser: "",
                lastname: "",
                imageProfil: "",
                firstname: "",
            }),
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

        /**
         * @params {post}
         * Request for modifications of user's post
         */
        async ModifyOwnPost(post) {
            const modifications = await axios.put(`${baseUrl}modify`,
                {
                    idOfPost: post.idOfPost,
                    post: post.post
                }
            )

            return modifications;
        },


        /**
         * @params post
         * gets the id of the post then making a delete request with header and data to API
         */
        async DeleteOwnPost(post) {
            if (post.idOfPost) {

                const deleteData = await axios.delete(`${baseUrl}delete`, {
                    headers: { Authorization: `Bearer ${auth}` },
                    data: {
                        idOfPost: post.idOfPost
                    }
                })

                return deleteData;
            }

        },

    },

})