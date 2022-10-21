import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid'
// import { moment } from 'vue-moment'

export const useUserCreationStore = defineStore("userStore", {
    state: () => ({
        newUser: []
    }),
    actions: {
        Create(newUser) {
            this.newUser.push({
                userId: uuid(),
                // creattionDate: moment('01-02-2022', 'DD-MM-YYYY', 'fr', true),
                ...newUser,
            })
            const formData = new FormData();
            formData.append('newUser', this.newUser);

            fetch('http://localhost:3000/Groupomania/create-account', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
                .then((response) => console.log(response.json()))
                .catch((error) => console.log("Oh no error", error))
        }
    },
});

