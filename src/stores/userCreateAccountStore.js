import fetchUrl from '../helpers/url.json';
import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'
import axios from 'axios';

/**
 * BaseUrl for requests
 */
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

            /**
             * create a new form data, then appends the different values for creation
             */
            const formData = new FormData();

            formData.append('firstname', this.user.firstname)
            formData.append('lastname', this.user.lastname)
            formData.append('email', this.user.email)
            formData.append('password', this.user.password)
            formData.append('image', this.user.image)


            /**
             * Post request with url and the form data | multipart
             */
            const result = await axios.post(`${baseUrl}auth/create-account`, formData)

            return result;
        },
    },

});

