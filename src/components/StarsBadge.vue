<script setup>
    const { stars } = defineProps(["stars"]);
    import Badge from "./Badge.vue";
</script>

<template>
    <Badge
        :text="`${stars} star(s)`"
        icon="fa-star"
        bg_color="rgb(196, 177, 68)"
    />
</template>
