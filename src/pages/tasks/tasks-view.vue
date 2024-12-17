<script setup lang="ts">
import {ref} from "vue";
import {addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, format} from "date-fns";
import SchedulerItem from "@pages/tasks/scheduler-item.vue";

interface ISchedulerDay {
  date: Date | string;
  tasks: []
}

const weeks = ref<ISchedulerDay[][]>([]);
const dateData = ref({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
});


const dailyTasks = new Map()
// возвращать данные с бека в таком формате
dailyTasks.set(new Date(),  [
  {
    text: 'test',
    id: 'sds141'
  },
  {
    text: 'test2',
    id: 'sds141'
  }
])



const initDate = (year: number, month: number) => {
  const result: ISchedulerDay[][] = []
  const firstDayOfMonth = startOfMonth(new Date(year, month - 1));
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  // Находим начало и конец календаря
  const calendarStart = startOfWeek(firstDayOfMonth, {weekStartsOn: 1});
  const calendarEnd = endOfWeek(lastDayOfMonth, {weekStartsOn: 1});

  // Итерация по всем дням календарного диапазона
  let currentDate: ISchedulerDay = {date: calendarStart, tasks:[]};
  while (currentDate.date <= calendarEnd) {

    // const week: ISchedulerDay[] = [];
    // for (let i = 0; i < 7; i++) {
      result.push(currentDate);
      currentDate['date'] = addDays(currentDate.date, 1);

    // }
    result.push(week);
  }

  weeks.value = result
};

const initTasks = () => {

}

initDate(dateData.value.year, dateData.value.month);
</script>

<template>
  <section>
    <h1>Tasks</h1>
    <article>
      <div>{{ format(new Date(), 'MMMM') }}</div>
      <div class="flex flex-col rounded border border-state-500 divide-y divide-state-500">
        <div class="flex divide-x  divide-state-500" v-for="(week, index) in weeks">
          <SchedulerItem
              v-for="day in week"
              :key="day"
              :showWeekDay="!index"
              :day="day"
          />
        </div>
      </div>

    </article>
  </section>
</template>

<style scoped>

</style>
