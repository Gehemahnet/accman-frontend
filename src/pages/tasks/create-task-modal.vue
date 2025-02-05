<script setup lang="ts">

import { Button, DatePicker, Dialog, InputText, Textarea } from "primevue";
import { ref } from "vue";
import { Task } from "@pages/tasks/types";

const { modalProps } = defineProps<{
  modalProps: Task
}>();
const emits = defineEmits<{ createTask: [Task] }>();
const isVisible = defineModel<boolean>();

const task = ref({ ...modalProps });


const createTask = () => {
  emits("createTask", task.value);
};

const close = () => {
  isVisible.value = false;
};

</script>

<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    header="Create Task"
    class="w-1/3"
    @close="close"
  >
    <form class="flex flex-col gap-4">
      <InputText
        v-model="task.name"
        placeholder="Title"
      />
      <!--      Не показывается пропсовое значение-->
      <DatePicker
        v-model="task.date"
        placeholder="Date"
      />
      <Textarea
        v-model="task.description"
        placeholder="Description"
        class="min-h-12"
      />
      <div>
        <Button @click="createTask">
          Create
        </Button>
      </div>
      <!-- Добавить сценарий точного времени/промежутка-->
    </form>
  </Dialog>
</template>

<style scoped>

</style>