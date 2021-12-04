<template>
  <div>
    <BlobMenu />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
  background: #41295a;
  background: -webkit-linear-gradient(to right, #41295a, #2f0743);
  background: linear-gradient(to right, #41295a, #2f0743);
}
</style>
<script>
import BlobMenu from './components/BlobMenu.vue'

export default {
  name: 'LayoutDefault',

  components: {
    BlobMenu
  }
}
</script>
