<template>
    <HeaderVue />
    <router-view></router-view>
    <FooterVue />
</template>

<script setup>
import { RouterView } from 'vue-router'
import FooterVue from './components/Footer.vue';
import HeaderVue from './components/Header.vue';
import { useStore } from 'vuex';
import Constant from './Constant';


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const store = useStore();

if (localStorage.getItem(('token'))) {

    store.dispatch(`user/${Constant.INITIALIZE_PROFILE}`);
}  
</script>




