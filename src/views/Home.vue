<template>
    <div id="viewport">
        <header>
            <div id="circle">
                <img
                    id="self-portrait"
                    src="@/assets/me.jpg"
                    alt="A picture of me"
                />
            </div>
            <div ref="typedStrings">
                <p v-for="value in typedValues" :key="value">{{ value }}</p>
            </div>
            <div id="typing-container">
                <h1>I like to make <span ref="typed"></span></h1>
            </div>
        </header>
        <div id="links">
            <tooltip text="Connect!" position="left">
                <a href="https://www.linkedin.com/in/james-d-tanner/">
                    <img
                        class="connect-icon"
                        src="@/assets/linkedin.png"
                        alt="LinkedIn Logo"
                    />
                </a>
            </tooltip>
            <tooltip text="Checkout my GitHub!" position="top">
                <a href="https://github.com/JamesTann">
                    <img
                        class="connect-icon"
                        src="@/assets/github.png"
                        alt="GitHub Logo"
                    />
                </a>
            </tooltip>
            <tooltip text="Email me!" position="right">
                <a href="mailto:jdt103@comcast.net">
                    <img
                        class="connect-icon"
                        src="@/assets/email.png"
                        alt="Email Logo"
                    />
                </a>
            </tooltip>
        </div>
        <bio-card :left="true" :text="bioCards[0].text">
            <img :src="bioCards[0].image" :alt="bioCards[0].alt" />
        </bio-card>
        <div class="card-container">
            <project-card
                v-for="projectCard in projectCards"
                :title="projectCard.title"
                :text="projectCard.text"
                :url="projectCard.url"
            />
        </div>
        <title-card title="About Me" />
        <bio-card
            v-for="(bio, idx) in bioCards.slice(1)"
            :left="idx % 2 == 0"
            :text="bio.text"
            :key="idx"
        >
            <img :src="bio.image" :alt="bio.alt" />
        </bio-card>
        <title-card title="Skills" />
        <div class="card-container">
            <skill-card
                v-for="skillCard in skillCards"
                :title="skillCard.title"
                :category="skillCard.category"
                :rating="skillCard.rating"
                :text="skillCard.text"
                :url="skillCard.url"
            />
        </div>
        <footer id="footer">
            <a href="https://www.linkedin.com/in/james-d-tanner/">
                <img
                    class="connect-icon"
                    src="@/assets/linkedin.png"
                    alt="LinkedIn Logo"
                />
            </a>
            <h4 id="footer-text">Made by me, for me. 2024</h4>
            <a href="mailto:jdt103@comcast.net">
                <img
                    class="connect-icon"
                    src="@/assets/email.png"
                    alt="Email Logo"
                />
            </a>
        </footer>
    </div>
</template>
<script setup lang="ts">
import TitleCard from "@/components/TitleCard.vue";
import Typed from "typed.js";
import { onMounted, ref } from "vue";
import SkillCard from "@/components/SkillCard.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import BioCard from "@/components/BioCard.vue";
import skills from "@/skills.json";
import projects from "@/projects.json";
import WaveImage from "@/assets/wave.svg";
import EducationImage from "@/assets/education.svg";
import WorkImage from "@/assets/work.svg";
import HikingImage from "@/assets/hiking.svg";
import Tooltip from "@/components/Tooltip.vue";

const typed = ref<HTMLSpanElement>();
const typedStrings = ref<HTMLDivElement>();

const typedValues = [
    "apps",
    "websites",
    "things with wood",
    "web backends",
    "databases",
    "projects happen",
];

const bioCards = [
    {
        text: "Hello! I'm James Tanner. Thanks for stopping by my website! Be sure to also check out the links above to get in touch. This site is written in Vue3 and proudly served to you by a server I wrote in Rust running on a Raspberry Pi.",
        image: WaveImage,
        alt: "Wave",
    },
    {
        text: "I went to Dartmouth and graduated Cum Laude in 2021. I double majored in Computer Science and Asian Societies Cultures and Languages with a concentration in Mandarin. I also studied abroad at Beijing Normal University (北京师范大学) in the Fall of 2018. I am interested in finding conversation partners in the Boston area to improve.",
        image: EducationImage,
        alt: "School",
    },
    {
        text: "I did several software engineering internships in high school and college at Draper Laboratories, Axcelis Technologies, and Fidelity Investments. I also interned at MITRE and joined full time upon graduating college. I spent two years at MITRE where I honed skills in full stack web dev, dev ops, and task leadership. I currently serve as Vice President of Software Engineering at Krevera. Please see <a href='https://www.linkedin.com/in/james-d-tanner/'>my LinkedIn</a> for my complete work history.",
        image: WorkImage,
        alt: "Work",
    },
    {
        text: "In my free time, I enjoy smaller scale woodworking and DIY projects with electronics. Sustainability is something I am especially passionate about, and zero waste is a life goal for me. When I'm not inside, I like hiking and camping and my next mission is to visit national parks in all 50 states.",
        image: HikingImage,
        alt: "Hiking",
    },
];

const skillCards = ref(skills.sort((a, b) => b.rating - a.rating));
const projectCards = ref(projects);

onMounted(() => {
    if (typed.value)
        new Typed(typed.value, {
            stringsElement: typedStrings.value,
            loop: true,
            cursorChar: "_",
            backDelay: 1500,
            typeSpeed: 25,
            backSpeed: 25,
        });
});
</script>

<style scoped>
#viewport {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1260px;
}
#footer {
    background-color: #3d5a80;
    color: #e0fbfc;
    border-radius: 1em;
    padding: 0.4em;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}
#footer-text {
    margin: 0 1em;
}
#self-portrait {
    width: 100%;
}
#circle {
    border-color: #3d5a80 #ee6c4d;
    border-image: none;
    border-radius: 50% 50% 50% 50%;
    border-style: solid;
    border-width: 20px;
    height: 150px;
    width: 150px;
    overflow: hidden;
    margin: 0.5em auto;
}
#typing-container {
    height: 100px;
}
#links {
    background-color: #e0fbfc;
    border-radius: 1em;
    padding: 0 0.5em;
    margin: 2.5em 0.5em 0.5em 0.5em;
}
#links > * {
    margin: 0.5em;
}
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.connect-icon {
    width: 40px;
    height: 40px;
    vertical-align: top;
    border-radius: 50%;
}
</style>
