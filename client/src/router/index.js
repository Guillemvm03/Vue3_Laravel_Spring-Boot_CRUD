import { createRouter, createWebHistory } from "vue-router";
// import AuthGuard from "./auth-guard";


const routes = [
  ////////////////////////////CLIENT//////////////////////////////////
  {
    path: "/",
    name: "Home",
    redirect: { name: "home" }
  },
  {
    path: "/Home",
    name: "home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/Bookings",
    name: "Bookings",
    component: () => import('../views/Bookings.vue')
  },
  {
    path: "/Booking/:id",
    name: "DetailsTable",
    component: () => import('../views/DetailsTable.vue')
  },
  {
    path: "/Bookings/:filters",
    name: "bookingFilters",
    component: () => import('../views/Bookings.vue')
  },
  // {
  //   path: "/Bookings/:filtersSearch",
  //   name: "bookingSearch",
  //   component: () => import('../views/Bookings.vue')
  // },
  ////////////////////////////LOGIN//////////////////////////////////
  {
    path: "/Login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    // beforeEnter: AuthGuard.noAuthGuard, meta: { requiresAuth: true }
  },
  ////////////////////////////REGISTER//////////////////////////////////
  // {
  //   path: "/Register",
  //   name: "Register",
  //   component: () => import('../views/Register.vue')
  // },
  ////////////////////////////PROFILE//////////////////////////////////
  // {
  //   path: "/Profile",
  //   name: "Profile",
  //   component: () => import('../views/Profile.vue')
  // },
   ///////////////////////////DASHBOARD//////////////////////////////
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import('../views/Dashboard.vue')
  },
  // TABLES
  {
    path: "/dashboard/tables",
    name: "DashboardTables",
    component: () => import('../views/Tables/tableList.vue')
  },
  // MENUS
  {
    path: "/dashboard/menus",
    name: "DashboardMenus",
    component: () => import('../views/Menus/menuList.vue')
  },
  {
    path: "/dashboard/menus/create",
    name: "CreateMenu",
    component: () => import('../views/Menus/menuCreate.vue')
  },
  {
    path: "/dashboard/menus/update/:id",
    name: "updateMenu",
    component: () => import('../views/Menus/menuUpdate.vue')
  },
  {
    path: "/Dashboard/Tables/tableCreate",
    name: "tableCreate",
    component: () => import('../views/Tables/tableCreate.vue')
  },
  {
    path: "/Dashboard/Tables/tableEdit/:id",
    name: "tableEdit",
    component: () => import('../views/Tables/tableEdit.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
