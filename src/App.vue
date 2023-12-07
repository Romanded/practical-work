<template>
  <div id="app">
    <header-component/>
      <router-view/>
    <footer-component/>
  </div>
</template>

<script>

import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {FooterComponent, HeaderComponent},
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Barlow, sans-serif;
  background-size: 100% 100%;
}

body {
  width: 100%;
  min-height: 100vh;
  background: #1A1A1A;
}

button {
  border: none;
}

.page-body {
  max-width: 1760px;
  padding: 0 80px;
  margin: 100px auto 0;
}

a {
  text-decoration: none;
}
</style>
