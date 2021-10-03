<template>
  <div>{{ $route.params.id }}</div>
</template>

<script>
import firebase from '../../firebase';
// Get the default bucket from a custom firebase.app.App
let storage = firebase.storage();
let storageRef = storage.ref();
let ref = storageRef.child('images')
let imageRef = storageRef.child('48.png');
// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// Create a reference to the file whose metadata we want to retrieve
var forestRef = storageRef.child('images/48.png');

// Get metadata properties
// forestRef.getMetadata().then(function(metadata) {
//   // Metadata now contains the metadata for 'images/forest.jpg'
// }).catch(function(error) {
//   // Uh-oh, an error occurred!
// });

export default {
  mounted() {
    // console.info(forestRef);
    // this.getImgUrl('images/1.png');
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
      var file = this.file; // use the Blob or File API
      // ref.put(file).then(function(snapshot) {
      //   console.log('Uploaded a blob or file!');
      //   console.log(snapshot);
      // });
      let metadata = {
        contentType: 'image/jpeg'
      }
      storageRef.child('images/' + file.name).put(file, metadata).then((snapshot) => {
        console.log(snapshot);
        this.getImgUrl(snapshot.ref.fullPath);
      });
    },
    getImgUrl(filename) {
      storage.ref(filename).getDownloadURL()
      .then((url) => {
        console.info(url);
        this.filename = url;
      })
    }
  }
}
</script>

<style scoped>

</style>