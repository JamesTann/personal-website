<template>
    <div id="tooltip">
        <slot></slot>
        <small
            id="tooltiptext"
            :class="{
                top:
                    position != 'left' &&
                    position != 'right' &&
                    position != 'bottom',
                bottom: position == 'bottom',
                left: position == 'left',
                right: position == 'right',
            }"
            >{{ props.text }}</small
        >
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{ text: string; position: string }>();
</script>

<style scoped>
#tooltip {
    position: relative;
    display: inline-block;
}

#tooltiptext {
    visibility: hidden;
    background-color: #293241;
    color: #e0fbfc;
    text-align: center;
    border-radius: 6px;
    padding: 6px;
    position: absolute;
    z-index: 1;
}
.top {
    width: 150px;
    bottom: 115%;
    left: 50%;
    margin-left: -81px;
}
.bottom {
    width: 200px;
    top: 90%;
    left: 50%;
    margin-left: -106px;
}
.right {
    width: 75px;
    top: 2px;
    left: 115%;
}
.left {
    top: 2px;
    right: 115%;
}
#tooltiptext::after {
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
}

.top::after {
    content: "";
    top: 100%;
    left: 50%;
    border-color: #293241 transparent transparent transparent;
}
.bottom::after {
    content: "";
    bottom: 100%;
    left: 50%;
    border-color: transparent transparent #293241 transparent;
}
.right::after {
    content: " ";
    top: 40%;
    right: 100%;
    border-color: transparent #293241 transparent transparent;
}

.left::after {
    content: " ";
    top: 40%;
    left: 107%;
    border-color: transparent transparent transparent #293241;
}

#tooltip:hover #tooltiptext {
    visibility: visible;
}
</style>
