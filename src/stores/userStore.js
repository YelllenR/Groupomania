
import { defineStore } from "pinia";


const FormatHeader = () => {
    const formHeader = new Headers();
    formHeader.append("Content-type", "application/json")

    const request = new Request('http://localhost:3000/Groupomania/login', {
        headers: formHeader,
        method: "POST",
        body: JSON.stringify(lastname, firstname, email, password, image)
    })

    return request;
};

export const useUserStore = defineStore("userStore", {

    state: () => ({
        user: []
    }),
    actions: {
        create(user){
            this.user.push({
                userId: uuid(), 
                ...user,
            })
        }
    }


});

