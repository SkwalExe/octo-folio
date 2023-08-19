<script setup>
    const { repo } = defineProps(["repo"]);
    import ForkBadge from "./ForkBadge.vue";
    import GithubLinkBadge from "./GithubLinkBadge.vue";
    import StarsBadge from "./StarsBadge.vue";
</script>

<template>
    <div class="repo-tile">
        <div class="image-container">
            <img
                :src="repo.image"
                alt="Project Banner"
            />
        </div>
        <div class="text">
            <p class="title">{{ repo.name }}</p>
            <p class="description">{{ repo.description }}</p>
            <div class="badges">
                <StarsBadge :stars="repo.stars" />
                <GithubLinkBadge :url="repo.url" />
                <ForkBadge v-if="repo.fork" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-self: flex-end;
    }

    .title {
        font-size: 20px;
        color: var(--accent-color);
    }

    .repo-tile {
        border-radius: 10px;
        background-color: var(--color2);
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
        transition-duration: 1000ms;
        cursor: crosshair;
        backdrop-filter: blur(50px);
    }

    .repo-tile:hover {
        transform: scale(1.02);
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        aspect-ratio: 2/1;
        width: 100%;
    }

    .text {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .repo-tile img {
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
    }

    .description {
        font-size: 12px;
    }
</style>
