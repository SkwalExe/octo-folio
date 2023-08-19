<script setup>
    const { icon, text, link, bg_color, text_color } = defineProps({
        icon: { default: "link" },
        text: { default: "Badge" },
        link: { default: "#" },
        bg_color: { default: "rgba(255, 255, 255, .1)" },
        text_color: { default: "white" }
    });
</script>

<template>
    <a :href="link">
        <p :style="{ backgroundColor: bg_color, color: text_color }">
            <i :class="['fa', icon]"></i>{{ text }}
        </p>
    </a>
</template>

<style scoped>
    p {
        display: inline;
        padding: 2px 5px;
        border-radius: 5px;
        box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    i {
        margin-right: 5px;
    }

    a {
        cursor: pointer;
    }
</style>
