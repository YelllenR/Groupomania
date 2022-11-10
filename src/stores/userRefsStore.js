import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserRefsStore = defineStore("userInputs", () => {
    /**
     * reference a user with the different information
     */
    const user = ref({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        image: "",
    });

    /**
     * reference the error messages to be rendered
     */
    const message = ref({
        errorFirstname: "",
        errorLastname: "",
        errorEmail: "",
    });


    return {
        user,
        message,
  
    }
});