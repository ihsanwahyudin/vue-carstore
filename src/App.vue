<template>
  <!-- <div id="app"> -->
    <router-view />
  <!-- </div> -->
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

.logo-style {
  font-family: 'Lobster', cursive;
}

.border-emerald-500 {
  border-color: rgba(16, 185, 129, 1);
}

.border-emerald-600 {
  background-color: rgba(5, 150, 105, 1);
}

.text-emerald {
  color: rgba(16, 185, 129, 1);
}

.bg-emerald-500 {
  background-color: rgba(16, 185, 129, 1);
}

.bg-emerald-600 {
  background-color: rgba(5, 150, 105, 1);
}

.text-emerald-500 {
  color: rgba(16, 185, 129, 1);
}

.text-emerald-600 {
  color: rgba(5, 150, 105, 1);
}

.ring-emerald-500:focus {
  border-color: rgba(16, 185, 129, 1);
}

.ring-emerald-600:focus {
  color: rgba(5, 150, 105, 1);
}

.nav-link-dropdown.active {
  color: rgba(16, 185, 129, 1);
}

.hover\:text-emerald-500:hover {
  color: rgba(16, 185, 129, 1);
}

.hover\:text-emerald-600:hover {
  color: rgba(5, 150, 105, 1);
}

.hover\:bg-emerald-500:hover {
  background-color: rgba(16, 185, 129, 1);
}
.hover\:bg-emerald-600:hover {
  background-color: rgba(5, 150, 105, 1);
}
.hover\:border-emerald-500:hover {
  border-color: rgba(16, 185, 129, 1);
}
.hover\:border-emerald-600:hover {
  border-color: rgba(5, 150, 105, 1);
}
</style>