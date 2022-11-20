<template>
    <div id="hover-container">
        <a :href="props.url">
            <div id="card">
                <div>
                    <h2>{{ props.title }}</h2>
                    <small>{{ props.category }}</small>
                    <hr />
                    <p>{{ props.text }}</p>
                </div>
                <div id="rating-container">
                    <tooltip
                        v-for="index in props.rating"
                        :key="index"
                        :text="tooltips[index - 1]"
                        position="bottom"
                    >
                        <img src="@/assets/filled-star.svg" />
                    </tooltip>
                    <tooltip
                        v-for="index in 5 - props.rating"
                        :key="index"
                        :text="tooltips[props.rating + index - 1]"
                        position="bottom"
                    >
                        <img src="@/assets/unfilled-star.svg" />
                    </tooltip>
                </div>
            </div>
        </a>
    </div>
</template>
<script setup lang="ts">
import Tooltip from "./Tooltip.vue";

const tooltips = [
    "I have used this only a few times.",
    "I have finished small projects with this.",
    "I have used this extensively in the past but might need a refresher.",
    "I have used this extensively recently.",
    "I am very proficient with this.",
];

const props = defineProps<{
    title: string;
    text: string;
    rating: number;
    category: string;
    url: string;
}>();
</script>

<style scoped>
h2 {
    margin: 0;
}
hr {
    border: 1px solid #293241;
    background-color: #293241;
}
a {
    text-decoration: none;
    color: #293241;
}
#rating-container {
    text-align: center;
}
#hover-container {
    position: relative;
}
#card {
    width: 225px;
    height: 300px;
    position: relative;
    background: #e0fbfc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.5em;
    padding: 1em;
    text-align: left;
    margin: 8px;
    top: 0;
    right: 0;
    transition-duration: 0.3s;
    transition-property: top, right, box-shadow;
    transition-timing-function: ease-out;
}

#card:hover {
    box-shadow: -4px 8px 12px rgba(38, 38, 38, 0.2);
    top: -4px;
    right: -4px;
    margin-top: 4px;
    margin-right: 6px;
    border: 1px solid #cccccc;
}
</style>
