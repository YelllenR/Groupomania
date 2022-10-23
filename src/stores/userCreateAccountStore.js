import { defineStore } from "pinia";

export const useUserCreationStore = defineStore("userStore", {
    state: () => ({
        newUser: []
    }),
    actions: {

        Create(newUser) {
            this.newUser.push({
                ...newUser,
            })

            const formData = new FormData();
            formData.append('newUser', this.newUser);

            fetch('http://localhost:3000/Groupomania/auth/create-account', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
                .then((response) => {
                    console.log(response.json())

                })
                .catch((error) => console.log("Oh no error", error))

        }
    },
});

