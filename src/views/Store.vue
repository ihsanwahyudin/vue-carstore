<template>
  <div>
    <IndexNavbar />
    <section class="mt-10 md:mt-5 pb-40 relative">
      <div class="container px-4 mx-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 class="text-2xl font-extrabold text-gray-900">Collections</h2>
                <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div v-for="callout in callouts" :key="callout.name" class="group mb-6 relative overflow-hidden">
                    <router-link to="/store/LAM2021001">
                      <div class="img-content relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="absolute py-3 px-6 z-10 top-0 left-0 bg-white rounded-lg">
                        <h3 class="text-sm text-gray-500">
                          <a :href="callout.href">
                            <span class="absolute inset-0" />
                            {{ callout.name }}
                          </a>
                        </h3>
                        <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
                      </div>
                    </router-link>
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
import IndexNavbar from "../components/Navbars/IndexNavbar.vue"
import Footer from "../components/Footers/Footer.vue"
export default {
  components: {
    IndexNavbar,
    Footer,
  },
  setup() {
    return {
      callouts,
    }
  },
}
const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
</script>

<style>
.img-content {
  height: 30vh;
}
@media (min-width: 768px) {
  .img-content {
    height: 60vh;
  }
}
</style>