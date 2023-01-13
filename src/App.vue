<template>
    <router-view></router-view>
</template>
<script setup lang="ts"></script>
<style>
body {
    background-image: url("@/assets/layered-waves-haikei.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    margin: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    color: #293241;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
