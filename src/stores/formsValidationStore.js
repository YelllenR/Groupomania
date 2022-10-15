import { defineStore } from "pinia";

const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

export const useFormValidations = defineStore("validationsStore", {
    state: () => {
        return {
            email: "",
            password: ""
        }
    },
    actions: {

    },

});