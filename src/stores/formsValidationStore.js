import { defineStore } from "pinia";
import { useAttrs } from "vue";
import { v4 as uuid } from 'uuid'


// const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

// const firstnameRegex = /^[a-zA-Z][A-zÀ-ú]{0,40}$/;
// const lastnameRegex = /[a-zA-Z][A-zÀ-ú]+$/;


export const useFormValidations = defineStore("validationsStore", {
   
    state: () => ({
        user: []
    }),
    actions: {
        create(user){
            this.user.push({
                userId: uuid(), 
                ...user,
            })
        },
    }

});