<script setup lang="ts" >
import {ref, computed} from 'vue';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths
} from 'date-fns';
import SchedulerItem from "@pages/tasks/scheduler-item.vue";

const targetDate = ref(new Date());
const currentMonth = ref(targetDate.value.getMonth());
const currentYear = ref(targetDate.value.getFullYear());
const daysOfWeek = ref(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']);

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

const firstDayOfCurrentMonth = computed(() => startOfMonth(new Date(currentYear.value, currentMonth.value, 1)));
const lastDayOfCurrentMonth = computed(() => endOfMonth(new Date(currentYear.value, currentMonth.value, 1)));
const startOfCalendar = computed(() => startOfWeek(firstDayOfCurrentMonth.value, {weekStartsOn: 1})); // Понедельник
const endOfCalendar = computed(() => endOfWeek(lastDayOfCurrentMonth.value, {weekStartsOn: 1}));

const weeks = computed(() => {
  const weeksArray = [];
  let currentWeek = [];
  daysInMonth.value.forEach((day, index) => {
    currentWeek.push(day);
    if ((index + 1) % 7 === 0) {
      weeksArray.push(currentWeek);
      currentWeek = []
    }
  })
  if (currentWeek.length > 0) {
    weeksArray.push(currentWeek);
  }

  return weeksArray;
})

const daysInMonth = computed(() => {
  const interval = eachDayOfInterval({start: startOfCalendar.value, end: endOfCalendar.value});
  return interval.map(day => ({
    date: day,
    tasks: []
  }));
});

const openYear = (date) => {
 // Открываем компонент текущего годового календаря с 12 месяцами
}
const openWeek = (week: []) => {
  // Открываем компонент недельного календаря присвоив в переменную для недели переданный аргумент
}

const previousMonth = () => {
  currentDate.value = subMonths(currentDate.value, 1);
  currentMonth.value = currentDate.value.getMonth();
  currentYear.value = currentDate.value.getFullYear();
}

const nextMonth = () => {
  currentDate.value = addMonths(currentDate.value, 1);
  currentMonth.value = currentDate.value.getMonth();
  currentYear.value = currentDate.value.getFullYear();
}

const selectDay = (day) => {
  if (day) {
    console.log(`Выбран день: ${day}`);
  }
}
</script>

<template>
  <section>
    <h1>Tasks</h1>
    <article>

      <div class="flex flex-col">
        <div class="flex justify-around">
          <div class="w-1/12 flex items-center justify-center" @click="openYear">{{ format(targetDate, 'MMMM') }}</div>
          <div class="flex border rounded-t-lg  w-11/12 divide-x divide-state-500">
            <div v-for="day in daysOfWeek" :key="day" class=" flex-1 p-2">
              {{ day }}
            </div>
          </div>

        </div>
        <div v-for="(week, index) in weeks" class="flex g-1  ">
          <button class="w-1/12" @click="openWeek(week)">{{ `${index + 1} week` }}</button>
          <div class="
          flex justify-around flex-1
          divide-x divide-state-500
          border-state-500
          border-x
          border-collapse
          "
          :class="{
            'border-t': index !== 0,
            'border-b': index === weeks.length - 1,
            'rounded-b-lg': index === weeks.length - 1

          }">

            <SchedulerItem
                v-for="day in week"
                :key="day"
                :day="day"
            />
          </div>
        </div>


      </div>

    </article>
  </section>
</template>
<style scoped/>

<!--<script setup lang="ts">-->
<!--import {computed, ref} from "vue";-->
<!--import {-->
<!--  addDays,-->
<!--  endOfMonth,-->
<!--  endOfWeek,-->
<!--  startOfMonth,-->
<!--  startOfWeek,-->
<!--  format,-->
<!--  eachDayOfInterval,-->
<!--  addMonths-->
<!--} from "date-fns";-->
<!--import SchedulerItem from "@pages/tasks/scheduler-item.vue";-->

<!--interface ISchedulerDay {-->
<!--  date: Date | string;-->
<!--  tasks: []-->
<!--}-->

<!--enum ScheduleTypes {-->
<!--  daily,-->
<!--  weekly,-->
<!--  monthly,-->
<!--  year,-->
<!--}-->

<!--const targetDate = ref(new Date());-->
<!--const scheduleType = ref<ScheduleTypes>(ScheduleTypes.monthly);-->

<!--const targetDateData = computed(() => ({-->
<!--  year: targetDate.value.getFullYear(),-->
<!--  month: targetDate.value.getMonth() + 1-->
<!--}));-->

<!--const weeks = ref<ISchedulerDay[][]>([]);-->

<!--// const dailyTasks = new Map()-->
<!--// // возвращать данные с бека в таком формате-->
<!--// dailyTasks.set(new Date(),  [-->
<!--//   {-->
<!--//     text: 'test',-->
<!--//     id: 'sds141'-->
<!--//   },-->
<!--//   {-->
<!--//     text: 'test2',-->
<!--//     id: 'sds141'-->
<!--//   }-->
<!--// ])-->


<!--const initMonthlySchedule = () => {-->
<!--  const startDate = startOfMonth(targetDate.value);-->
<!--  const endDate = endOfMonth(targetDate.value);-->
<!--  weeks.value =  eachDayOfInterval({start: startDate, end: endDate});-->
<!--}-->


<!--initMonthlySchedule();-->
<!--</script>-->



