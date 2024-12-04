<script setup lang="ts">
import MainAside from "@/shared/ui/main-aside.vue"
import MainHeader from "@/shared/ui/main-header.vue"
</script>

<template>
  <div class="flex w-full">
    <!--    <MainAside/>-->
    <div class="flex flex-col w-full">
      <MainHeader />
      <main>
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
