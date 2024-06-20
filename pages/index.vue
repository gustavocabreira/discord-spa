<template>
  <div class="ml-8 text-4xl font-bold">{{ user.name }}</div>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
});
const { user } = useSanctumAuth();
</script>
