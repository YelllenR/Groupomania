import { defineStore } from "pinia";

import fetchUrl from '../helpers/url.json';
import { ref } from "vue";

const baseUrl = fetchUrl.baseUrl;

export const useUserInfosStore = defineStore("userInfos", {
    state: () => {

        return {

            postPageUser: ref({
                newPostAccountOwner: "", 
                imagePost:""
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
        FetchGetData() {
            fetch(`${baseUrl}auth/userId`)
                .then(response => response.json())
                .then(data => this.GetUserData(data))
        },

        GetUserData(data) {
            this.userData.idOfUser = data.idOfUser;
            this.userData.firstname = data.firstname;
            this.userData.lastname = data.lastname;
            this.userData.password = data.password
            this.userData.email = data.email;
            this.userData.imageProfil = data.imageProfil;
        },


        PublishFromAccountOwner() {
            const inputData = new FormData();
            inputData.append("post", this.postPageUser.newPostAccountOwner)
            inputData.append("imagePost", this.postPageUser.imagePost)

            fetch(`${baseUrl}Post`, {
                method:'POST', 
                body: inputData,
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }

    },

});