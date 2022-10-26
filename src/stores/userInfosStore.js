import { defineStore } from "pinia";

export const useUserInfosStore = defineStore("userInfos", {

    state: () => {
        return {
            user: []
        }
    },

    actions: {
        GetUserInfos() {

            fetch('http://localhost:3000/Groupomania/auth/userId', {
                method: 'GET'
            })


            .then((response) => response.json())
            .then((result) => result.json())
        }
    }
});