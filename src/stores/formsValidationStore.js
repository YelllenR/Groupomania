import { defineStore, storeToRefs } from "pinia";
import { useUserRefsStore } from './userRefsStore'


const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
const firstnameRegex = /^[a-zA-Z][A-zÀ-ú]{0,40}$/;
const lastnameRegex = /[a-zA-Z][A-zÀ-ú]+$/;


export const useFormValidations = defineStore("formValidation", {

    state: () => {
        const userInputs = useUserRefsStore();
        const { user, message } = storeToRefs(userInputs);

        return {
            user,
            message
        }
    },
    
    actions: {
        validateEmail() {
            if (emailRegex.test(this.user.email.trim(""))) {
                this.message.errorEmail = ""
            } else {
                this.message.errorEmail = "Veuillez respecter la saisie"
            }
        },

        validateFirstname() {
            if (firstnameRegex.test(this.user.firstname.trim(""))) {
                this.message.errorFirstname = ""
            } else {
                this.message.errorFirstname = "Veuillez respecter la saisie"
            }
        },
        validateLastname() {
            if (lastnameRegex.test(this.user.lastname.trim(""))) {
                this.message.errorLastname = ""
            } else {
                this.message.errorLastname = "Veuillez respecter la saisie"
            }
        }
    }
});