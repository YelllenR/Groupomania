import { defineStore } from "pinia";


const baseUrl = `http://localhost:3000/Groupomania`

export const useUserLogin = defineStore("userLogin", {
    state: () => ({
        user: []
    }),

    actions: {
        Login(user) {
            const logData = new FormData();
            logData.append('user', this.user);

            fetch('http://localhost:3000/Groupomania/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then((response) => console.log(response.json()))
                .then((data) => console.log(data))
                .catch((error) => console.log("Oh no error", error))
        }
    }
});