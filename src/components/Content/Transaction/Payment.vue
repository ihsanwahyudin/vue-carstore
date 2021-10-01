<template>
  <div class="mt-5">
    <form action="#" method="POST">
      <div class="shadow-md border overflow-hidden sm:rounded-md">
        <nav class="flex justify-center items-center">
          <span @click="open = true" class="py-2 px-4 cursor-pointer hover:text-indigo-500" :class="{'text-indigo-500 border-b border-indigo-500': open, 'text-gray-500': !open}">Cash</span>
          <span @click="renderDropify" class="py-2 px-4 cursor-pointer hover:text-indigo-500" :class="{'text-indigo-500 border-b border-indigo-500': !open, 'text-gray-500': open}">Kredit</span>
        </nav>
        <section v-if="open" class="px-4 py-5 bg-white sm:p-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-8 grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
              <input type="text" name="kode_mobil" id="kode_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="selectedCar.kode_mobil"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga Mobil</label>
              <input type="text" name="harga_mobil" id="harga_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="formatNumber(selectedCar.harga_mobil)"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="bunga" class="block text-sm font-medium text-gray-700">Bunga</label>
              <input type="text" name="bunga" id="bunga" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly value="0"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="tgl_cash" class="block text-sm font-medium text-gray-700">Tanggal Pembayaran</label>
              <input type="text" name="tgl_cash" id="tgl_cash" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" v-model="dateNow" readonly/>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6 gap-6">
            <div class="col-span-6">
              <label for="grandtotal" class="block text-sm font-medium text-gray-700">Grandtotal</label>
              <input type="text" name="grandtotal" id="grandtotal" autocomplete="grandtotal" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
            </div>

            <div class="col-span-6">
              <label for="cash_bayar" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
              <input type="text" name="cash_bayar" id="cash_bayar" autocomplete="cash_bayar" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm"/>
            </div>
          </div>
        </section>
        <section v-if="!open" class="px-4 py-5 bg-white sm:p-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-8 grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
              <input type="text" name="kode_mobil" id="kode_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga Mobil</label>
              <input type="text" name="harga_mobil" id="harga_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="lama_cicilan" class="block text-sm font-medium text-gray-700">Lama Cicilan</label>
              <select name="lama_cicilan" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" id="lama_cicilan">
                <option value="">12 Bulan</option>
                <option value="">24 Bulan</option>
                <option value="">36 Bulan</option>
              </select>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="tgl_cash" class="block text-sm font-medium text-gray-700">Tanggal Kredit</label>
              <input type="text" name="tgl_cash" id="tgl_cash" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" v-model="dateNow" readonly />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_ktp" class="block text-sm font-medium text-gray-700">Fotokopi KTP</label>
              <span class="border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden">
                <input type="file" class="img-preview" name="fotokopi_ktp" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-ktp"/>
              </span>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_kk" class="block text-sm font-medium text-gray-700">Fotokopi KK</label>
              <span class="border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden">
                <input type="file" class="img-preview" name="fotokopi_kk" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-kk"/>
              </span>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_slip_gaji" class="block text-sm font-medium text-gray-700">Fotokopi Slip Gaji</label>
              <span class="border-indigo-500 mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden">
                <input type="file" class="img-preview" name="fotokopi_slip_gaji" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-slip-gaji"/>
              </span>
            </div>

          </div>
          <div class="col-span-12 lg:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6 flex items-start">
            <div class="col-span-6 flex flex-col gap-6">

              <div>
                <label for="bunga" class="block text-sm font-medium text-gray-700">Bunga</label>
                <input type="text" name="bunga" id="bunga" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly value="0"/>
              </div>

              <div>
                <label for="nilai_cicilan" class="block text-sm font-medium text-gray-700">Nilai Cicilan</label>
                <input type="text" name="nilai_cicilan" id="nilai_cicilan" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly value="12.000.000 / Bulan"/>
              </div>

              <div>
                <label for="uang_muka" class="block text-sm font-medium text-gray-700">Minimal Uang Muka</label>
                <input type="text" name="uang_muka" id="uang_muka" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly value="120.000.000"/>
              </div>

              <div>
                <label for="cash_bayar" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
                <input type="text" name="cash_bayar" id="cash_bayar" autocomplete="cash_bayar" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm"/>
              </div>
            </div>
          </div>
        </section>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border-indigo-500 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring">
            Bayar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['selectedCar'],
  mounted() {
    this.getToday();
  },
  data: () => {
    return {
      open: true,
      dateNow: '',
    }
  },
  methods: {
    renderDropify() {
      this.open = false;
      setTimeout(() => {
        $('.img-preview').dropify();
      }, 10);
    },
    getToday() {
      let date = new Date();
      let today = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
      this.dateNow = today;
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>

<style>

</style>