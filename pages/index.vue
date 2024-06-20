<template>
  <div class="">{{ user.name }}</div>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
});
const { user } = useSanctumAuth();
</script>
