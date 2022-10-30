<template>
    <div id="postHeader">
        <nav class="navChoices" @click="toggleNav()">
            <i class="fas fa-bars userInfos"></i>
            <div class="showNav">
                <UsersInfos v-if="showNavBar"></UsersInfos>
            </div>
        </nav>

        <img class="logo-post" src="../assets/Logo-Name.svg" alt="Groupomania" />
        <img class="logo-theme-color" src="../assets/Logo-sphere.svg" alt="Groupomania" />
    </div>
</template>

<script>
import UsersInfos from '../components/UserInfos.vue';

export default {
    name: "HeaderPosts",

    components: {
        UsersInfos,
    },
    data() {
        return {
            showNavBar: false
        }
    }, 
    methods:{
        toggleNav(){
            this.showNavBar = !this.showNavBar
        }
    }
};

</script>
