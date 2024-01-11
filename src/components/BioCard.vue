<template>
    <div id="bio-container">
        <div v-if="!props.left" v-html="props.text"></div>
        <div
            id="icon-container"
            :class="{ left: props.left, right: !props.left }"
        >
            <div class="ripple"></div>
            <div class="ripple"></div>
            <div id="icon">
                <slot></slot>
            </div>
        </div>
        <div v-if="props.left" v-html="props.text"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ left: boolean; text: string }>();
</script>

<style scoped>
#bio-container {
    background: #e0fbfc;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
    padding: 1em;
    margin: 6px 8px;
    top: 0;
    right: 0;
    transition-duration: 0.3s;
    transition-property: top, right, box-shadow;
    transition-timing-function: ease-out;
    text-align: left;
}

#bio-container:hover {
    box-shadow: -4px 8px 12px rgba(38, 38, 38, 0.2);
    top: -6px;
    right: -4px;
    margin-top: 4px;
    margin-right: 6px;
    border: 1px solid #cccccc;
}

#icon-container {
    background: #98c1d9;
    border-radius: 50%;
    padding: 9px;
    align-items: center;
    justify-content: center;
    display: none;
}
.left {
    margin-right: 1em;
}
.right {
    margin-left: 1em;
}
#icon {
    display: flex;
    z-index: 3;
}
#bio-container:hover .ripple {
    animation: ripple 1.5s infinite;
}
.ripple {
    position: absolute;
    background: #98c1d9;
    border-radius: 50%;
    z-index: 1;
}
#bio-container:hover .ripple:nth-child(1) {
    animation-delay: 200ms;
}

#bio-container:hover .ripple:nth-child(2) {
    animation-delay: 500ms;
}

@keyframes ripple {
    0% {
        width: 65px;
        height: 65px;
        opacity: 1;
    }
    100% {
        width: 90px;
        height: 90px;
        opacity: 0;
    }
}
@media (min-width: 576px) {
    #icon-container {
        display: flex;
    }
}
@media (min-width: 992px) {
    #bio-container {
        width: 80%;
    }
}
</style>
