<script setup lang="ts">

import { MenuItem } from "primevue/menuitem";
import { Avatar, Button, Menu, Menubar } from "primevue";
import { ref, useTemplateRef } from "vue";
import { Routes } from "@shared/router";


const profileMenuRef = useTemplateRef<InstanceType<typeof Menu>>("profile-menu");
const navigationMenu = ref<MenuItem[]>([
  { route: Routes.home, label: "Home" },
  { route: Routes.finances, label: "Finances" },
  { route: Routes.tasks, label: "Tasks" }
]);

const profileMenu = ref<MenuItem[]>([
  {
    route: Routes.profile, label: "Profile"
  },
  {
    label: "Log out",
    action() {

    }
  }
]);

const toggleProfileMenu = (statement: Event) => {
  profileMenuRef.value?.toggle(statement);
};
</script>

<template>
  <header class="w-full">
    <Menubar :model="navigationMenu">
      <template #item="{item}">
        <router-link :to="{name: item.route}">
          {{ item.label }}
        </router-link>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <Button>Connect wallet</Button>
          <button
            aria-haspopup="true"
            aria-controls="profile-menu"
            @click="toggleProfileMenu"
          >
            <Avatar
              image="/images/avatar/amyelsner.png"
              shape="circle"
            />
          </button>
          <Menu
            id="profile-menu"
            ref="profile-menu"
            :model="profileMenu"
            popup
          >
            <template #item="{item}">
              <router-link
                v-if="item.route"
                :to="{name: item.route}"
              >
                {{ item.label }}
              </router-link>
              <button
                v-else-if="item.action"
                @click="item.action"
              >
                {{ item.label }}
              </button>
            </template>
          </Menu>
        </div>
      </template>
    </Menubar>
  </header>
</template>

<style scoped>

</style>