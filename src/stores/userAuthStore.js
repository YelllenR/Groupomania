
import { defineStore } from "pinia";

import { useConnexionApi } from "./connexionAPI";

export const useUserAuth = defineStore('checkAuthUser', {

    state: () => ({
        user: {
            email: this.email,
            password: this.password
        }
    }),

    actions: {
        LogUser() {
            const connexionApi = useConnexionApi();

            if (this.user.email && this.user.password) {
                console.log("ok", user);
                
            } else {
                console.log("nope")
            }
        }
    }
});