
<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container p-4 flex justify-between">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="bg-gradient-to-b from-blue-100 to-white-100">
      <div class="container p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #3490DC;
}
</style>
