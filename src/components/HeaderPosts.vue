<template>
    <div id="postHeader">
        <nav class="navChoices">
            <i class="fas fa-bars userInfos"></i>
            <UsersInfos></UsersInfos>
        </nav>

        <img class="logo-post" src="../assets/Logo-Name.svg" alt="Groupomania" />
        <img class="logo-theme-color" src="../assets/Logo-sphere.svg" alt="Groupomania" />
    </div>

</template>

<script setup>
import { defineComponent } from 'vue';
import UsersInfos from '../components/UserInfos.vue';

const components = defineComponent({
    UsersInfos,
});
</script>