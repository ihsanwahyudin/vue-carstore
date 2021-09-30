<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Transaction
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-5">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Informasi Pelanggan</h3>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow border overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="nama_pembeli" class="block text-sm font-medium text-gray-700">Nama Pembeli</label>
                      <input type="text" name="nama_pembeli" id="nama_pembeli" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="ktp_pembeli" class="block text-sm font-medium text-gray-700">KTP Pembeli</label>
                      <input type="text" name="ktp_pembeli" id="ktp_pembeli" autocomplete="family-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="ktp_pembeli" class="block text-sm font-medium text-gray-700">Telepon Pembeli</label>
                      <input type="text" name="ktp_pembeli" id="ktp_pembeli" autocomplete="email" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                    </div>

                    <div class="col-span-6">
                      <label for="alamat" class="block text-sm font-medium text-gray-700">Alamat</label>
                      <textarea name="alamat" id="alamat" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" autocomplete="alamat"></textarea>
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
                  
                  <div class="col-span-12 md:col-span-6 lg:col-span-7">
                    <div class="group mb-6 relative overflow-hidden">
                      <div class="relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 h-64">
                        <img :src="exampleImage" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                  </div>

                  <section class="col-span-12 md:col-span-6 lg:col-span-5 bg-white border-l-2">
                    <div class="grid grid-cols-6 gap-6 px-6">
                      <div class="col-span-6">
                        <h2 class="text-3xl text-gray-800 block">Avansa</h2>
                        <div class="px-2">
                          <p class="text-md text-black block">Mebrio</p>
                          <p class="text-2xl text-gray-600 block">Rp. 200.000.000</p>
                          <span class="block mt-5 mx-1">
                            <small class="text-black block">warna</small>
                            <div class="flex gap-2">
                              <label for="warna1" class="cursor-pointer">
                                <div class="color-pick p-1 rounded-full">
                                  <div class="bg-black border h-10 w-10 rounded-full flex justify-center items-center">
                                    <input @change="selectedColor" class="invisible" type="radio" name="warna" id="warna1">
                                  </div>
                                </div>
                              </label>
                              <label for="warna2" class="cursor-pointer">
                                <div class="color-pick p-1 rounded-full">
                                  <div class="bg-white border h-10 w-10 rounded-full flex justify-center items-center">
                                    <input @change="selectedColor" class="invisible" type="radio" name="warna" id="warna2">
                                  </div>
                                </div>
                              </label>
                              <label for="warna3" class="cursor-pointer">
                                <div class="color-pick p-1 rounded-full">
                                  <div class="bg-gray-500 border h-10 w-10 rounded-full flex justify-center items-center">
                                    <input @change="selectedColor" class="invisible" type="radio" name="warna" id="warna3">
                                  </div>
                                </div>
                              </label>
                            </div>
                          </span>
                        </div>
                      </div>

                      <!-- <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
                        <input type="text" name="kode_mobil" id="kode_mobil" class="py-2 px-4 border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label for="merk" class="block text-sm font-medium text-gray-700">Merk</label>
                        <input type="text" name="merk" id="merk" class="py-2 px-4 border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                        <input type="text" name="type" id="type" class="py-2 px-4 border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga</label>
                        <input type="text" name="harga_mobil" id="harga_mobil" class="py-2 px-4 border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                      </div> -->

                    </div>
                  </section>
                  <!--

                  

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="merk" class="block text-sm font-medium text-gray-700">Merk</label>
                    <input type="text" name="merk" id="merk" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                    <input type="text" name="type" id="type" autocomplete="type" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga</label>
                    <input type="text" name="harga_mobil" id="harga_mobil" autocomplete="harga_mobil" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" />
                  </div>

                  <div class="col-span-3">
                    <label for="warna" class="block text-sm font-medium text-gray-700">Warna</label>
                    <div id="warna" class="py-2 px-4 mt-1 block w-full py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm text-white text-center" style="background-color: #FF00FF;">#FF00FF</div>
                  </div> -->

                  <div class="col-span-12">
                    
                  </div>

                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border-indigo-500 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
  <ModalSelectCars ref="modalSelectCars" :dataMobil="dataMobil" />
</template>

<script>
import exampleImage from '../../assets/img/team-1-800x8000.jpg';
import ModalSelectCars from '../../components/Modal/Transaction/ModalSelectCars.vue';

export default {
  props: ['dataMobil'],
  mounted() {
    if(this.dataMobil.length == 0) {
      this.getData();
    }
  },
  data: function() {
    return {
      exampleImage,
    }
  },
  components: {
    ModalSelectCars,
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
        this.fillToDataMobil(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    fillToDataMobil(event) {
      this.$emit('send-data', event);
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