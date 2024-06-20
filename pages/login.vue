<template>
  <div>
    <button @click="submit">Login</button>
  </div>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:guest'],
});

import { ref } from 'vue';

const { login } = useSanctumAuth();

const submit = () => {
  login({
    email: "test@example.com",
    password: "password",
  });
};

</script>
