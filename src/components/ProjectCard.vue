<template>
    <div id="hover-container">
        <div id="card">
            <h3>{{ props.title }}</h3>
            {{ props.text }}
            <a :href="props.url">
                <button class="link-button">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Check it Out</span>
                </button>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title: string;
    text: string;
    url: string;
}>();
</script>

<style scoped>
h3 {
    margin: 0;
}
#hover-container {
    position: relative;
}
#card {
    width: 320px;
    height: 225px;
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
    margin-top: 6px;
    margin-right: 6px;
    border: 1px solid #cccccc;
}

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
}

button.link-button {
    width: 12rem;
    height: auto;
}

button.link-button .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 2.5rem;
    height: 2.5rem;
    background: #293241;
    border-radius: 1.625rem;
}

button.link-button .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #e0fbfc;
}

button.link-button .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.4725rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.link-button .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #e0fbfc;
    border-right: 0.125rem solid #e0fbfc;
    transform: rotate(45deg);
}

button.link-button .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.3rem;
    color: #293241;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #e0fbfc;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #e0fbfc;
}
</style>
