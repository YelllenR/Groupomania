<template >
    <div id="userDetails">
        <div class="userOwnData">
            <!-- user data in modal here -->

        </div>

        <button class="logOutButton" @click.prevent="logOut">
            <router-link :to="{ path: '/' }">Deconnexion</router-link>
        </button>

    </div>

</template>
<script>
export default{
    name: "UserInfos"
}

</script>

<script setup>
import {useUserInfosStore }from '../stores/userInfosStore';
import { storeToRefs } from 'pinia';


const userInfos = useUserInfosStore();
const { userData } = storeToRefs(userInfos);



</script>


