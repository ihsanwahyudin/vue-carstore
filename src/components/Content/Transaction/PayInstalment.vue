<template>
  <div class="mt-5">
    <form v-if="isActive" method="POST" id="formInstalment" @submit="storeData">
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
              <label for="tgl_cicilan" class="block text-sm font-medium text-gray-700">Tanggal Pembayaran</label>
              <input type="text" name="tgl_cicilan" id="tgl_cicilan" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="convertDate(dateNow)" readonly />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="from_instalment" class="block text-sm font-medium text-gray-700">Tanggal Cicilan</label>
              <div class="flex gap-2">
                <input type="text" name="" id="" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="convertDate(payment.instalment.fromDate)" disabled/>
                <input type="hidden" name="from" :value="payment.instalment.fromDate">
                <span class="flex items-center text-2xl">/</span>
                <input type="text" name="" id="" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="convertDate(payment.instalment.toDate)" disabled/>
                <input type="hidden" name="to" :value="payment.instalment.toDate">
              </div>
            </div>

            <div class="col-span-12 sm:col-span-6">

              <label for="cicilan_sisa_ke" class="block text-sm font-medium text-gray-700">Cicilan Ke</label>
              <div class="flex gap-2">
                <input type="text" name="cicilan_ke" id="cicilan_ke" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="payment.instalment.cicilan_ke" readonly />
                <span class="flex items-center text-2xl">/</span>
                <input type="text" name="" id=""  class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="selectedDataCredit.lama_cicilan + ' Bulan'" readonly />
                <input type="hidden" name="cicilan_sisa_ke" :value="payment.instalment.cicilan_sisa_ke">
              </div>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="" class="block text-sm font-medium text-gray-700">Sisa Cicilan</label>
              <input type="text" name="" id="" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(payment.instalment.cicilan_sisa_harga)" readonly />
              <input type="hidden" name="cicilan_sisa_harga" :value="payment.instalment.cicilan_sisa_harga">
            </div>
  
            <div class="col-span-12 sm:col-span-6">
              <label for="" class="block text-sm font-medium text-gray-700">Nominal Cicilan yang harus di bayar</label>
              <input type="text" name="" id="" autocomplete="cicilan_sisa_ke" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(selectedDataCredit.nilai_cicilan) + ' / Bulan'" readonly />
            </div>

          </div>
          <div class="col-span-12 sm:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6">
            <div class="flex flex-col gap-6">
              <div class="col-span-6">
                <label for="" class="block text-sm font-medium text-gray-700">Biaya Tambahan / Denda</label>
                <input type="text" name="" id="" autocomplete="" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="'Rp. +' + formatNumber(payment.instalment.lateCharge)" readonly :class="{ 'bg-green-500': payment.instalment.lateCharge <= 0, 'bg-red-500': payment.instalment.lateCharge > 0 }" />
                <input type="hidden" name="denda" :value="payment.instalment.lateCharge">
              </div>

              <div class="col-span-6">
                <label for="grandtotal" class="block text-sm font-medium text-gray-700">Grandtotal</label>
                <input type="text" name="grandtotal" id="grandtotal" autocomplete="cicilan_sisa_ke" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(payment.instalment.grandtotal)" readonly />
              </div>

              <div class="col-span-6">
                <label for="jml_cicilan" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
                <input type="text" name="jml_cicilan" id="jml_cicilan" autocomplete="jml_cicilan" class="format-number disable-letter py-2 px-4 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.jml_cicilan, 'border-indigo-500': !errors.jml_cicilan }"/>
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
import moment from 'moment';
// import twix from 'twix';

export default {
  props: ['selectedCustomer'],
  emits: ['getData'],
  mounted() {

  },
  data: () => {
    return {
      isActive: false,
      dateNow: '',
      nextMonth: '',
      payment: {
        instalment: {
          kode_kredit: '',
          tgl_cicilan: '',
          nilai_cicilan: '',
          cicilan_ke: '',
          cicilan_sisa_ke: '',
          cicilan_sisa_harga: '',
          fromDate: '',
          toDate: '',
          grandtotal: '',
          lateCharge: 0,
        }
      },
      selectedDataCredit: {
        kode_kredit: '',
        kode_mobil: '',
        nilai_cicilan: '',
        lama_cicilan: '',
      },
      errors: [],
    }
  },
  methods: {
    getToday() {
      // let date = new Date();
      // let today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
      this.dateNow = moment().format('YYYY-MM-DD');
    },
    getNextMonth(from) {
      let to = moment(from).add(30, 'days');
      return moment(to).format('YYYY-MM-DD');
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    calculate() {
      this.getToday();
      let nilaiCicilan = this.selectedDataCredit.nilai_cicilan;
      let cicilanKe = this.selectedDataCredit['data_cicilan'].length;
      let lamaCicilan = this.selectedDataCredit.lama_cicilan;
      if(cicilanKe == 0) {
        let cicilanSisaHarga = parseInt(this.selectedDataCredit.paket_jml_cicilan) - parseInt(this.selectedDataCredit.uang_muka);
        this.payment.instalment.cicilan_ke = 1;
        this.payment.instalment.cicilan_sisa_ke = lamaCicilan;
        this.payment.instalment.cicilan_sisa_harga = cicilanSisaHarga;
        let from = moment(this.selectedDataCredit.tgl_kredit).format('YYYY-MM-DD');
        let to = this.getNextMonth(from);
        let today = moment().format('YYYY-MM-DD');

        this.payment.instalment.fromDate = from;
        this.payment.instalment.toDate = to;
        // Calculate LateCharge
        let fromDate = moment(from.split('-'));
        let toNow = moment(today.split('-'));
        let lateCharge = toNow.diff(fromDate, 'day');

        if(parseInt(lateCharge) > 30) {
          let check = parseInt(lateCharge) / 30;
          console.info(check);
          console.info(Math.ceil(check));
          if(Math.ceil(check) > 2) {
            console.info('sudah ' + lateCharge + ' Belum Bayar Utang');
            this.payment.instalment.lateCharge = 5000 * 30;
          } else {
            console.info('sudah ' + lateCharge + ' Belum Bayar Utang');
            this.payment.instalment.lateCharge = 5000 * (lateCharge - 30);
          }
        } else {
          this.payment.instalment.lateCharge = 0;
          console.info('aman bang baru ' + lateCharge + ' hari');
        }
        console.info(lateCharge);
      } else {
        let cicilanSisaHarga = parseInt(this.selectedDataCredit['data_cicilan'][cicilanKe - 1].cicilan_sisa_harga);
        let nilaiCicilan = parseInt(this.selectedDataCredit.nilai_cicilan);
        this.payment.instalment.cicilan_ke = cicilanKe + 1;
        this.payment.instalment.cicilan_sisa_ke = parseInt(lamaCicilan) - parseInt(cicilanKe);
        this.payment.instalment.cicilan_sisa_harga = cicilanSisaHarga - nilaiCicilan;
        let from = moment(this.selectedDataCredit['data_cicilan'][cicilanKe - 1].to).format('YYYY-MM-DD');
        let to = this.getNextMonth(from);
        let today = moment().format('YYYY-MM-DD');

        this.payment.instalment.fromDate = from;
        this.payment.instalment.toDate = to;
        // Calculate LateCharge
        let fromDate = moment(from.split('-'));
        let toNow = moment(today.split('-'));
        let lateCharge = toNow.diff(fromDate, 'day');

        if(lateCharge > 30) {
          console.info('sudah ' + lateCharge + ' Belum Bayar Utang');
          this.payment.instalment.lateCharge = 5000 * (lateCharge - 30);
        } else {
          this.payment.instalment.lateCharge = 0;
          console.info('aman bang baru ' + lateCharge + ' hari');
        }
      }

      this.payment.instalment.nilai_cicilan = nilaiCicilan;
      this.payment.instalment.grandtotal = parseInt(nilaiCicilan) + parseInt(this.payment.instalment.lateCharge);

    },
    getData(data) {
      this.selectedDataCredit = data;
      setTimeout(() => {
        this.calculate();
      }, 500);
    },
    storeData(e) {
      e.preventDefault();
      let form = document.querySelector('#formInstalment');
      let formData = new FormData(form);
      if(this.selectedCustomer.ktp_pembeli) {
        if(this.selectedDataCredit.kode_mobil != '' || this.selectedDataCredit.kode_mobil.length != 0) {
          if(this.instalmentFormValidation()) {
            this.storeInstalment(formData);
          } else {
            this.warningToast('Uang Tidak Cukup !!!');
          }
        } else {
          this.warningToast('Tidak Ada Transaksi Kredit Mobil !!!');
        }
      } else {
        this.warningToast('Pilih Pelanggan dulu !!!');
      }
    },
    storeInstalment(formData) {
      // for(let item of formData.values()) {
      //   console.info(item);
      // }
      fetch('https://backend-carstore.herokuapp.com/api/instalment/payment', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        if(result.status == true) {
          this.successToast(result.message);
          this.successToastConfirmation('Pembayaran Berhasil !!!');
          this.$router.push({ name: 'Invoice', params: { id: result.data.kode_cicilan } });
          this.$emit('getData');
        } else {
          this.errors = result.message;
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    },
    instalmentFormValidation() {
      let grandtotal = this.payment.instalment.grandtotal;
      let jmlCicilan = $('input#jml_cicilan').val().replace(/[^,\d]/g, '');
      if(jmlCicilan.length != 0 && parseInt(jmlCicilan) >= parseInt(grandtotal)) {
        this.errors = [];
        return true;
      } else {
        this.errors = {
          jml_cicilan: 'Uang Tidak Cukup',
        };
        return false;
      }
    },
    convertDate(time) {
      return moment(time).format('DD-MM-YYYY');
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