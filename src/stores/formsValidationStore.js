import { defineStore } from "pinia";

const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

export const useFormValidations = defineStore("formValidationsStore", {
    state: () => {
        return {
            validation: useStorage('formValidationsStore', {
                email: true,
                password: true
            }),
        }
    },
    actions: {
        checkInput() {
            if(this.validation.email != emailRegex.test){
                return console.log("an error occured");
            }
            if(this.validation.password === ""){
                return console.log("password is empty");
            }
        }
    }

})