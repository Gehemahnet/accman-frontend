<script setup lang="ts">
import { ref, computed } from "vue";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths
} from "date-fns";
import CalendarMonthly from "@pages/tasks/calendar/calendar-monthly.vue";
import { DatePicker, InputText, Textarea, Dialog, Button } from "primevue";
import type { CalendarType } from "@pages/tasks/calendar/calendar.types";


const targetDate = ref(new Date());
const typeOfCalendar = ref<CalendarType>("month");

const isModalVisible = ref(false);
const modalProps = ref<{
  uuid?: string;
  time?: string;
  name: string;
  date: Date | string;
  description: string;
} | null>(null);

const calendarComponent = computed(() => CalendarMonthly);

const currentMonth = computed(() => targetDate.value.getFullYear());
const currentYear = computed(() => targetDate.value.getFullYear());

const setTypeOfCalendar = (type: CalendarType) => {
  typeOfCalendar.value = type;
};

const setModalVisibility = (statement: boolean) => {
  isModalVisible.value = statement;
  modalProps.value = statement
      ?
      { name: "", date: new Date(), description: "" }
      :
      null;
};

const openWeek = (week: unknown[]) => {
  // Открываем компонент недельного календаря присвоив в переменную для недели переданный аргумент
};

const createTask = () => {

};

// const previousMonth = () => {
//   currentDate.value = subMonths(currentDate.value, 1);
//   currentMonth.value = currentDate.value.getMonth();
//   currentYear.value = currentDate.value.getFullYear();
// };
//
// const nextMonth = () => {
//   currentDate.value = addMonths(currentDate.value, 1);
//   currentMonth.value = currentDate.value.getMonth();
//   currentYear.value = currentDate.value.getFullYear();
// };

// const selectDay = (day) => {
//   if (day) {
//     console.log(`Выбран день: ${day}`);
//   }
// };
</script>

<template>
  <section>
    <h1>Tasks</h1>
    <div class="flex">
      <button @click="setModalVisibility(true)">
        Create Task
      </button>
    </div>
    <component
      :is="calendarComponent"
      :target-date
      :current-month
      :current-year
      @set-calendar-type="setTypeOfCalendar"
    />
    <Dialog
      v-model:visible="isModalVisible"
      modal
      header="Create Task"
      class="w-1/3"
    >
      <form class="flex flex-col gap-4">
        <InputText
          v-model="modalProps.name"
          placeholder="Title"
        />
        <DatePicker
          v-model="modalProps.date"
          placeholder="Date"
        />
        <Textarea
          v-model="modalProps.description"
          placeholder="Description"
          class="min-h-12"
        />
        <div>
          <Button @click="createTask" />
        </div>
        <!-- Добавить сценарий точного времени/промежутка-->
      </form>
    </Dialog>
  </section>
</template>
<style scoped />

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
<!--import SchedulerItem from "@pages/tasks/calendar-day-item.vue";-->

<!--interface ISchedulerDay {-->
<!--  date: Date | string;-->
<!--  tasks: []-->
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



