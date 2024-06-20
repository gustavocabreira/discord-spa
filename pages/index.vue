<template>
  <div class="bg-dark-grey w-[100vw] h-[100vh] flex items-start">
    <div class="w-16 flex flex-col items-center gap-4 px-5 pt-2 h-[100vh]">
      <div v-if="guilds.length">
        <div
          v-for="(guild, index) in guilds"
          :key="index"
          :style="getStyle(guild)"
          class="w-12 h-12 rounded-xl cursor-pointer hover:shadow-xl transition ease-in-out"
          :title="guild.name"
        ></div>
      </div>
      <div
        class="w-12 h-12 rounded-xl cursor-pointer hover:shadow-xl transition ease-in-out bg-grey text-center text-4xl"
        title="Join a guild!"
      >
        <span class="text-teal">+</span>
      </div>
    </div>

    <div class="grow flex flex-col justify-between h-[100vh] border-l border-r pt-2 px-5 border-grey">
      <div>oi</div>
      <div class="border-t py-2 flex items-center gap-4 border-grey">
        <div>
          <div class="rounded-full w-[40px] h-[40px] bg-grey"></div>
        </div>
        <div>
          <p class="text-white">{{ user.name }}</p>
          <p class="text-white text-xs">Disponível</p>
        </div>
      </div>
    </div>
    <div class="grow-[8] px-5">content</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  middleware: ["sanctum:auth"],
});

const { user } = useSanctumAuth();
const client = useSanctumClient();

const guilds = ref([]);

const getGuilds = async () => {
  try {
    const { data } = useAsyncData("guilds", () => client("/api/guilds"));
    guilds.value = data;
  } catch (error) {
    console.error("Error fetching guilds:", error);
  }
};

const getStyle = (guild) => {
  if (!guild) return {};

  return {
    "background-image": `url('${guild.logo_path}')`,
  };
};

onMounted(() => {
  getGuilds();
});
</script>
