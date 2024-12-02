import { RouteRecordRaw } from "vue-router";

const HomeView = () => import("@pages/home/home-view.vue");

const FinancesView = () => import('@pages/finances/finances-view.vue')

const TasksView = () => import('@pages/tasks/tasks-view.vue')

const routes: RouteRecordRaw[] =  [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/finances',
        name: 'finance-main',
        component: FinancesView
    },
    {
        path: '/tasks',
        name: 'tasks-main',
        component: TasksView
    }
]

export default routes