import { createWebHistory, createRouter } from "vue-router";

// layouts

import Admin from "../layouts/Admin.vue";

// views for Admin layout

import Dashboard from "../views/admin/Dashboard.vue";
import Cars from "../views/admin/Cars.vue";
import Transaction from "../views/admin/Transaction.vue";
import Invoice from "../views/admin/Invoice.vue";
import UserManagement from "../views/admin/UserManagement.vue";
import Report from "../views/admin/Report.vue";

// views without layouts

import Index from "../views/Index.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Store from "../views/Store.vue";
import DetailCar from "../views/DetailCar.vue";

// routes

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkMiddleware() {
  
}

const routes = [
  {
    path: "/",
    redirect: "/login",
    // component: Index,
  },
  {
    name: 'Login',
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      fetch('https://backend-carstore.herokuapp.com/api/user', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${getCookie('jwt')}`,
        },
      })
      .then(response => response.json())
      .then(result => {
        if(result.status) {
          next({name: 'Admin'});
        } else {
          next();
        }
      })
    },
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: "/store",
    component: Store,
  },
  {
    path: "/store/:kodemobil",
    component: DetailCar,
  },
  {
    name: 'Admin',
    path: "/admin",
    redirect: "/admin/cars",
    component: Admin,
    beforeEnter: (to, from, next) => {
      fetch('https://backend-carstore.herokuapp.com/api/user', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${getCookie('jwt')}`,
        },
      })
      .then(response => response.json())
      .then(result => {
        if(result.status) {
          next();
          
        } else {
          next({name: 'Login'});
        }
      })
    },
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
        name: 'Transaction',
        path: "/admin/transaction",
        component: Transaction,
      },
      {
        name: 'UserManagement',
        path: "/admin/users",
        component: UserManagement,
      },
      {
        name: 'Report',
        path: "/admin/report",
        component: Report,
      },
      {
        name: 'Invoice',
        path: "/admin/invoice/:id",
        component: Invoice,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;