import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserRefsStore = defineStore("userInputs", () => {

    const user = ref({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        image: "",
    });

    const message = ref({
        errorFirstname: "",
        errorLastname: "",
        errorEmail: "",
    });

    // const postPageUser = ref({
    //     userPostArea: "",
    //     userProfilPhoto: ""
    // });


    return {
        user,
        message,

    }
});