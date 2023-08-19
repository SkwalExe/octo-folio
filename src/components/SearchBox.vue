<script setup>
    const emit = defineEmits(["filter"]);
    import { ref } from "vue";
    const filter = ref("");
</script>

<template>
    <input
        v-model="filter"
        @input="emit('filter', filter)"
        type="text"
        placeholder="Search..."
    />
</template>

<style scoped>
    input {
        background-color: var(--color2);
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 10px;
        width: 100%;
        max-width: 200px;
    }
</style>
