<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
            <form action="" method="POST" enctype="multipart/form-data" v-on:submit="storeData" id="formNewCustomer">
              <section class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <span class="w-full">
                    <h2 class="text-2xl mb-3">Pelanggan Baru</h2>
                  </span>
                  <span class="w-full text-sm">
                    <label class="block mb-1 mx-1" for="">No KTP</label>
                    <input v-model="dataCustomer.ktp_pembeli" name="ktp_pembeli" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.ktp_pembeli, 'border-blue-300': !errors.ktp_pembeli}">
                    <small v-if="errors.ktp_pembeli" class="text-red-500">{{ errors.ktp_pembeli[0] }}</small>
                  </span>
                  <span class="w-full text-sm">
                    <label class="block mb-1 mx-1" for="">Nama</label>
                    <input v-model="dataCustomer.nama_pembeli" name="nama_pembeli" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.nama_pembeli, 'border-blue-300': !errors.nama_pembeli}">
                    <small v-if="errors.nama_pembeli" class="text-red-500">{{ errors.nama_pembeli[0] }}</small>
                  </span>
                  <span class="w-full text-sm">
                    <label class="block mb-1 mx-1" for="">No Telp</label>
                    <input v-model="dataCustomer.telp_pembeli" name="telp_pembeli" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text" :class="{'border-red-500': errors.telp_pembeli, 'border-blue-300': !errors.telp_pembeli}">
                    <small v-if="errors.telp_pembeli" class="text-red-500">{{ errors.telp_pembeli[0] }}</small>
                  </span>
                  <span class="w-full text-sm">
                    <label class="block mb-1 mx-1" for="">Alamat</label>
                    <textarea name="alamat_pembeli" class="border w-full p-2 rounded-md focus:outline-none focus:ring" :class="{'border-red-500': errors.alamat_pembeli, 'border-blue-300': !errors.alamat_pembeli}"></textarea>
                    <small v-if="errors.alamat_pembeli" class="text-red-500">{{ errors.alamat_pembeli[0] }}</small>
                  </span>
              </section>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Submit
                </button>
                <button type="button" @click="toggleModal(false)" class="btn-toggle-create mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'

export default {
  emits: ['sendDataCustomer'],
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
  },
  data: function() {
    return {
      open: false,
      dataId: null,
      dataCustomer: {
        ktp_pembeli: '',
        nama_pembeli: '',
        telp_pembeli: '',
        alamat_pembeli: '',
      },
      errors: [],
    }
  },
  methods: {
    toggleModal(isActive) {
      this.open = ref(isActive);
    },
    searchData(e) {
      let val = e.target.value.toLowerCase();
      $("#cars-table tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
      });
    },
    storeData(e) {
      e.preventDefault();
      let form = document.querySelector('#formNewCustomer');
      let formData = new FormData(form);
      fetch('https://backend-carstore.herokuapp.com/api/customer', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        if(result.status == true) {
          this.toggleModal(false);
          this.clearform();
          this.$emit('sendDataCustomer', result.data);
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: 'success',
            title: result.message
          });
        } else {
          this.errors = result.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    clearform() {
      this.dataCustomer.ktp_pembeli = '';
      this.dataCustomer.nama_pembeli = '';
      this.dataCustomer.telp_pembeli = '';
      this.dataCustomer.alamat_pembeli = '';
    },
  }
}
</script>