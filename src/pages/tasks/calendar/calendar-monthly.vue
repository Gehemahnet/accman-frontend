<script setup lang="ts">
import { eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import CalendarDayItem from "@pages/tasks/calendar/calendar-day-item.vue";
import { computed } from "vue";
import { daysOfWeek } from "@pages/tasks/calendar/calendar.constants";
import type { CalendarType } from "@pages/tasks/calendar/calendar.types";

const { targetDate, currentMonth, currentYear } = defineProps<{ targetDate: Date; currentMonth: number; currentYear:number; }>();
const emit = defineEmits<{
  setCalendarType: [year: CalendarType]
}>();

const startOfCalendar = computed(() => startOfWeek(firstDayOfCurrentMonth.value, { weekStartsOn: 1 })); // Понедельник
const endOfCalendar = computed(() => endOfWeek(lastDayOfCurrentMonth.value, { weekStartsOn: 1 }));
const firstDayOfCurrentMonth = computed(() => startOfMonth(new Date(currentYear, currentMonth, 1)));
const lastDayOfCurrentMonth = computed(() => endOfMonth(new Date(currentYear, currentMonth, 1)));

const weeks = computed(() => {
  const weeksArray = [];
  let currentWeek = [];
  daysInMonth.value.forEach((day, index) => {
    currentWeek.push(day);
    if ((index + 1) % 7 === 0) {
      weeksArray.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeksArray.push(currentWeek);
  }

  return weeksArray;
});

const daysInMonth = computed(() => {
  const interval = eachDayOfInterval({ start: startOfCalendar.value, end: endOfCalendar.value });
  return interval.map(day => ({
    date: day,
    tasks: []
  }));
});
</script>

<template>
  <article>
    <div class="flex flex-col">
      <div class="flex justify-around border border-state-500 rounded-t-lg divide-x divide-state-500 ">
        <button
          class="w-1/12 flex items-center justify-center"
          @click="emit('setCalendarType', 'year')"
        >
          {{ format(targetDate, "MMM") }} / {{ format(targetDate, "yyyy") }}
        </button>
        <div class="flex w-11/12 divide-x ">
          <div
            v-for="day in daysOfWeek"
            :key="day"
            class=" flex-1 p-2"
          >
            {{ day }}
          </div>
        </div>
      </div>
      <div
        v-for="(week, index) in weeks"
        :key="index"
        class="flex g-1 border divide-x divide-state-500"
        :class="{
          'border-t': index !== 0,
          'border-b': index === weeks.length - 1,
          'rounded-b-lg': index === weeks.length - 1
        }"
      >
        <button
          class="w-1/12"
          @click="openWeek(week)"
        >
          {{ `${index + 1} week` }}
        </button>
        <div
          class="flex justify-around flex-1 divide-x"
        >
          <CalendarDayItem
            v-for="day in week"
            :key="day"
            :day="day"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>