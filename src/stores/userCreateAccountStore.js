
import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'


export const useUserCreationStore = defineStore("userStore", {
    state: () => {
        const userInputs = useUserRefsStore();
        const { user } = storeToRefs(userInputs);

        return {
            user
        }
    },

    actions: {
        Create(user) {

            const formData = new FormData();

            formData.append('firstname', this.user.firstname)
            formData.append('lastname', this.user.lastname)
            formData.append('email', this.user.email)
            formData.append('password', this.user.password)
            formData.append('image', this.user.image)



            fetch('http://localhost:3000/Groupomania/auth/create-account', {
                method: 'POST',
                body: formData,
                redirect: 'follow'
            })

                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.log("Oh no error", error))
        },

    },

});

