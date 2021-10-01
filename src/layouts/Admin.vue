<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <AdminNavbar />
    <router-view @sendData="getData($event)" :dataMobil="dataMobil" :dataCustomer="dataCustomer"/>
  </div>
</template>

<script>
import AdminNavbar from "../components/Navbars/AdminNavbar.vue"
export default {
  data: function() {
    return {
      dataMobil: [],
      dataCustomer: [],
    }
  },
  components: {
    AdminNavbar,
  },
  methods: {
    getData(event) {
      if(event.dataMobil) {
        this.dataMobil = event.dataMobil;
      }
      if(event.dataCustomer) {
        this.dataCustomer = event.dataCustomer;
      }
    },
  }
}
</script>