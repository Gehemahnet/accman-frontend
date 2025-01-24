<script setup lang="ts">

import {format, isToday} from "date-fns";

defineProps<{ day: any}>();
</script>

<template>
  <div
    :class="{
      'bg-stone-500': isToday(day.date)
    }"
    class="flex flex-col flex-1 p-2"
  >
    <div>{{ format(day.date, 'dd') }}</div>
    <div />
  </div>
</template>

<style scoped>

</style>