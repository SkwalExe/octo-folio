<script setup>
    const { url } = defineProps(["url"]);
    import Badge from "./Badge.vue";
</script>

<template>
    <Badge
        :text="`See on Github`"
        icon="fa-github"
        :link="url"
    />
</template>
