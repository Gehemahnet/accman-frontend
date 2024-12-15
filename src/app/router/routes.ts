import { RouteRecordRaw } from "vue-router";
import { Routes, routePaths } from "@shared/router";

const HomeView = () => import("@pages/home/home-view.vue");

const FinancesView = () => import("@pages/finances/finances-view.vue");

const TasksView = () => import("@pages/tasks/tasks-view.vue");

const ProfileView = () => import("@pages/profile/profile-view.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: routePaths[Routes.finances],
    name: Routes.finances,
    component: FinancesView,
  },
  {
    path: routePaths[Routes.tasks],
    name: Routes.tasks,
    component: TasksView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

export default routes;
