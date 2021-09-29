<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <AdminNavbar />
    <router-view />
  </div>
</template>

<script>
import AdminNavbar from "../components/Navbars/AdminNavbar.vue"
export default {
  components: {
    AdminNavbar,
  }
}
</script>