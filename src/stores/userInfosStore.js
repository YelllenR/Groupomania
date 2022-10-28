import { defineStore } from "pinia";

import fetchUrl from '../helpers/url.json';
import { ref } from "vue";

const baseUrl = fetchUrl.baseUrl;

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
            })
        }
    },

    actions: {
        /** Fetch request to get the user data
         * 
         * Calls the method GetUserData after the response
         */
        FetchGetData() {
            fetch(`${baseUrl}auth/userId`)
                .then(response => response.json())
                .then(data => this.GetUserData(data))
                .then(data => this.checkUserId(data))
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

            return data
        },

        /** Formating data before sending the post request
         * 
         *  Data : 1. The post to be sent / 2. The image
         * @return data from API 
         */
        PublishFromAccountOwner() {
            const inputData = new FormData();
            inputData.append("post", this.postPageUser.newPostAccountOwner)
            inputData.append("imagePost", this.postPageUser.imagePost)

            fetch(`${baseUrl}Post`, {
                method: 'POST',
                body: inputData,
            })
                .then(response => response.json())
                .then(data => { return data })
        },


        /**
         * @param {*} data got from the method FetchGetData()
         * 
         * @return {*} Boolean
         */
        checkUserId(data) {
            if (this.userData.idOfUser === data.idOfUser) {
                return [
                    this.userData.idOfUser,
                    this.userData.imageProfil,
                    this.userData.lastname,
                    this.userData.firstname
                ]
            }

        },

        /**
         * 
         */
        ModifyUserAccount() {

        },


        /**
         * 
         */
        ModifyOwnPost() {

        },


        /**
         * 
         */
        DeleteOwnPost() {

        }


    },

});