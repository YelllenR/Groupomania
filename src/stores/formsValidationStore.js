import { defineStore } from "pinia";

import { v4 as uuid } from 'uuid'


export const useFormValidations = defineStore("validationsStore", {
    state: () => ({
        formInputs: []
    }),
    actions: {
        CheckEmptyFields(formInputs) {
            this.formInputs = formInputs;
            if (formInputs.value === "" ) {
                alert = "Les champs ne doivent pas être vide";
            }
        }
    }
});