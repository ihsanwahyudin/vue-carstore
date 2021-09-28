<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
  /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
} */

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 1);
  border-radius: 10px;
}
</style>