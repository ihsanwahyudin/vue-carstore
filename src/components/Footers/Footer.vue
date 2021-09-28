<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1f5f9" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
  <footer class="relative bg-gray-100 pt-8 pb-6 px-8 flex justify-between">
    <span>
      &copy; 2021 Muhammad Ihsan Wahyudin
    </span>
    <span>
      <box-icon name='instagram' type='logo' ></box-icon>
      <box-icon name='youtube' type='logo' ></box-icon>
      <box-icon name='twitter' type='logo' ></box-icon>
      <box-icon name='google' type='logo' ></box-icon>
      <box-icon type='logo' name='facebook-circle'></box-icon>
      <box-icon type='logo' name='github'></box-icon>
    </span>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
box-icon {
  margin: 0 .5rem 0 .5rem;
}
</style>
