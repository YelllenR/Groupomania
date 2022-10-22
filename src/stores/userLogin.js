import { defineStore } from "pinia";

export const useUserLogin = defineStore("userLogin", {
    state: () => ({
        user: []
    }),

    actions: {
        Login(user) {
            if (this.user.values === "") {
                console.log("no")
            } else {
                const logData = new FormData();
                logData.append('user', this.user);

                fetch('http://localhost:3000/Groupomania/login', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                })
                    .then((response) => {
                        if (response.status(200)) {
                            console.log(this.$router.push({ name: 'Posts' }))
                        }
                    })
                    .then((data) => console.log(data))
                    .catch((error) => console.log("Oh no error", error))


            }

        }
    }
});