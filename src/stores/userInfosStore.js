import { defineStore } from "pinia";
import { fetchHelper } from '../helpers/fetchRequests'

const baseUrl = `${import.meta.env.VITE_URL_API}/:id`

export const useUserInfosStore = defineStore("userInfos", {
    state: () => ({
        userInfos: {}
    }),

    actions: {
        GetUserInfos() {
            this.userInfos = { userInfos };
            fetchHelper.get(baseUrl)
                .then(userInfos => this.userInfos = userInfos)
                .catch(error => this.userInfos = { error })
        }
    }
});