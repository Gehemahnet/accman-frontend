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
    <Menu :model="menuItems">
      <template #item="{item}">
        <router-link :to="item.route">
          {{ item.title }}
        </router-link>
      </template>
    </Menu>
  </aside>
</template>

<style scoped>

</style>