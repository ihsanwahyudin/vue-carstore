<template>
  <div>{{ $route.params.id }}</div>
  <form action="Upload.php" method="post" @submit="upload" >
    <input type="file" name="picture" id="testUpload">
    <button type="submit">Upload</button>
  </form>
</template>

<script>
export default {
  mounted() {
    
  },
  data: function() {
    return {
      file: null,
      filename: '',
    }
  },
  components: {
    
  },
  methods: {
    upload(e) {
      e.preventDefault();
      this.file = e.target[0].files[0];
      // this.filename = this.file
      console.info(this.file);
      // storage.ref('')
    }
  }
}
</script>

<style scoped>

</style>