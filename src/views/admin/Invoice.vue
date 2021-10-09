<template>
  <header class="bg-white shadow sticky top-0">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end">
      <button class="bg-indigo-600 text-white px-4 py-2 rounded-md" onclick="window.print();">Print</button>
    </div>
  </header>
  <CashInvoice ref="cashInvoice" as="div" :class="{'hidden': invoiceActive.cash}" />
  <CreditInvoice ref="creditInvoice" as="div" :class="{'hidden': invoiceActive.credit}" />
  <InstalmentInvoice ref="instalmentInvoice" as="div" :class="{'hidden': invoiceActive.instalment}" />
</template>

<script>
import CashInvoice from '../../components/Invoice/CashInvoice.vue';
import CreditInvoice from '../../components/Invoice/CreditInvoice.vue';
import InstalmentInvoice from '../../components/Invoice/InstalmentInvoice.vue';
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
  props: ['dataMobil', 'dataCustomer', 'dataCredit'],
  emits: ['sendData'],
  mounted() {
    let id = this.$route.params.id;
    this.getDataInvoice(id);
    // console.info(forestRef);
    // this.getImgUrl('images/1.png');
  },
  data: function() {
    return {
      file: null,
      filename: '',
      invoiceActive: {
        cash: true,
        credit: true,
        instalment: true,
      }
    }
  },
  components: {
    CashInvoice,
    CreditInvoice,
    InstalmentInvoice,
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
    },
    getDataInvoice(id) {
      let kode = id.substr(0, 1);
      switch(kode) {
        case 'C':
          this.$refs.cashInvoice.getInvoiceCash(id);
          break;
        case 'K':
          this.$refs.creditInvoice.getInvoiceCredit(id);
          break;
        case 'A':
          this.$refs.instalmentInvoice.getInvoiceInstalment(id);
          break;
      }
    },
    showInvoice(status) {
      switch(status) {
        case 'cash':
          this.invoiceActive.cash = false;
          break;
        case 'credit':
          this.invoiceActive.credit = false;
          break;
        case 'instalment':
          this.invoiceActive.instalment = false;
          break;
        default:
      }
    }
  }
}
</script>

<style>

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
<style scoped>
* {
  font-family: 'Poppins', sans-serif;
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
</style>