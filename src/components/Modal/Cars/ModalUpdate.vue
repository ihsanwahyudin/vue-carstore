<template>
  <div id="modalUpdate" class="hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >
      <div class="btn-toggle-create fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" v-on:click="modalUpdate"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        
        <form action="" method="POST" enctype="multipart/form-data" v-on:submit="updateData">
          <input type="hidden" name="status" value="store">
          <section class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <span class="w-full">
                <h2 class="text-2xl mb-3">Update Car</h2>
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Merk</label>
                <input name="merk" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.merk, 'border-blue-300': !errors.merk}" :value="dataMobilByIndex.merk">
                <small v-if="errors.merk" class="text-red-500">{{ errors.merk[0] }}</small>
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Type</label>
                <input name="type" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.type, 'border-blue-300': !errors.type}" :value="dataMobilByIndex.type">
                <small v-if="errors.type" class="text-red-500">{{ errors.type[0] }}</small>
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Warna</label>
                <input name="warna" class="w-10 h-10 mx-2 border rounded-md focus:outline-none focus:ring" type="color" :value="dataMobilByIndex.warna">
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Harga</label>
                <input name="harga_mobil" class="format-number disable-letter border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.harga_mobil, 'border-blue-300': !errors.harga_mobil}" :value="dataMobilByIndex.harga_mobil">
                <small v-if="errors.harga_mobil" class="text-red-500">{{ errors.harga_mobil[0] }}</small>
              </span>
              <span>
                <span class="block">
                  Gambar
                </span>
                <div class="input-file border rounded-md overflow-hidden" :class="{'border-red-500': errors.gambar, 'border-blue-300': !errors.gambar}">
                  <input type="file" name="gambar" class="dropify rounded-md" :data-default-file="'http://localhost:8000/images/'+dataMobilByIndex.gambar" data-allowed-file-extensions="jpg jpeg png" />
                </div>
                <small v-if="errors.gambar" class="text-red-500">{{ errors.gambar[0] }}</small>
              </span>
          </section>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
              Submit
            </button>
            <button v-on:click="modalUpdate" type="button" class="btn-toggle-create mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataMobilByIndex'],
  mounted() {
    $('.dropify').dropify();
  },
  data: function() {
    return {
      formData: {
        merk: '',
        type: '',
        warna: '',
        harga: '',
        gambar: '',
      },
      errors: [],
    }
  },
  methods: {
    modalUpdate() {
      document.getElementById('modalUpdate').classList.toggle('hidden');
      document.getElementById('modalUpdate').classList.toggle('active');
    },
    updateData(e) {
      e.preventDefault();
      let form = document.querySelector('#modalUpdate form');
      let formData = new FormData(form);
      fetch('http://127.0.0.1:8000/api/cars', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        if(result.status == true) {
          this.modalUpdate();
          this.$emit('get-data');
          this.clearform();
        } else {
          this.errors = result.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    clearform() {
      this.formData.merk = '';
      this.formData.type = '';
      this.formData.warna = '';
      this.formData.harga = '';
      $('#modalUpdate form .input-file').html(`<input type="file" name="gambar" class="dropify rounded-md" data-allowed-file-extensions="jpg jpeg png"/>`);
      $('.dropify').dropify();
      this.clearFormError();
    },
    clearFormError() {
      this.errors = [];
    }
  }
}
</script>

<style>

</style>