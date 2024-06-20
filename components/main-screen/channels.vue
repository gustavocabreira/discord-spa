<template>
  <div
    class="grow flex flex-col justify-between h-[100vh] border-l border-r pt-2 px-5 border-grey"
  >
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
</template>

<script setup>
const { user } = useSanctumAuth();
</script>
