<template>
  <Navbar />
  <main class="container">
    <h1>Ponyracer</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar: Navbar
  }
});
</script>

<style scoped>
.container {
  margin-top: 70px;
}
</style>
