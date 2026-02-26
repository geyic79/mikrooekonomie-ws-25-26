<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style scoped>
.app-main {
  min-height: calc(100vh - 64px);
  padding-bottom: 3rem;
  font-size: var(--content-font-size, 16px);
}
</style>
