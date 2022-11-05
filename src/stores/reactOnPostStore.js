
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";


export const useReactionPost = defineStore("usersReactions", {
    state: () => {
        return {
            reactions: ref({
                postId: "",
                like: 0,
                dislike: 0,
                comment: "",
                userId: "",
                commentId: ""
            })
        }
    },

    actions: {
        incrementLikes(post) {
            const data = post;

            if (data.idOfPost) {
                this.reactions.postId = data.idOfPost;
            }

            if (this.reactions.like === 1) {
                this.reactions.like = 0;
                console.log(this.reactions.like, "+")
            } else {
                this.reactions.like = 1;
                console.log(this.reactions.like, "-")
            }
        },

        incrementDislikes(post) {
            const data = post;

            if (data.idOfPost) {
                this.reactions.postId = data.idOfPost;
            }

            if (this.reactions.dislike === 1) {
                this.reactions.dislike = 0;
                console.log(this.reactions.dislike, "+")
            } else {
                this.reactions.dislike = 1;
                console.log(this.reactions.dislike, "-")
            }

        },

        commentOnPost(post) {
            let comment = true;
            comment = !comment;
            console.log("clicked")
            // const data = post;
            // if (data.idOfPost) {
            //     this.reactions.postId = data.idOfPost;
            // }

            // if (comment) {
            //     this.reactions.comment = "";
            //     this.reactions.commentId = Math.floor(Math.random());
            //     this.reactions.userId = data.idOfUser;
            // }



        }
    }

})