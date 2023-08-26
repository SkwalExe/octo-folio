<script setup>
    import repos from "@/../data/repos-cache.json";
    import RepoTile from "@/components/RepoTile.vue";
    import Navbar from "@/components/Navbar.vue";
    import MouseAura from "@/components/MouseAura.vue";
    import settings from "@/../data/settings.js";

    import { ref } from "vue";

    const filter_by = ref("");

    const filter = text => {
        filter_by.value = text.toLowerCase();
    };
</script>

<template>
    <MouseAura v-if="settings.mouse_aura" />

    <Navbar @filter="filter" />
    <main>
        <div
            class="tile-list"
            :style="{ gap: settings.gap_size }"
        >
            <RepoTile
                v-show="
                    repo.name.toLowerCase().includes(filter_by) ||
                    repo.description.toLowerCase().includes(filter_by)
                "
                v-for="repo in repos"
                :key="repo.name"
                :repo="repo"
            />
        </div>
    </main>
</template>

<style scoped>
    main {
        padding-top: 10px;
        width: 100%;
        max-width: 1500px;
        z-index: 8;
    }

    .tile-list {
        display: grid;
        grid-template-columns: repeat(
            auto-fit,
            minmax(100px, min(100%, 400px))
        );
        width: 100%;
        justify-content: center;
    }
</style>
