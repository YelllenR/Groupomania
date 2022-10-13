import { defineStore } from "pinia";

export const useAuthStore = defineStore('checkAuthUser', {
    state: () => ({
        Users: []
    }),

    actions: {
        CheckUser(user){
            if(user.email && user.password != request.body){
                return error; 
            }
        }
    }
});