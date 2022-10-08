import { defineStore } from "pinia";



export const useReactionPost = defineStore("reactions", {
    state: () => {
        return {
            reactions: []
        }
    },
    // actions: {
    //     create(user) {
    //         this.users.push({
    //             id: uuid,
    //             ...user
    //         })
    //     },
    //     delete(id) {
    //         this.users = this.users.filter(user => user.id !== id);
    //     }
    // }, 
    // getters: {
    //     users
    // }
})