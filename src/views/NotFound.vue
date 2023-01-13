<template>
    <div id="viewport">
        <title-card title="Whoops!" />
        <div id="container">
            <h2>404: Not Found</h2>
            <h3>
                Looks like you stumbled upon the wrong page, which is confusing
                since this site only has one...😉
            </h3>
        </div>
        <a href="/">
            <div id="back-button">
                <img src="@/assets/backarrow.svg" /><b>Back to Safety</b>
            </div>
        </a>
    </div>
</template>
<script setup lang="ts">
import TitleCard from "@/components/TitleCard.vue";
</script>
<style scoped>
a {
    text-decoration: none;
    color: #293241;
    font-size: larger;
}
#viewport {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1260px;
}
#container {
    background-color: #e0fbfc;
    border-radius: 1em;
    padding: 1em;
    margin: 1em;
}
#back-button {
    background-color: #e0fbfc;
    border-radius: 0.5em;
    padding: 0.5em;
    display: flex;
    align-items: center;
}
</style>
