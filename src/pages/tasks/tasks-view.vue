<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from "vue";
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
import { Task } from "@pages/tasks/types";
import { useLocalStorage } from "@/composables";
import type { CalendarType } from "@pages/tasks/calendar/calendar.types";

const CreateTaskModal = defineAsyncComponent(() => import("@pages/tasks/create-task-modal.vue"));

const targetDate = ref(new Date());
const typeOfCalendar = ref<CalendarType>("month");
const isModalVisible = ref(false);
const modalProps = ref<Task| null>(null);

const calendarComponent = computed(() => CalendarMonthly);

const { get, set, has } = useLocalStorage();

const tasks = ref<Task[]>(get<Task[]>("tasks"));

const currentMonth = computed(() => targetDate.value.getFullYear());
const currentYear = computed(() => targetDate.value.getFullYear());

const setTypeOfCalendar = (type: CalendarType) => {
  typeOfCalendar.value = type;
};

const setModalVisibility = (statement: boolean) => {
  isModalVisible.value = statement;
  modalProps.value = statement
      ?
      { uuid: "", name: "", date: new Date(), description: "" }
      :
      null;
};

const openWeek = (week: unknown[]) => {
  // Открываем компонент недельного календаря присвоив в переменную для недели переданный аргумент
};

const createTask = (task: Task) => {
  console.log(task);
  set<Task[]>("tasks",
    has("tasks") ? [ ...get<Task[]>("tasks"), task ] : [ task ]
  );
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
      :tasks
      @set-calendar-type="setTypeOfCalendar"
    />
    <CreateTaskModal
      v-model="isModalVisible"
      :modal-props
      @create-task="createTask"
    />
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



