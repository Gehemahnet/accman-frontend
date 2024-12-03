<script setup lang="ts">
import {MenuItem} from "primevue/menuitem";
import Menu from 'primevue/menu';

const menuItems: MenuItem[] = [
  {route: 'finances', title: 'Finances'},
  {route: 'tasks', title: 'Tasks'}
]
</script>

<template>
  <aside>
    <h4>Logo placeholder</h4>
    <Menu :model="menuItems">
      <template #item="{item}">
        <router-link class="flex w-full" :to="item.route">
          {{ item.title }}
        </router-link>
      </template>
    </Menu>
  </aside>
</template>

<style scoped>

</style>