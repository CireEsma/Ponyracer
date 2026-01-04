<template>
  <Navbar />
  <main class="container">
    <h1>Ponyracer</h1>
    <Races />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Races from './views/Races.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar: Navbar,
    Races: Races
  }
});
</script>

<style scoped>
.container {
  margin-top: 70px;
}
</style>
