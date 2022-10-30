import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'


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
        Login(user) {
            const logData = new FormData();
            logData.append('user', this.user);

            fetch('http://localhost:3000/Groupomania/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then((response) => response.json())
                .then((data) => this.ReturnsToken(data))
                .catch((error) => console.log("Oh no error", error))

        },

        ReturnsToken(data) {
            if ('token' in data) {
                localStorage.setItem("token", data.token);
                this.stateLogs.IsLoggedIn = true;
                this.stateLogs.hasToken = true;
            } 
            return this.stateLogs.hasToken;
        }, 

        LogsOfUser(){
            this.stateLogs.IsLoggedIn = false;
            this.stateLogs.hasToken = false; 
        }
    }
});