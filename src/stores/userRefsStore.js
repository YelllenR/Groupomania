import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserRefsStore = defineStore("userInputs", () => {

    const user = ref({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        image: "", 
        user: window.user
    });

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