<template>
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
      class="transition ease-in-out w-12 h-12 rounded-full hover:rounded-xl cursor-pointer hover:shadow-xl bg-grey text-center text-4xl"
      title="Join a guild!"
    >
      <span class="text-teal">+</span>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

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
