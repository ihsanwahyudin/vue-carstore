<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            contact owner to get your account
          </a>
        </p>
      </div>
      <div class="bg-white py-7 px-10 rounded-md shadow" id="formLogin" @submit="login">
        <form action="" method="post">
          <section class="flex flex-col gap-4">
            <span class="w-full text-sm">
              <label class="block text-gray-600 font-bold mb-1" for="">Email Address</label>
              <input type="email" name="email" id="email" class="border w-full p-2 rounded-md focus:outline-none focus:ring" :class="{'border-red-500': errors.email, 'border-indigo-400': !errors.email}" autofocus>
              <small v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</small>
            </span>
            <span class="w-full text-sm">
              <label class="block text-gray-600 font-bold mb-1" for="">Password</label>
              <input name="password" id="password" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="password" :class="{'border-red-500': errors.password, 'border-indigo-400': !errors.password}" autocomplete="password" autofocus>
            </span>
            <div class="flex items-center justify-between">
              <div class="text-sm">
                <router-link to="/register" class="font-medium hover:text-indigo-600 hover:text-indigo-500 focus:ring focus:outline-none rounded-md">
                  I dont have account
                </router-link>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium hover:text-indigo-600 hover:text-indigo-500 focus:ring focus:outline-none rounded-md">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button type="submit" class="w-full bg-indigo-600 rounded-md py-2 px-4 text-white focus:ring focus:outline-none rounded-md" autofocus>
              Sign In
            </button>
          </section>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/solid'

export default {
  mounted() {
    // this.getDataUser()
    // this.errorToast('Login Gagal');
  },
  data: () => {
    return {

      errors: [],
    }
  },
  components: {
    // LockClosedIcon,
  },
  methods: {
    login(e) {
      e.preventDefault();
      let form = document.querySelector('#formLogin form');
      let formData = new FormData(form);
      for(var pair of formData.entries()){
        console.log(pair[0], pair[1]);
      }
      
      fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        body: formData,
        // credentials: 'include',
        // mode: 'no-cors',
        // headers : { 
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json',
        //   'X-Requested-With': 'XMLHttpRequest',
        // }
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        this.setCookie('jwt', result.token, 1);
        this.getDataUser(this.getCookie('jwt'));
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    getDataUser(token) {
      fetch('http://127.0.0.1:8000/api/user', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(result => {
        console.info('Success:', result);
        if(result.status) {
          this.$router.push('/admin');
        } else {
          this.errorToast('Kamu Gagal Login !!!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    errorToast(message) {
      this.$swal.fire({
        icon: 'error',
        title: message,
        confirmButtonText: 'Try Again',
      })
    },
  }
}
</script>