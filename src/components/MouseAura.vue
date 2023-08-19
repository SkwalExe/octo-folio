<script setup>
    import { UseMouse } from "@vueuse/components";
    import { onMounted } from "vue";

    const { height, width } = defineProps({
        height: { default: 200 },
        width: { default: 300 }
    });

    // Making the mouse aura stay in place was a headache.
    let currentScroll = 0;
    onMounted(() => {
        window.addEventListener(
            "scroll",
            () => (currentScroll = window.scrollY)
        );
    });

    const toFixed = absScroll => absScroll - currentScroll;
</script>

<template>
    <UseMouse v-slot="{ x, y }">
        <div
            class="mouse-aura"
            :style="{
                top: toFixed(y) - height / 2 + 'px',
                left: toFixed(x) - width / 2 + 'px',
                height: height + 'px',
                width: width + 'px'
            }"
        ></div>
    </UseMouse>
</template>

<style scoped>
    @keyframes rotate {
        from {
            transform: rotateZ(0deg);
            filter: hue-rotate(0deg) blur(120px);
        }

        to {
            transform: rotateZ(360deg);
            filter: hue-rotate(360deg) blur(120px);
        }
    }

    .mouse-aura {
        z-index: 1;
        position: fixed;
        background: linear-gradient(
            90deg,
            rgba(189, 67, 200, 1) 15%,
            rgb(19, 132, 218) 100%
        );
        border-radius: 100%;
        animation-name: rotate;
        animation-duration: 10s;
        animation-delay: 0s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
</style>
