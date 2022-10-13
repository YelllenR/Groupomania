import { defineStore } from "pinia";



export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: [
                email = "a.rose12@outlook.com", 
                password = "1234"
            ]
        }
    },
    actions: {
        create(user) {
            this.users.push({
                id: uuid,
                ...user
            })
        },
        delete(id) {
            this.users = this.users.filter(user => user.id !== id);
        }
    }, 
    getters: {
        users
    }
})