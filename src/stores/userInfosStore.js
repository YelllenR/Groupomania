import { defineStore } from "pinia";
import fetchUrl from '../helpers/url.json';
import { ref } from "vue";
import axios from "axios";


const auth = localStorage.getItem("token");
const baseUrl = fetchUrl.baseUrl;
axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;


export const useUserInfosStore = defineStore("userInfos", {
    state: () => {
        return {
            postPageUser: ref({
                newPostAccountOwner: "",
                imagePost: ""
            }),

            userData: ref({
                idOfUser: "",
                email: "",
                password: "",
                firstname: "",
                lastname: "",
                imageProfil: "",
                modifyPost: "",
                role: ""
            })
        }
    },
    getters: {
        checkState(state) {
            if (state.postPageUser.imagePost.length > 0) {
                console.log(state.postPageUser.imagePost)
            }
        }
    },
    actions: {

        /** Fetch request to get the user data
         * 
         * Calls the method GetUserData after the response
         */
        async GetOneUser() {
            try {
                const response = await axios.get(`${baseUrl}/userId`)
                const data = response.data
                this.GetUserData(data);

            }
            catch (error) {
                console.log(error)
            }


        },

        /**
         * 
         * @param {*} data of user got from the fetch request
         * @returns data
         */
        GetUserData(data) {
            this.userData.idOfUser = data.idOfUser;
            this.userData.firstname = data.firstname;
            this.userData.lastname = data.lastname;
            this.userData.password = data.password
            this.userData.email = data.email;
            this.userData.imageProfil = data.imageProfil;
            this.userData.role = data.role; 
        },

        /** Formating data before sending the post request
         * 
         *  Data : 1. The post to be sent / 2. The image
         * @return data from API 
         */
        async PublishFromAccountOwner() {

            if (this.postPageUser.imagePost.length === 0) {
                await axios.post(`${baseUrl}Post`, { "post": this.postPageUser.newPostAccountOwner })

            } else {
                const inputData = new FormData();
                inputData.append("imagePost", this.postPageUser.imagePost)
                inputData.append("post", this.postPageUser.newPostAccountOwner)

                await axios.postForm(`${baseUrl}Post`, inputData)
                    .then(response => console.log(response))
            }

        },


    },

});