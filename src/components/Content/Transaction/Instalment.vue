<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-5">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Informasi Pelanggan</h3>
              <div class="flex justify-between gap-2">
                <button class="px-4 py-2 my-2 bg-indigo-600 rounded-md text-white" @click="this.$refs.modalSelectUser.toggleModal(true)">Pilih Pelanggan</button>
              </div>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow border overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="nama_pembeli" class="block text-sm font-medium text-gray-700">Nama Pembeli</label>
                      <input v-model="selectedCustomer.nama_pembeli" type="text" name="nama_pembeli" id="nama_pembeli" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="ktp_pembeli" class="block text-sm font-medium text-gray-700">KTP Pembeli</label>
                      <input v-model="selectedCustomer.ktp_pembeli" type="text" name="ktp_pembeli" id="ktp_pembeli" autocomplete="family-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="telp_pembeli" class="block text-sm font-medium text-gray-700">Telepon Pembeli</label>
                      <input v-model="selectedCustomer.telp_pembeli" type="text" name="telp_pembeli" id="telp_pembeli" autocomplete="email" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
                    </div>

                    <div class="col-span-6">
                      <label for="alamat" class="block text-sm font-medium text-gray-700">Alamat</label>
                      <textarea v-model="selectedCustomer.alamat_pembeli" name="alamat" id="alamat" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" autocomplete="alamat" readonly></textarea>
                    </div>

                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div v-if="tableActive" class="mt-5 md:mt-0">
          <div class="shadow-md border overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-12 gap-6">

                <div class="col-span-12">
                  <h2>Data Cicilan</h2>
                </div>

                <div class="flex flex-col col-span-12">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200" id="cars-table">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Kode Cicilan
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tanggal Cicilan
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Jumlah Cicilan
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cicilan Ke
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sisa Cicilan
                              </th>
                              <!-- <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Action</span>
                              </th> -->
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            <template v-if="selectedDataCredit">
                              <tr v-for="cicilan in selectedDataCredit.data_cicilan" v-bind:key="cicilan.kode_cicilan">
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ cicilan.kode_cicilan }}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ cicilan.tgl_cicilan }}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ cicilan.jml_cicilan }}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ cicilan.cicilan_ke }}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ cicilan.cicilan_sisa_harga }}</div>
                              </td>
                            </tr>
                            </template>
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
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <PayInstalment ref="payInstalment" :selectedCustomer="selectedCustomer" :selectedDataCredit="selectedDataCredit" @getData="getData" />

      </div>
      <!-- /End replace -->
    </div>
  </main>
  
  <ModalSelectUser ref="modalSelectUser" :paymentMethod="paymentMethod" :dataCustomer="dataCustomer" @selectUser="selectUser($event)" />
</template>

<script>
import ModalSelectUser from '../../Modal/Transaction/ModalSelectUser.vue';
import PayInstalment from './PayInstalment.vue';

export default {
  props: ['dataMobil', 'dataCustomer', 'paymentMethod', 'dataCredit'],
  emits: ['getData'],
  mounted() {

  },
  data: function() {
    return {
      tableActive: false,
      selectedCustomer: {
        ktp_pembeli: '',
        nama_pembeli: '',
        telp_pembeli: '',
        alamat_pembeli: '',
      },
      selectedDataCredit: {}
    }
  },
  components: {
    ModalSelectUser,
    PayInstalment,
  },
  methods: {
    selectedColor(e) {
      let colorpick = e.target.closest('div').parentNode.parentNode.parentNode.querySelectorAll('.color-pick');
      for(let i = 0; i < colorpick.length; i++) {
        colorpick[i].classList.remove('active');
      }
      e.target.closest('div').parentNode.classList.add('active');
    },
    toggleModal(e) {
      e.preventDefault();
      this.$refs.modalSelectCars.toggleModal(true);
    },
    selectUser(index) {
      this.selectedCustomer = this.dataCustomer[index];
      this.selectDataCredit(this.selectedCustomer.ktp_pembeli);
    },
    selectDataCredit(ktpPembeli) {
      for(let i = 0; i < this.dataCredit.length; i++) {
        if(this.dataCredit[i].ktp_pembeli == ktpPembeli) {
          this.selectedDataCredit = this.dataCredit[i];
        }
      }
      this.$refs.payInstalment.getData(this.selectedDataCredit);
      this.tableActive = true;
      this.$refs.payInstalment.isActive = true;
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getData() {
      
    },
  }
}
</script>

<style scoped>
.color-pick.active {
  border: 2px solid rgba(99, 102, 241, 1);
}

.color-pick {
  border: 2px solid transparent;
}
</style>