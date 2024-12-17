<script setup lang="ts">

import {format, isToday} from "date-fns";

defineProps<{showWeekDay: boolean, day: any}>()
</script>

<template>
  <div :class="{
              'bg-stone-500': isToday(day.date)
            }"
       class="flex flex-col flex-1 p-2">
    <div v-if="showWeekDay"> {{ format(day.date, 'EEEE') }}</div>
    <div>{{ format(day.date, 'dd') }}</div>
    <div></div>
  </div>
</template>

<style scoped>

</style>