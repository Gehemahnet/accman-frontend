<script setup lang="ts">
import { ref } from "vue";
import {addDays, endOfMonth, endOfWeek,startOfMonth, startOfWeek, format} from "date-fns";

const weeks = ref<Date[][]>([]);

const dateData = ref({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
});

const initDate = (year: number, month: number) => {
  const result: Date[][] = []
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  // Находим начало и конец календаря
  const calendarStart = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(lastDayOfMonth, { weekStartsOn: 1 });

  // Итерация по всем дням календарного диапазона
  let currentDate = calendarStart;
  while (currentDate <= calendarEnd) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    result.push(week);
  }

  weeks.value = result

};

initDate(dateData.value.year, dateData.value.month);
</script>

<template>
  <section>
    <h1>Tasks</h1>
    <article class="flex flex-col">
      <div class="flex" v-for="(week, index) in weeks">
        <div class="flex" v-if="!index"><div v-for="weekDay in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']">{{weekDay}}</div></div>
        <div v-for="day in week">
          {{ format(day, 'dd') }}
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>
