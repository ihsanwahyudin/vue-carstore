<template>
  <nav class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-white shadow">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full py-3 flex-grow relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <router-link to="/" class="my-text-style text-emerald-500 text-2xl font-bold leading-relaxed inline-block mr-4 whitespace-nowrap">
            CarStore
        </router-link>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="setNavbarOpen">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="hidden lg:flex justify-center items-center text-center">
          <router-link to="/" class="nav-link py-5 px-2">Home</router-link>
          <router-link to="/store" class="nav-link py-5 px-2">Store</router-link>
          <router-link to="/cart" class="nav-link py-5 px-2">Cart</router-link>
      </div>
      <div class="py-3 lg:flex flex-grow items-center" :class="[navbarOpen ? 'block' : 'hidden']" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <!-- <index-dropdown /> -->
          </li>
          <li class="flex items-center">
            <router-link to="/" class="lg:hidden nav-link-dropdown pb-2 px-3">Home</router-link>
          </li>

          <li class="flex items-center">
            <router-link to="/store" class="lg:hidden nav-link-dropdown pb-2 px-3">Store</router-link>
            
          </li>

          <li class="flex items-center">
            <router-link to="/cart" class="lg:hidden nav-link-dropdown pb-2 px-3">Cart</router-link>
            
          </li>

          <li class="flex items-center">
            <router-link to="/login"
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              
            >
            Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    // IndexDropdown,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}

.my-text-style {
  font-family: 'Lobster', cursive;
}

.border-emerald-500 {
  border-color: rgba(16, 185, 129, 1);
}

.nav-link.active {
  border-bottom: 2px solid rgba(16, 185, 129, 1);
  color: rgba(16, 185, 129, 1);
  box-sizing: border-box;
}

.nav-link-dropdown.active {
  color: rgba(16, 185, 129, 1);
}
</style>