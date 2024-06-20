<template>
  <div class="bg-dark-grey w-[100vw] h-[100vh] flex items-start">
    <guilds />
    <channels />
    <chat />
  </div>
</template>

<script>
import Guilds from "@/components/main-screen/guilds.vue";
import Channels from "@/components/main-screen/channels.vue";
import Chat from "@/components/main-screen/chat.vue";

export default {
  setup() {
    definePageMeta({
      middleware: ["sanctum:auth"],
    });
  },
  components: {
    Guilds,
    Channels,
    Chat,
  },
};
</script>
