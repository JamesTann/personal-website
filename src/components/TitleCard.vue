<template>
    <div id="container">
        <h1>{{ props.title }}</h1>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style scoped>
h1 {
    margin: 0;
}
#container {
    background-color: #e0fbfc;
    border-radius: 1em;
    width: 80%;
    margin: 1em;
}
</style>
