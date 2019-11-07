<template>
  <div id="app">
    <Navbar />
    <Apresentacao />
    <Historia />
    <Discografia />
    <Musicas />
  </div>
</template>

<script>
import Apresentacao from './components/Apresentacao.vue'
import Navbar from './components/Main/Navbar.vue'
import Discografia from './components/Discografia.vue'
import Musicas from './components/Musicas.vue'
import Historia from './components/Historia.vue'

export default {
  name: 'app',
  components: {
    Apresentacao,
    Navbar,
    Discografia,
    Musicas,
    Historia
  }
}
</script>

<style lang="scss">
@import 'assets/css/bootstrap.min.css';
@import 'assets/css/main.css';
</style>
