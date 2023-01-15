<template>
  <div class="mt-4 max-w-sm mx-auto text-center card">
    <p class="mt-4 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-4 text-6xl ">Oooops.</p>
    <p class="mt-4">{{ error.message }}</p>
    <button class="btn my-4" @click="handleClearError">Go Home...</button>
  </div>

</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>
