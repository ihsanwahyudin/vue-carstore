import { createWebHistory, createRouter } from "vue-router";

// layouts

import Admin from "../layouts/Admin.vue";
import Auth from "../layouts/Auth.vue";

// views for Admin layout

import Dashboard from "../views/admin/Dashboard.vue";
import Settings from "../views/admin/Settings.vue";
import Tables from "../views/admin/Tables.vue";
import Maps from "../views/admin/Maps.vue";
import Cars from "../views/admin/Cars.vue";
import Transaction from "../views/admin/Transaction.vue";

// views for Auth layout

import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

// views without layouts

import Landing from "../views/Landing.vue";
import Profile from "../views/Profile.vue";
import Index from "../views/Index.vue";
import Store from "../views/Store.vue";
import DetailCar from "../views/DetailCar.vue";

// routes



const routes = [
  {
    path: "/admin",
    redirect: "/admin/cars",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/cars",
        component: Cars,
      },
      {
        path: "/admin/transaction",
        component: Transaction,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/store",
    component: Store,
  },
  {
    path: "/store/:kodemobil",
    component: DetailCar,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;