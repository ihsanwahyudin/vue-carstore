<template>
  <section class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="mt-10 sm:mt-0">
      <div class="paper-container shadow border overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="container px-5">
            <div class="brand">
              <h1 style="font-family: 'Lobster', cursive;">CarStore</h1>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="font-sm-3 m-0"><strong>Nomor Faktur</strong> : <span class="font-blue">{{ convertDate(dataInvoice.cash_tgl) + '/' + dataInvoice.kode_cicilan }}</span> </p>
                <p class="font-sm-3 mt-5 text-secondary"><small>Atas Nama :</small></p>
              </div>

              <section class="container-invoice">
                <div class="left-side">
                  <div class="item">
                    <strong>Pembeli</strong>
                  </div>
                  <div class="item">
                    <strong>Tanggal Pembayaran</strong>
                  </div>
                  <div class="item">
                    <strong>Tanggal Perpanjangan</strong>
                  </div>
                  <div class="item">
                    <strong>Alamat</strong>
                  </div>
                </div>
                <div class="right-side">
                  <div class="item">
                    <p>{{ dataInvoice.nama_pembeli }}</p>
                  </div>
                  <div class="item">
                    <p>{{ convertDateString(dataInvoice.tgl_cicilan) }}</p>
                  </div>
                  <div class="item">
                    <p>{{ convertDateString(dataInvoice.from) }} - {{ convertDateString(dataInvoice.to) }}</p>
                  </div>
                  <div class="item">
                    <p>{{ dataInvoice.alamat_pembeli }}</p>
                  </div>
                </div>
              </section>

              <hr class="my-3">
              
              <section class="container-invoice">
                <div class="left-side">
                  <div class="item">
                    Merk
                  </div>
                  <div class="item">
                    Type
                  </div>
                  <div class="item">
                    Kode Mobil
                  </div>
                  <div class="item">
                    Warna
                  </div>
                </div>
                <div class="right-side">
                  <div class="item">
                    {{ dataInvoice.merk }}
                  </div>
                  <div class="item">
                    {{ dataInvoice.type }}
                  </div>
                  <div class="item">
                    {{ dataInvoice.kode_mobil }}
                  </div>
                  <div class="item">
                    {{ dataInvoice.warna }}
                  </div>
                </div>
              </section>

              <hr class="my-3">

              <section class="container-invoice">
                <div class="left-side">
                  <div class="item">
                    Harga Mobil
                  </div>
                  <div class="item">
                    Cicilan Ke
                  </div>
                  <div class="item">
                    Sisa Cicilan
                  </div>
                  <div class="item">
                    Nilai Cicilan Bulanan
                  </div>
                  <div class="item">
                    Biaya Tambahan
                  </div>
                  <div class="item">
                    Jumlah Cicilan
                  </div>
                  <div class="item">
                    Kembalian
                  </div>
                </div>
                <div class="right-side">
                  <div class="item">
                    Rp. {{ dataInvoice.harga_mobil }}
                  </div>
                  <div class="item">
                    {{ dataInvoice.cicilan_ke }} / {{ dataInvoice.lama_cicilan }} Bulan
                  </div>
                  <div class="item">
                    Rp. {{ dataInvoice.cicilan_sisa_harga }}
                  </div>
                  <div class="item">
                    Rp. {{ dataInvoice.nilai_cicilan }} / Bulan
                  </div>
                  <div class="item">
                    Rp. + {{ dataInvoice.denda }}
                  </div>
                  <div class="item">
                    Rp. {{ dataInvoice.jml_cicilan }}
                  </div>
                  <div class="item">
                    Rp. {{ parseInt(dataInvoice.jml_cicilan) - parseInt(dataInvoice.nilai_cicilan) }}
                  </div>
                </div>
              </section>

              <hr class="my-3">

              <section class="container-invoice">
                <div class="left-side">
                  <div class="item-ttd flex-column">
                    <div class="container-ttd">
                      <div class="head-ttd">
                        Pembeli
                      </div>
                      <div class="body-ttd">

                      </div>
                      <div class="footer-ttd"></div>
                    </div>
                  </div>
                </div>
                <div class="right-side">
                  <div class="item-ttd flex-column">
                    <div class="container-ttd">
                      <div class="head-ttd">
                        <h1 class="my-font-md" style="font-family: 'Lobster', cursive;">CarStore</h1>
                      </div>
                      <div class="body-ttd">

                      </div>
                      <div class="footer-ttd"></div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
          <br>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      dataInvoice: [],
    }
  },
  methods: {
    getInvoiceInstalment(id) {
      fetch('http://localhost:8000/api/invoice/instalment/' + id)
      .then(response => response.json())
      .then(result => {
        this.dataInvoice = result;
        console.info(this.dataInvoice);
        this.$parent.showInvoice('instalment');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    convertDate(time) {
      return moment(time).format('DD/MM/YYYY');
    },
    convertDateString(time) {
      return moment(time).format('DD MMM YYYY');
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.brand {
  color: rgba(79, 70, 229, 1);
  font-size: 2rem;
}

.my-font-lg {
  font-size: 2rem;
}

.my-font-md {
  font-size: 1rem;
}

.text-secondary {
  color: gray;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}

.container-invoice {
  display: grid;
  grid-template-columns: 50% 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.right-side {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 12px;
}

.item-ttd {
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 12px;
}

.container-ttd {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head-ttd {
  min-height: 30px;
  display: flex;
  align-items: center;
}

.body-ttd {
  width: 100px;
  height: 50px;
}

.footer-ttd {
  width: 100px;
  padding: 5px;
  border-bottom: 1px solid black;
}

.flex-column {
  flex-direction: column;
}

.justify-left {
  justify-content: start;
}

.justify-right {
  justify-content: end;
}

@media print {
  .navbar-admin {
    display: none !important;
    visibility: hidden !important;
  }
  
  .brand {
    color: rgba(79, 70, 229, 1);
    font-size: 2rem;
  }

  header {
    display: none !important;
    visibility: hidden !important;
  }

  .paper-container {
    border: 0;
    box-shadow: 0 0 0 transparent;
  }

  .paper-container.shadow {
    box-shadow: none;
  }

  .paper-container.border {
    border: none;
  }
}
</style>