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
      <div class="bg-white py-7 px-10 rounded-md shadow">
        <form class="space-y-6" method="POST" enctype="multipart/form-data" v-on:submit="storeData">
          <section class="flex flex-col gap-4">
            <span class="w-full text-sm">
              <label class="block text-gray-600 font-bold mb-1" for="">Email Address</label>
              <input v-model="formData.email" name="email" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="email" :class="{'border-red-500': errors.email, 'border-indigo-400': !errors.email}" autofocus>
              <small v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</small>
            </span>
            <span class="w-full text-sm">
              <label class="block text-gray-600 font-bold mb-1" for="">Password</label>
              <input v-model="formData.password" name="password" class="border w-full p-2 rounded-md focus:outline-none focus:ring" type="password" :class="{'border-red-500': errors.password, 'border-indigo-400': !errors.password}" autofocus>
              <small v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</small>
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
  data: () => {
    return {
      formData: {
        email: '',
        password: '',
      },
      errors: [],
    }
  },
  components: {
    // LockClosedIcon,
  },
}
</script>