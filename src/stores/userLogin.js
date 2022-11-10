import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'
import axios from 'axios'
import fetchUrl from '../helpers/url.json';


const baseUrl = fetchUrl.baseUrl;


export const useUserLogin = defineStore("userLogin", {
    state: () => {
        const userInputs = useUserRefsStore();
        const { user } = storeToRefs(userInputs);
        return {
            user,
            stateLogs: {
                IsLoggedIn: Boolean,
                hasToken: Boolean
            },
        }

    },

    actions: {

        /**
         * 
         * @param {*} user 
         * Post the request login and calls the method returnsToken
         */
        async Login(user) {
            const logData = new FormData();
            logData.append('user', this.user);
            JSON.stringify(user);

            const data = await axios.post(`${baseUrl}auth/login`, user)
            this.ReturnsToken(data)

        },

        ReturnsToken(data) {
            const result = data.data;
            if ('token' in result) {
                localStorage.setItem('token', result.token);
                this.stateLogs.IsLoggedIn = true;
                this.stateLogs.hasToken = true;

            } else {
                alert("Vérfiez vos identifiants de connexion")
            }
            return this.stateLogs.hasToken;
        },

        LogsOfUser() {
            this.stateLogs.IsLoggedIn = false;
            this.stateLogs.hasToken = false;
        }
    }
});