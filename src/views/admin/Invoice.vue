<template>
  <header class="bg-white shadow sticky top-0">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end">
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-md" onclick="window.print();">Print</button>
    </div>
  </header>
  <section class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="mt-10 sm:mt-0">
      <div class="shadow border overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="container px-5">
            <div class="brand">
              <h1 style="font-family: 'Lobster', cursive;">CarStore</h1>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="font-sm-3 m-0"><strong>Nomor Invoice</strong> : <span class="font-blue">INV/2021/10/04/{{ $route.params.id }}</span> </p>
                <p class="font-sm-3 m-0 text-secondary"><small>Atas Nama :</small></p>
                <small>
                  <table class="border-0">
                    <tr>
                      <td><strong>Pembeli</strong></td>
                      <td class="px-3">&nbsp;</td>
                      <td>
                        <p class="font-sm-3 m-0">Ihsan</p>
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Tanggal</strong></td>
                      <td>&nbsp;</td>
                      <td>
                        <p class="font-sm-3 m-0">14 sept 2021</p>
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Alamat</strong></td>
                      <td>&nbsp;</td>
                      <td>
                        <p class="font-sm-3 m-0">Cianjur</p>
                      </td>
                    </tr>
                  </table>
                </small>
              </div>
              <hr class="my-3">
              
              <section class="contain-table-invoice">
                <table class="table-invoice">
                  <thead>
                    <tr>
                      <th>Keterangan</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <body>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </body>
                </table>
              </section>

              </div>
              <div class="row">
                <div class="col-6">&nbsp;</div>
                <div class="col-6">
                  <div class="border border-dark py-2 px-5 rounded d-flex justify-content-between">
                    <span>Total Bayar</span>
                    <span>Rp. 200.000.000</span>
                  </div>
                </div>
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

import firebase from '../../firebase';
// Get the default bucket from a custom firebase.app.App
let storage = firebase.storage();
let storageRef = storage.ref();
let ref = storageRef.child('images')
let imageRef = storageRef.child('48.png');
// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// Create a reference to the file whose metadata we want to retrieve
var forestRef = storageRef.child('images/48.png');

// Get metadata properties
// forestRef.getMetadata().then(function(metadata) {
//   // Metadata now contains the metadata for 'images/forest.jpg'
// }).catch(function(error) {
//   // Uh-oh, an error occurred!
// });

export default {
  mounted() {
    // console.info(forestRef);
    // this.getImgUrl('images/1.png');
  },
  data: function() {
    return {
      file: null,
      filename: '',
    }
  },
  components: {
    
  },
  methods: {
    upload(e) {
      e.preventDefault();
      this.file = e.target[0].files[0];
      var file = this.file; // use the Blob or File API
      // ref.put(file).then(function(snapshot) {
      //   console.log('Uploaded a blob or file!');
      //   console.log(snapshot);
      // });
      let metadata = {
        contentType: 'image/jpeg'
      }
      storageRef.child('images/' + file.name).put(file, metadata).then((snapshot) => {
        console.log(snapshot);
        this.getImgUrl(snapshot.ref.fullPath);
      });
    },
    getImgUrl(filename) {
      storage.ref(filename).getDownloadURL()
      .then((url) => {
        console.info(url);
        this.filename = url;
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
/* .navbar-admin {
  display: none !important;
  visibility: hidden !important;
} */
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

.table-invoice {
  width: 100%;
  background: slateblue;
}

.table-invoice thead {
  width: 100%;
  background: skyblue;
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
}
</style>
<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
.poppins {
  font-family: 'Poppins', sans-serif;
}

.table-invoice tr td, tr th {
  border: 1px solid black;
}
</style>