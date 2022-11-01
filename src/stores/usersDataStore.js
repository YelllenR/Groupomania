import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import fetchUrl from '../helpers/url.json';
const baseUrl = fetchUrl.baseUrl;


const auth = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${auth}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${auth}`;

export const useUsersDataStore = defineStore("AllUsers", {
    state: () => {
        return {
            users: [],
        }

    },

    actions: {
        async FetchUsersData() {
            const reponse = await axios.get(`${baseUrl}auth/users`)
            const datas = reponse.data;
            this.users = datas

        }

    },

    RenderDataOnPage() {
        

    }
});