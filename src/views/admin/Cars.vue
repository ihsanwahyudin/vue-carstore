<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Daftar Mobil
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="flex justify-between">
        <button class="bg-gray-800 my-2 px-4 py-2 rounded-lg text-white" v-on:click="modalCreate">new car</button>
        <input type="search" class="my-2 px-3 bg-white border-2 border-gray-800 rounded-lg focus:outline-none focus:ring" placeholder="search" @keyup="searchData">
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200" id="cars-table">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kode Mobil
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Merk
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Warna
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Harga Mobil
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(mobil, index) in dataMobil" v-bind:key="mobil.kode_mobil">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ mobil.kode_mobil }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ mobil.merk }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ mobil.type }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full shadow-md" :class="{'text-white': parseInt('0x'+mobil.warna.replace('#', '')) <= 16770000}" :style="'background-color: ' + mobil.warna">
                        {{ mobil.warna.replace('#', '') }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">Rp. {{ formatNumber(mobil.harga_mobil) }}</div>
                      <span class="invisible hidden">{{ mobil.harga_mobil }}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-2">
                      <button type="button" class="text-indigo-600 hover:text-indigo-900 text-lg" v-on:click="getDataByIndex(index)">
                        <i class='bx bx-edit'></i>
                      </button>
                      <button type="button" class="text-red-500 hover:text-red-700 text-lg" v-on:click="deleteDataByIndex(index)">
                        <i class='bx bx-trash'></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="animate-pulse">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
  <ModalCreate v-on:getData="getData" />
  <ModalUpdate v-on:getData="getData" :dataMobilByIndex="specificData"/>
  <ModalDelete v-on:getData="getData" ref="modalDelete" />
</template>

<script>
import ModalCreate from "../../components/Modal/Cars/ModalCreate.vue";
import ModalUpdate from "../../components/Modal/Cars/ModalUpdate.vue";
import ModalDelete from "../../components/Modal/Cars/ModalDelete.vue";

export default {
  props: ['dataMobil', 'dataCustomer'],
  emits: ['sendData'],
  mounted() {
    if(this.dataMobil.length == 0) {
      this.getData();
    }
  },
  data: function() {
    return {
      specificData: {},
    }
  },
  components: {
    ModalCreate,
    ModalUpdate,
    ModalDelete,
  },
  methods: {
    modalCreate() {
      document.getElementById('modalCreate').classList.toggle('active');
    },
    modalUpdate() {
      document.getElementById('modalUpdate').classList.toggle('active');
    },
    getData() {
      fetch('http://127.0.0.1:8000/api/cars')
      .then(response => response.json())
      .then(result => {
        this.$emit('sendData', { dataMobil: result });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    getDataByIndex(index) {
      this.specificData = this.dataMobil[index];
      $('#modalUpdate .input-file').html(`
        <input type="file" name="gambar" class="dropify rounded-md" data-default-file="http://127.0.0.1:8000/images/${this.specificData.gambar}" data-allowed-file-extensions="jpg jpeg png"/>
      `);
      $('#modalUpdate .dropify').dropify();
      this.modalUpdate();
    },
    deleteDataByIndex(index) {
      let id = this.dataMobil[index].kode_mobil;
      this.$refs.modalDelete.showDataId(id);
      this.$refs.modalDelete.toggleModal(true);
      // console.info(id);
    },
    searchData(e) {
      let val = e.target.value.toLowerCase();
      $("#cars-table tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
      });
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>

<style scoped>
#modalCreate {
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
#modalCreate.active {
  visibility: visible;
  opacity: 1;
}

#modalUpdate {
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}
#modalUpdate.active {
  visibility: visible;
  opacity: 1;
}
</style>