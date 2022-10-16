import { defineStore } from "pinia";

export const useConnexionApi = defineStore("connexionApi", {
    state: () => ({
        userLogin: []
    }),
    actions: {
        getUserLogin() {
            const urlToFetch = 'http://localhost:3000/Groupomania/login';

            fetch(urlToFetch)
                .then(response => response.json({ messsage: "ok" }))
                .then(data => data)
                .catch((error) => console.log(error))
        }
    }

});