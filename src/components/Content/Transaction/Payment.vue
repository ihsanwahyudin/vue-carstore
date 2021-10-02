<template>
  <div class="mt-5">
    <form method="POST" id="formTransaction" @submit="storeData">
      <template v-if="selectedCustomer">
        <input type="hidden" name="ktp_pembeli" :value="selectedCustomer.ktp_pembeli">
      </template>
      <div class="shadow-md border overflow-hidden sm:rounded-md">
        <nav class="flex justify-center items-center">
          <span @click="open = true" class="py-2 px-4 cursor-pointer hover:text-indigo-500" :class="{'text-indigo-500 border-b border-indigo-500': open, 'text-gray-500': !open}">Cash</span>
          <span @click="renderDropify" class="py-2 px-4 cursor-pointer hover:text-indigo-500" :class="{'text-indigo-500 border-b border-indigo-500': !open, 'text-gray-500': open}">Kredit</span>
        </nav>
        <section v-if="open" class="px-4 py-5 bg-white sm:p-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-8 grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
              <input type="text" name="kode_mobil" id="kode_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.kode_mobil }" readonly :value="selectedCar.kode_mobil"/>
              <small v-if="errors.kode_mobil" class="text-red-500">{{ errors.kode_mobil[0] }}</small>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga Mobil</label>
              <input type="text" name="harga_mobil" id="harga_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="formatNumber(selectedCar.harga_mobil)"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="bunga" class="block text-sm font-medium text-gray-700">Bunga</label>
              <input type="text" name="bunga" id="bunga" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="payment.cash.bunga"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="cash_tgl" class="block text-sm font-medium text-gray-700">Tanggal Pembayaran</label>
              <input type="text" name="cash_tgl" id="cash_tgl" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" v-model="dateNow" readonly/>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6 gap-6">
            <div class="col-span-6">
              <label for="grandtotal" class="block text-sm font-medium text-gray-700">Grandtotal</label>
              <input type="text" name="grandtotal" id="grandtotal" autocomplete="grandtotal" class="format-number disable-letter py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :value="formatNumber(payment.cash.grandtotal)" readonly />
            </div>

            <div class="col-span-6">
              <label for="cash_bayar" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
              <input type="text" name="cash_bayar" id="cash_bayar" autocomplete="cash_bayar" class="format-number disable-letter py-2 px-4 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.cash_bayar, 'border-indigo-500': !errors.cash_bayar }"/>
            </div>
          </div>
        </section>
        <section v-if="!open" class="px-4 py-5 bg-white sm:p-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-8 grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6">
              <label for="kode_mobil" class="block text-sm font-medium text-gray-700">Kode Mobil</label>
              <input type="text" name="kode_mobil" id="kode_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="selectedCar.kode_mobil"/>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="harga_mobil" class="block text-sm font-medium text-gray-700">Harga Mobil</label>
              <input type="text" id="harga_mobil" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="formatNumber(selectedCar.harga_mobil)"/>
              <input type="hidden" name="harga_mobil" :value="selectedCar.harga_mobil">
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="lama_cicilan" class="block text-sm font-medium text-gray-700">Lama Cicilan</label>
              <select name="lama_cicilan" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" id="lama_cicilan" v-model="payment.credit.lama_cicilan" @change="calculate">
                <option value="12">12 Bulan</option>
                <option value="24">24 Bulan</option>
                <option value="36">36 Bulan</option>
              </select>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="tgl_kredit" class="block text-sm font-medium text-gray-700">Tanggal Kredit</label>
              <input type="text" name="tgl_kredit" id="tgl_kredit" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" v-model="dateNow" readonly />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_ktp" class="block text-sm font-medium text-gray-700">Fotokopi KTP</label>
              <span class="mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden" :class="{ 'border-red-500': errors.fotokopi_ktp, 'border-indigo-500': !errors.fotokopi_ktp }">
                <input type="file" class="img-preview" name="fotokopi_ktp" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-ktp"/>
              </span>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_kk" class="block text-sm font-medium text-gray-700">Fotokopi KK</label>
              <span class="mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden" :class="{ 'border-red-500': errors.fotokopi_kk, 'border-indigo-500': !errors.fotokopi_kk }">
                <input type="file" class="img-preview" name="fotokopi_kk" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-kk"/>
              </span>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="fotokopi_slip_gaji" class="block text-sm font-medium text-gray-700">Fotokopi Slip Gaji</label>
              <span class="mt-1 block w-full border bg-white rounded-md shadow-sm overflow-hidden" :class="{ 'border-red-500': errors.fotokopi_slip_gaji, 'border-indigo-500': !errors.fotokopi_slip_gaji }">
                <input type="file" class="img-preview" name="fotokopi_slip_gaji" data-allowed-file-extensions="jpg jpeg png" id="fotokopi-slip-gaji"/>
              </span>
            </div>

          </div>
          <div class="col-span-12 lg:col-span-4 lg:border-l-2 lg:border-gray-300 lg:px-6 grid grid-col-6 flex items-start">
            <div class="col-span-6 flex flex-col gap-6">

              <div>
                <label for="bunga" class="block text-sm font-medium text-gray-700">Bunga</label>
                <input type="text" id="bunga" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="formatNumber(payment.credit.bunga)"/>
                <input type="hidden" name="bunga" :value="payment.credit.bunga">
              </div>

              <div>
                <label for="nilai_cicilan" class="block text-sm font-medium text-gray-700">Cicilan</label>
                <input type="text" name="" id="nilai_cicilan" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="`${formatNumber(payment.credit.cicilan)} / Bulan`"/>
                <input type="hidden" name="nilai_cicilan" :value="payment.credit.cicilan">
              </div>

              <input type="hidden" name="paket_jml_cicilan" v-model="payment.credit.paketJmlCicilan">

              <div>
                <label for="min_uang_muka" class="block text-sm font-medium text-gray-700">Minimal Uang Muka</label>
                <input type="text" name="" id="min_uang_muka" autocomplete="given-name" class="py-2 px-4 border-indigo-500 mt-1 block w-full py-2 px-3 border bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" readonly :value="formatNumber(payment.credit.min_uang_muka)"/>
              </div>

              <div>
                <label for="uang_muka" class="block text-sm font-medium text-gray-700">Masukan Nominal Uang</label>
                <input type="text" name="uang_muka" id="uang_muka" autocomplete="uang_muka" class="format-number disable-letter py-2 px-4 mt-1 block w-full py-2 px-3 border bg-white rounded-md shadow-sm focus:outline-none focus:ring sm:text-sm" :class="{ 'border-red-500': errors.uang_muka, 'border-indigo-500': !errors.uang_muka }"/>
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
  props: ['selectedCustomer'],
  emits: ['getData'],
  mounted() {
  },
  data: () => {
    return {
      open: true,
      dateNow: '',
      payment: {
        cash: {
          bunga: 0,
          grandtotal: 0,
        },
        credit: {
          bunga: 0,
          lama_cicilan: 12,
          cicilan: 0,
          min_uang_muka: 0,
          paketJmlCicilan: 0,
        }
      },
      selectedCar: {
        kode_mobil: '',
        type: '',
        harga_mobil: 0,
        warna: '',
        merk: '',
      },
      errors: [],
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
    },
    calculate() {
      this.getToday();
      this.payment.cash.grandtotal = parseInt(this.selectedCar.harga_mobil) + parseInt(this.payment.cash.bunga);
      this.payment.credit.bunga

      let hargaMobil = parseInt(this.selectedCar.harga_mobil);
      let dp = parseInt(hargaMobil) * 20/100;
      let ph = hargaMobil - dp;
      let lamaCicilan = Math.ceil(parseInt(this.payment.credit.lama_cicilan) / 12);
      let jumlahBulan = parseInt(this.payment.credit.lama_cicilan);
      let bungaAwal = 8;
      let persetaseBunga = (bungaAwal + (lamaCicilan - 1)) * lamaCicilan;
      let bunga = (ph * persetaseBunga) / 100;
      let cicilan = Math.ceil((ph + bunga) / jumlahBulan);
      let paketJmlCicilan = hargaMobil + bunga;

      this.payment.credit.bunga = bunga;
      this.payment.credit.min_uang_muka = dp;
      this.payment.credit.cicilan = cicilan;
      this.payment.credit.paketJmlCicilan = paketJmlCicilan;
    },
    getData(data) {
      this.selectedCar = data;
      this.calculate();
    },
    storeData(e) {
      e.preventDefault();
      let form = document.querySelector('#formTransaction');
      let formData = new FormData(form);
      if(this.selectedCustomer.ktp_pembeli) {
        if(this.selectedCar.kode_mobil != '' || this.selectedCar.kode_mobil.length != 0) {
          if(this.isCashPayment) {
            if(this.cashFormValidation()) {
              this.storeCash(formData);
            } else {
              this.warningToast('Uang Tidak Cukup !!!');
            }
          } else {
            if(this.creditFormValidation()) {
              this.storeCredit(formData);
            } else {
              this.warningToast('Uang Tidak Cukup !!!');
            }
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
    storeCredit(formData) {
      // for (let value of formData.values()) {
      //   console.log(value);
      // }
      fetch('http://127.0.0.1:8000/api/credit/payment', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        if(result.status == true) {
          this.successToast(result.message);
          this.successToastConfirmation('Pembayaran Berhasil !!!');
          this.$router.push({ name: 'invoice', params: { id: result.data.kode_kredit } });
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
    creditFormValidation() {
      let minUangMuka = this.payment.credit.min_uang_muka;
      let uangMuka = $('input#uang_muka').val().replace(/[^,\d]/g, '');
      if(uangMuka.length != 0 && parseInt(uangMuka) >= minUangMuka) {
        this.errors = [];
        return true;
      } else {
        this.errors = {
          uang_muka: 'Uang Tidak Cukup',
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
  computed: {
    isCashPayment() {
      return this.open;
    },
  }
}
</script>

<style>

</style>