<template>
  <div>{{ user.name }}</div>
</template>

<script setup>
const { user } = useSanctumAuth();
</script>
