<template>
  <div id="modalCreate" class="hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="btn-toggle-create fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        
        <form action="" method="POST" enctype="multipart/form-data">
          <section class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <span class="w-full">
                <h2 class="text-2xl mb-3">Add new Car</h2>
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Merk</label>
                <input name="merk" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text">
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Type</label>
                <input name="type" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="text">
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Warna</label>
                <input name="warna" class="w-10 h-10 p-1 border rounded-md focus:outline-none focus:ring" type="color">
              </span>
              <span class="w-full text-sm">
                <label class="block mb-1 mx-1" for="">Harga</label>
                <input name="harga_mobil" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="number">
              </span>
              <span>
                <span class="block">
                  Gambar
                </span>
                <label for="image-create" class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="image-create" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="image-create" name="gambar" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </label>
              </span>
          </section>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
              Submit
            </button>
            <button type="button" class="btn-toggle-create mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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

}
</script>

<style>

</style>