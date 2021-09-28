<template>
  <div>
    <IndexNavbar />
    <section class="mt-48 pb-40">
      <div class="container mx-auto px-4">
        <div class="h-64 grid grid-cols-4 gap-2">
          <div class="bg-green-200">1</div>
          <div class="bg-green-200">2</div>
          <div class="bg-green-200">3</div>
          <div class="bg-green-200">4</div>
          <div class="bg-green-200">5</div>
          <div class="bg-green-200">6</div>
          <div class="bg-green-200">7</div>
          <div class="bg-green-200">8</div>
          <!-- ... -->
          <div class="bg-green-200">9</div>
          <div class="bg-green-200">10</div>
          <div class="bg-green-200">11</div>
          <div class="bg-green-200">12</div>
        </div>
        <h1>{{ $route.params.kodemobil }}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus inventore debitis possimus aspernatur sit neque libero nostrum, nisi pariatur saepe ipsa nobis, quia soluta consectetur eaque distinctio nam. Voluptates ducimus ipsum cumque. Amet deleniti iure nam! Expedita consectetur tempore asperiores consequatur recusandae vitae commodi, ad id perspiciatis nihil, deleniti fugit?</p>
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
  }
}
</script>

<style>

</style>