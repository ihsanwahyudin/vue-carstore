<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100 min-h-screen">
    <AdminNavbar />
    <router-view @sendData="getData($event)" :dataMobil="dataMobil" :dataCustomer="dataCustomer" :dataCredit="dataCredit"/>
  </div>
</template>

<script>
import AdminNavbar from "../components/Navbars/AdminNavbar.vue"
export default {
  emits: ['sendData'],
  data: function() {
    return {
      dataMobil: [],
      dataCustomer: [],
      dataCredit: [],
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
      if(event.dataCredit) {
        this.dataCredit = event.dataCredit;
      }
    },
  }
}
</script>