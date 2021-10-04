<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Transaction
      </h1>
      <nav class="flex justify-center items-center bg-white w-full mt-6">
        <div @click="paymentMethod = true" class="w-full py-2 px-4 text-center cursor-pointer hover:text-indigo-500 hover:bg-indigo-100" :class="{'text-indigo-500 border-b border-indigo-500': paymentMethod, 'text-gray-500': !paymentMethod}">Transaksi Baru</div>
        <div @click="paymentMethod = false" class="w-full py-2 px-4 text-center cursor-pointer hover:text-indigo-500 hover:bg-indigo-100" :class="{'text-indigo-500 border-b border-indigo-500': !paymentMethod, 'text-gray-500': paymentMethod}">Bayar Cicilan</div>
      </nav>
    </div>
  </header>
  <main v-if="paymentMethod">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

      <!-- Replace with your content -->
      <div class="mt-10 sm:mt-0">
        <div class="flex justify-end">
          <button class="bg-indigo-600 my-2 px-4 py-2 rounded-md text-white hidden lg:block" @click="this.$refs.modalNewUser.toggleModal(true)">Pelanggan Baru</button>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-5">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Informasi Pelanggan</h3>
              <div class="flex justify-between gap-2">
                <button class="px-4 py-2 my-2 bg-indigo-600 rounded-md text-white" @click="this.$refs.modalSelectUser.toggleModal(true)">Pilih Pelanggan</button>
                <button class="bg-indigo-600 my-2 px-4 py-2 rounded-md text-white lg:hidden" @click="this.$refs.modalNewUser.toggleModal(true)">Pelanggan Baru</button>
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

        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow-md border overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-12 gap-6">

                  <div class="col-span-12">
                    <button @click="toggleModal" class="px-4 py-2 bg-indigo-600 rounded-md text-sm mt-1 text-white focus:ring focus:outline-none">Pilih mobil</button>
                  </div>
                  
                  <template v-if="selectedCar.warna">
                    <div class="col-span-12 md:col-span-6 lg:col-span-7">
                      <div class="group mb-6 relative overflow-hidden">
                        <div class="relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 h-64">
                          <img :src="'http://127.0.0.1:8000/images/' + selectedCar.gambar" class="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                    </div>

                    <section class="col-span-12 md:col-span-6 lg:col-span-5 bg-white border-l-2">
                      <div class="grid grid-cols-6 gap-6 px-6">
                        <div class="col-span-6">
                          <h2 class="text-3xl text-gray-800 block">{{ selectedCar.merk }}</h2>
                          <div class="px-2">
                            <p class="text-md text-black block">{{ selectedCar.type }}</p>
                            <p class="text-2xl text-gray-600 block">Rp. {{ formatNumber(selectedCar.harga_mobil) }}</p>
                            <span class="block mt-5 mx-1">
                              <small class="text-black block">warna</small>
                              <div class="flex gap-2">
                                <label for="warna3" class="cursor-pointer">
                                  <div class="color-pick p-1 rounded-full active">
                                    <div class="border h-10 w-10 rounded-full flex justify-center items-center" :style="'background-color:' + selectedCar.warna">
                                      <input @change="selectedColor" class="invisible" type="radio" name="warna" id="warna3" checked>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </template>

                </div>
              </div>
            </div>
          </form>
        </div>
        <Payment ref="payment" :selectedCustomer="selectedCustomer" @getData="getData(); getDataCustomer(); getDataCredit();" />
      </div>
      <!-- /End replace -->
    </div>

    <ModalNewUser ref="modalNewUser" @sendDataCustomer="selectedCustomer = $event; getDataCustomer();" />
    <ModalSelectUser ref="modalSelectUser" :paymentMethod="paymentMethod" :dataCustomer="dataCustomer" @selectUser="selectUser($event)" />
    <ModalSelectCars ref="modalSelectCars" :dataMobil="dataMobil" @selectCar="selectCar($event)" />
  </main>

  <Instalment v-if="!paymentMethod" :dataMobil="dataMobil" :dataCustomer="dataCustomer" :dataCredit="dataCredit" :paymentMethod="paymentMethod" @getData="getData(); getDataCustomer(); getDataCredit();" ></Instalment>
  
</template>

<script>
import Payment from '../../components/Content/Transaction/Payment.vue';
import ModalSelectCars from '../../components/Modal/Transaction/ModalSelectCars.vue';
import ModalSelectUser from '../../components/Modal/Transaction/ModalSelectUser.vue';
import ModalNewUser from '../../components/Modal/Transaction/ModalNewUser.vue';
import Instalment from '../../components/Content/Transaction/Instalment.vue';

export default {
  props: ['dataMobil', 'dataCustomer', 'dataCredit'],
  emits: ['sendData'],
  components: {
    Payment,
    ModalSelectCars,
    ModalSelectUser,
    ModalNewUser,
    Instalment,
  },
  mounted() {
    if(this.dataMobil.length == 0) {
      this.getData();
    }
    if(this.dataCustomer.length == 0) {
      this.getDataCustomer();
    }
    if(this.dataCredit.length == 0) {
      this.getDataCredit();
    }
  },
  data: function() {
    return {
      paymentMethod: true,
      selectedCustomer: {
        ktp_pembeli: '',
        nama_pembeli: '',
        telp_pembeli: '',
        alamat_pembeli: '',
      },
      selectedCar: {
        kode_mobil: '',
        merk: '',
        type: '',
        warna: false,
        harga_mobil: '',
      }
    }
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
    getData() {
      fetch('http://127.0.0.1:8000/api/cars')
      .then(response => response.json())
      .then(result => {
        this.$emit('sendData', { dataMobil: result })
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    getDataCustomer() {
      fetch('http://127.0.0.1:8000/api/customer')
      .then(response => response.json())
      .then(result => {
        this.$emit('sendData', { dataCustomer: result });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    getDataCredit() {
      fetch('http://127.0.0.1:8000/api/report/data/kredit')
      .then(response => response.json())
      .then(result => {
        this.$emit('sendData', { dataCredit: result });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    selectUser(index) {
      this.selectedCustomer = this.dataCustomer[index];
    },
    selectCar(index) {
      this.selectedCar = this.dataMobil[index];
      this.$refs.payment.getData(this.selectedCar);
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
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