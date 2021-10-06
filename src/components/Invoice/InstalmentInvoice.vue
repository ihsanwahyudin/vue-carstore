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
                <p class="font-sm-3 m-0"><strong>Nomor Faktur</strong> : <span class="font-blue">2021/10/04/{{ $route.params.id }}</span> </p>
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
                    <p>Ihsan</p>
                  </div>
                  <div class="item">
                    <p>14 sept 2021</p>
                  </div>
                  <div class="item">
                    <p>14 sept 2021 - 15 okt 2021</p>
                  </div>
                  <div class="item">
                    <p>Cianjur</p>
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
                    Avanza
                  </div>
                  <div class="item">
                    BC
                  </div>
                  <div class="item">
                    AVA2021001
                  </div>
                  <div class="item">
                    Warni
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
                    Rp. 50.000.000
                  </div>
                  <div class="item">
                    1 / 12 Bulan
                  </div>
                  <div class="item">
                    Rp. 100.000.000
                  </div>
                  <div class="item">
                    Rp. 1.500.000 / Bulan
                  </div>
                  <div class="item">
                    Rp. + 1.000.000
                  </div>
                  <div class="item">
                    Rp. 92.000.000
                  </div>
                  <div class="item">
                    Rp. 20.000.000
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
export default {

}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.brand {
  color: rgba(79, 70, 229, 1);
  font-size: 2rem;
}

.my-font-lg {
  font-size: 2rem;
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