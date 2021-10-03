<template>
  <div class="mt-5">
    <form method="POST" id="formTransaction" @submit="storeData">
      <template v-if="selectedCustomer">
        <input type="hidden" name="ktp_pembeli" :value="selectedCustomer.ktp_pembeli">
      </template>
      <div class="shadow-md border overflow-hidden sm:rounded-md">
        <section class="px-4 py-5 bg-white sm:p-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-8 grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
              <input type="text" name="kode_mobil" id="kode_mobil" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.kode_mobil }" readonly :value="selectedDataCredit.kode_mobil"/>
              <small v-if="errors.kode_mobil" class="text-red-500">{{ errors.kode_mobil[0] }}</small>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="kode_kredit" class="block text-sm font-medium text-gray-700">Kode Kredit</label>
              <input type="text" name="kode_kredit" id="kode_kredit" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="selectedDataCredit.kode_kredit"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="tgl_pembayaran" class="block text-sm font-medium text-gray-700">Tanggal Pembayaran</label>
              <input type="text" name="tgl_pembayaran" id="tgl_pembayaran" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" v-model="dateNow" readonly />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="tgl_cicilan" class="block text-sm font-medium text-gray-700">Tanggal Cicilan</label>
              <input type="date" name="tgl_cicilan" id="tgl_cicilan" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="cicilan_sisa_ke" class="block text-sm font-medium text-gray-700">Cicilan Sisa Ke</label>
              <input type="text" name="cicilan_sisa_ke" id="cicilan_sisa_ke" autocomplete="cicilan_sisa_ke" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(payment.instalment.cicilan_sisa_ke)" readonly />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="cicilan_sisa_harga" class="block text-sm font-medium text-gray-700">Cicilan Sisa Ke</label>
              <input type="text" name="cicilan_sisa_harga" id="cicilan_sisa_harga" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(payment.instalment.cicilan_sisa_harga)" readonly />
            </div>
          </div>
          <div class="col-span-12 sm:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6 gap-6">
            <div class="col-span-6">
              <label for="cicilan_sisa_ke" class="block text-sm font-medium text-gray-700">Nominal Cicilan yang harus di bayar</label>
              <input type="text" name="cicilan_sisa_ke" id="cicilan_sisa_ke" autocomplete="cicilan_sisa_ke" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" value="" readonly />
            </div>

            <div class="col-span-6">
              <label for="jml_cicilan" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
              <input type="text" name="jml_cicilan" id="jml_cicilan" autocomplete="jml_cicilan" class="format-number disable-letter py-2 px-4 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.jml_cicilan, 'border-indigo-500': !errors.jml_cicilan }"/>
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
  props: ['selectedCustomer'],
  emits: ['getData'],
  mounted() {
  },
  data: () => {
    return {
      dateNow: '',
      nextMonth: '',
      payment: {
        instalment: {
          kode_kredit: '',
          tgl_cicilan: '',
          jml_cicilan: '',
          cicilan_ke: '',
          cicilan_sisa_ke: '',
          cicilan_sisa_harga: '',
        }
      },
      selectedDataCredit: {},
      errors: [],
    }
  },
  methods: {
    getToday() {
      let date = new Date();
      let today = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
      this.dateNow = today;
    },
    getNextMonth() {
      var future = new Date();
      future.setDate(future.getDate() + 30);
      // var now = new Date(); 
      // now.setDate(now.getDate() + 30);
      // let time = Date.parse(now);
      return future;
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    calculate() {
      this.getToday();
      let jmlCicilan = this.selectedDataCredit.nilai_cicilan;
      let cicilanKe = this.selectedDataCredit['data_cicilan'].length;
      let lamaCicilan = this.selectedDataCredit.lama_cicilan;
      if(cicilanKe == 0) {
        let cicilanSisaKe = parseInt(this.selectedDataCredit.paket_jml_cicilan) - parseInt(this.selectedDataCredit.harga_paket);
        this.payment.instalment.cicilan_ke = 1;
        this.payment.instalment.cicilan_sisa_ke = lamaCicilan;
        this.payment.instalment.cicilan_sisa_harga = cicilanSisaKe;
      } else {
        this.payment.instalment.cicilan_ke = cicilanKe;
        this.payment.instalment.cicilan_sisa_ke = parseInt(lamaCicilan) - parseInt(cicilanKe);
        this.payment.instalment.cicilan_sisa_harga = this.selectedDataCredit['data_cicilan'][cicilanKe - 1].cicilan_sisa_harga;
      }

      this.payment.instalment.jml_cicilan = jmlCicilan;
      this.nextMonth = this.getNextMonth();
      console.info(jmlCicilan);
      console.info(cicilanKe);

    },
    getData(data) {
      this.selectedDataCredit = data;
      setTimeout(() => {
        this.calculate();
      }, 500);
    },
    storeData(e) {
      e.preventDefault();
      let form = document.querySelector('#formTransaction');
      let formData = new FormData(form);
      if(this.selectedCustomer.ktp_pembeli) {
        if(this.selectedCar.kode_mobil != '' || this.selectedCar.kode_mobil.length != 0) {
          if(this.cashFormValidation()) {
            this.storeCash(formData);
          } else {
            this.warningToast('Uang Tidak Cukup !!!');
          }
        } else {
          this.warningToast('Pilih Mobil dulu !!!');
        }
      } else {
        this.warningToast('Pilih Pelanggan dulu !!!');
      }
    },
    storeCash(formData) {
      fetch('http://127.0.0.1:8000/api/cash/payment', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        // console.info('Success:', result);
        if(result.status == true) {
          this.successToast(result.message);
          this.successToastConfirmation('Pembayaran Berhasil !!!');
          this.$router.push({ name: 'invoice', params: { id: result.data.kode_cash } });
          this.$emit('getData');
        } else {
          this.errors = result.message;
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    },
    cashFormValidation() {
      let hargaMobil = this.selectedCar.harga_mobil;
      let cashBayar = $('input#cash_bayar').val().replace(/[^,\d]/g, '');
      if(cashBayar.length != 0 && parseInt(cashBayar) >= parseInt(hargaMobil)) {
        this.errors = [];
        return true;
      } else {
        this.errors = {
          cash_bayar: 'Uang Tidak Cukup',
        };
        return false;
      }
    },
    successToast(message) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: 'success',
        title: message
      });
    },
    warningToast(message) {
      this.$swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: message,
        confirmButtonText: 'Kembali'
      })
    },
    successToastConfirmation(message) {
      const swal = this.$swal.mixin({
        buttonsStyling: true
      })

      swal.fire({
        title: message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Selesai',
        reverseButtons: true
      }).then((result) => {
        return true;
      })
    },
  },
}
</script>

<style>

</style>