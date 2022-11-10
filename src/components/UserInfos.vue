<template >
    <div id="userDetails">
        <button class="logOutButton" @click.prevent="logOut()">
            <router-link :to="{ path: '/' }">Deconnexion</router-link>
        </button>

    </div>

</template>
<script>
export default {
    name: "UserInfos"
}

</script>

<script setup>
import { useUserInfosStore } from '../stores/userInfosStore';
import { storeToRefs } from 'pinia';

import { useUserLogin } from '../stores/userLogin';

const userLogin = useUserLogin();

const userInfos = useUserInfosStore();
const { userData } = storeToRefs(userInfos);

// logout function to clear the localstorage after logging out
function logOut() {
    userLogin.LogsOfUser;
    localStorage.clear()
}

</script>


