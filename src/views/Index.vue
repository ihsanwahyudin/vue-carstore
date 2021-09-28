<template>
  <IndexNavbar/>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:h-screen">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
      <div class="mt-32">
        <h2 class="font-bold text-gray-600 lg:text-4xl text-2xl">Vue Notus - A beautiful extension for Tailwind CSS.</h2>
        <p class="text-gray-500 text-md">Vue Notus is Free and Open Source. It does not change any of the CSS from Tailwind CSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
        <div class="my-10">
          <router-link to="/" class="bg-emerald-500 px-4 py-2 rounded text-white">Go to store</router-link>
          <router-link to="/" class="bg-gray-700 px-4 py-2 rounded text-white mx-2">Learn About us</router-link>
        </div>
      </div>
      <div class="hidden lg:block lg:absolute lg:z-0 lg:right-0">
        <img class="lg:h-screen w-full object-cover" :src="ImagePattern">
      </div>
    </div>
  </section>
  <section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1f5f9" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div class="bg-gray-100">
      <section class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div class="group relative">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="text-sm text-gray-500">
            <router-link to="/">
              <span class="absolute inset-0" />
              Avansa
            </router-link>
          </h3>
          <p class="text-base font-semibold text-gray-900">Best Classic</p>
        </div>
        <div class="col-span-2">
          <div>
            <div class="w-16 h-16 bg-white rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import IndexNavbar from "../components/Navbars/IndexNavbar.vue"
import ImagePattern from "../assets/img/pattern_vue.png"
export default {
  mounted() {
    // console.info(ImagePattern);
  },
  data: function (){
    return {
      ImagePattern,
    }
  },
  components: {
    IndexNavbar
  },
}
</script>

<style>

</style>