<template>
  <div>
    <!-- <IndexNavbar v-on:toggle-cart="toggleCart($event)" /> -->
    <Cart />
    <section class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="bg-white mb-48">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div class="flex items-center">
                  <a class="mr-2 text-sm font-medium text-gray-900">
                    Store
                  </a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li class="text-sm">
                <a aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
                  {{ $route.params.kodemobil }}
                </a>
              </li>
            </ol>
          </nav>

          <!-- Image gallery -->
          <section>
            <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
              <div class="main-img w-full rounded-lg overflow-hidden">
                <img id="main-img" :src="product.images[0].src" :alt="product.images[0].alt" class="w-full h-full object-center object-cover" />
              </div>
              <!-- <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img :src="product.images[1].src" :alt="product.images[1].alt" class="w-full h-full object-center object-cover" />
                </div>
                <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img :src="product.images[2].src" :alt="product.images[2].alt" class="w-full h-full object-center object-cover" />
                </div>
              </div>
              <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <img :src="product.images[3].src" :alt="product.images[3].alt" class="w-full h-full object-center object-cover" />
              </div> -->
            </div>
            <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex flex-wrap gap-2">
              <div class="flex-grow h-32 rounded-lg overflow-hidden my-5 border-2 hover:border-emerald-500">
                <img v-on:click="previewToMain" :src="product.images[0].src" class="w-full h-full object-center object-cover" />
              </div>
              <div class="flex-grow h-32 rounded-lg overflow-hidden my-5 border-2 hover:border-emerald-500 ">
                <img v-on:click="previewToMain" src="https://images.bisnis-cdn.com/thumb/posts/2021/07/12/1416811/toyota-rush1.jpg?w=744&h=465" class="w-full h-full object-center object-cover" />
              </div>
              <div class="flex-grow h-32 rounded-lg overflow-hidden my-5 border-2 hover:border-emerald-500">
                <img v-on:click="previewToMain" src="https://statik.tempo.co/data/2020/10/16/id_974106/974106_720.jpg" class="w-full h-full object-center object-cover" />
              </div>
              <div class="flex-grow h-32 rounded-lg overflow-hidden my-5 border-2 hover:border-emerald-500">
                <img v-on:click="previewToMain" :src="product.images[0].src" class="w-full h-full object-center object-cover" />
              </div>
            </div>
          </section>

          <!-- Product info -->
          <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {{ product.name }}
              </h1>
            </div>

            <!-- Options -->
            <div class="mt-4 lg:mt-0 lg:row-span-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">{{ product.price }}</p>

              <!-- Reviews -->
              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4,]" :key="rating" :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                  <a :href="reviews.href" class="ml-3 text-sm font-medium text-emerald-600 hover:text-emerald-500">{{ reviews.totalCount }} reviews</a>
                </div>
              </div>

              <form class="mt-10">
                <!-- Colors -->
                <div>
                  <h3 class="text-sm text-gray-900 font-medium">Color</h3>

                  <RadioGroup v-model="selectedColor" class="mt-4">
                    <RadioGroupLabel class="sr-only">
                      Choose a color
                    </RadioGroupLabel>
                    <div class="flex items-center space-x-3">
                      <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                        <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                          <RadioGroupLabel as="p" class="sr-only">
                            {{ color.name }}
                          </RadioGroupLabel>
                          <span aria-hidden="true" :class="[color.class, 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                        </div>
                      </RadioGroupOption>
                    </div>
                  </RadioGroup>
                </div>

                <!-- Sizes -->
                <div class="mt-10">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm text-gray-900 font-medium">Level</h3>
                    <a href="#" class="text-sm font-medium text-emerald-600 hover:text-emerald-500">Engine</a>
                  </div>

                  <div>
                    <input type="radio" id="standar" name="fav_language" value="standar">
                    <label for="standar">standar</label>
                    <input type="radio" id="medium" name="fav_language" value="medium">
                    <label for="medium">medium</label>
                    <input type="radio" id="performa" name="fav_language" value="performa">
                    <label for="performa">performa</label>
                  </div>
                </div>

                <button type="submit" class="mt-10 w-full bg-emerald-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:text-white">Add to Cart</button>
              </form>
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <!-- Description and details -->
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">{{ product.description }}</p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                    <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                      <span class="text-gray-600">{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">{{ product.details }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

// import IndexNavbar from "../components/Navbars/IndexNavbar.vue"
import Footer from "../components/Footers/Footer.vue"
import Cart from '../components/Cart/Cart.vue'

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    StarIcon,
    // IndexNavbar,
    Footer,
    Cart,
  },
  setup() {
    const selectedColor = ref(product.colors[0])
    const selectedSize = ref(product.sizes[2])

    return {
      product,
      reviews,
      selectedColor,
      selectedSize,
    }
  },
  data: function() {
    return {
      isSelectedImg: false,
      // cartIsActive: false,
    }
  },
  methods: {
    previewToMain(e) {
      let selectedImgUrl = e.target;
      let mainImg = document.getElementById('main-img');
      mainImg.src = selectedImgUrl.src;
      let allImg = selectedImgUrl.closest('div').parentNode.querySelectorAll('.flex-grow');
      for(let i = 0; i < allImg.length; i++) {
        allImg[i].classList.remove('border-emerald-500')
      }
      selectedImgUrl.closest('div').classList.add('border-emerald-500');
    },
    // toggleCart(event) {
    //   this.cartIsActive = event;
    //   console.info(event);
    // }
  }
}

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }
</script>

<style scoped>
.main-img {
  height: 35vh;
}

@media (min-width:768px) {
  .main-img {
    height: 60vh;
  }
}
</style>