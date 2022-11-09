import fetchUrl from '../helpers/url.json';
import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'
import axios from 'axios';

const baseUrl = fetchUrl.baseUrl;



export const useUserCreationStore = defineStore("userStore", {
    state: () => {
        const userInputs = useUserRefsStore();
        const { user } = storeToRefs(userInputs);

        return {
            user,
        }
    },

    actions: {
        async Create() {

            const formData = new FormData();

            formData.append('firstname', this.user.firstname)
            formData.append('lastname', this.user.lastname)
            formData.append('email', this.user.email)
            formData.append('password', this.user.password)
            formData.append('image', this.user.image)



            const result = await axios.post(`${baseUrl}auth/create-account`, formData)

            return result;
        },
    },

});

