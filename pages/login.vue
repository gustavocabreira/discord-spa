<template>
  <div
    class="flex items-center justify-center w-[100vw] h-[100vh] bg-dark-grey"
  >
    <form
      class="w-full sm:w-1/2 md:w-1/3 mx-5 md:mx-0 bg-neutral-800 px-7 py-7 rounded-lg shadow-lg gap-4 flex flex-col bg-grey"
      @submit.prevent="submit"
    >
      <div>
        <p class="text-white text-center font-bold text-2xl">
          Boas-vindas de volta!
        </p>
        <p class="text-white text-center text-gray-300 mt-2">
          Estamos muito animados em te ver novamente!
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-white text-xs font-bold text-gray-400"
          >E-MAIL <span class="text-red-500">*</span></label
        >
        <input
          class="h-[40px] bg-dark-grey rounded text-snow px-2"
          v-model="email"
          type="email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-white text-xs font-bold text-gray-400"
          >SENHA <span class="text-red-500">*</span></label
        >
        <input
          class="h-[40px] bg-dark-grey rounded text-snow px-2"
          v-model="password"
          type="password"
        />
        <a href="#" class="text-teal text-md">Esqueceu a sua senha?</a>
      </div>
      <button
        class="btn w-full bg-teal hover:bg-indigo-400 text-white py-3 rounded-md transition ease-in-out"
        type="submit"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  middleware: ["sanctum:guest"],
});

const { login } = useSanctumAuth();

const email = ref("");
const password = ref("");

const submit = async () => {
  try {
    await login({
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    email.value = "";
    password.value = "";
    alert(error.response._data.message ?? error.response._data.error);
  }
};
</script>
