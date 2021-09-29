<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <AdminNavbar />
    <router-view v-on:send-data="getData($event)" :dataMobil="dataMobil"/>
  </div>
</template>

<script>
import AdminNavbar from "../components/Navbars/AdminNavbar.vue"
export default {
  data: function() {
    return {
      dataMobil: []
    }
  },
  components: {
    AdminNavbar,
  },
  methods: {
    getData(event) {
      this.dataMobil = event;
    }
  }
}
</script>