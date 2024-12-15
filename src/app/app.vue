<script setup lang="ts">
import MainHeader from "@/shared/ui/main-header.vue";
</script>

<template>
  <div class="flex w-full">
    <!--    <MainAside/>-->
    <div class="flex flex-col w-full">
      <MainHeader />
      <main class="m-3">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
