import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid';




export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: []
        }
    },
    actions: {
        async getNewUser() {
            const request = BuildPostRequest();

            try {
                SendDataFromSignup = () => {
                    fetch(request)
                        .then((response) => response.json())
                        .then((data) => GetFormDataSignup(data))
                }
            }
            catch (error) {
                console.log(error)
            }
        },

        create(user) {
            this.user.push({
                id: uuid,
                ...user
            })
        },
    },
})

