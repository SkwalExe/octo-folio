<script setup>
    import SearchBox from "@/components/SearchBox.vue";
    import { onMounted, ref } from "vue";
    const emit = defineEmits("filter");

    const filter = text => emit("filter", text);
    const transparent = ref(true);

    const onDocumentScroll = () => {
        if (window.scrollY === 0) transparent.value = true;
        else transparent.value = false;
    };

    onMounted(() => {
        window.addEventListener("scroll", onDocumentScroll);
        onDocumentScroll();
    });
</script>

<template>
    <div :class="{ 'nav-container': true, 'transparent': transparent }">
        <nav>
            <div class="left">
                <p class="title">My Projects</p>
            </div>

            <div class="right">
                <SearchBox @filter="filter" />
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .nav-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: fixed;
        padding: 0 25px;
        top: 0;
        left: 0s;
        z-index: 10;
        backdrop-filter: blur(10px);
        transition-duration: 500ms;
    }

    .nav-container:not(.transparent) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    .title {
        cursor: pointer;
        user-select: none;
        display: inline;
        color: var(--accent-color);
    }

    nav {
        max-width: 1500px;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    nav > div {
        flex: 1;
    }

    .right {
        display: flex;
        justify-content: end;
    }
</style>
