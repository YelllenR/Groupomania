import { defineStore } from "pinia";

export const usePosts = defineStore("posts", {
    state: () => {
        return {
            posts: []
        }
    },
    actions: {
        create(post) {
            this.post.push({
            // Get the id of the user
            // Get the implement the post on his post list
            })
        },
        delete(id) {
            this.posts = this.posts.filter(user => user.id !== id);
        }
    }, 
    getters: {
        // 
    }
})