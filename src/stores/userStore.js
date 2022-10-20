

import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid'




export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: []
    }),
    actions: {
        Create(user) {
            this.user.push({
                userId: uuid(),
                ...user,
            })

            const fd = new FormData();
            fd.append('user', this.user)
            
            console.log(fd)


        },
        //    async SendData() {
        //         const response = await fetch('http://localhost:3000/Groupomania/create-account', {
        //             method: "POST",
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(Create(user))
        //         })
        //         return  response.json()
        //     }
        // upload(user) {
        //     const fd = new FormData();


        //     // fetch('http://localhost:3000/Groupomania/create-account', {
        //     //     method: "POST",
        //     //     headers: { 'Content-Type': 'application/json' },
        //     //     body: JSON.stringify(fd)
        //     // })
        //     // .then((response) => console.log(response))
        // }
    }


});

