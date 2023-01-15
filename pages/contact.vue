<template>
  <main>
    <div>
      <p class="pb-4">Please feel free to reach out to me on any of these platforms. Email being best.</p>
      <ul>
        <li><a href="mailto:josephfnevin@gmail.com"><Icon name="ic:round-email"/>Email</a></li>
        <li><a href="https://www.linkedin.com/in/joseph-nevin-2a0b56113/"><Icon name="uil:linkedin"/>LinkedIn</a></li>
        <li><a href="https://github.com/j0zsef"><Icon name="uil:github"/>GitHub</a></li>
        <li><a href="https://twitter.com/JozsefNevin"><Icon name="uil:twitter"/>Twitter</a></li>
      </ul>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Joseph Nevin Contact' }
  ]
})
</script>

<script>
export default {
  name: "contact.vue"
}
</script>

<style scoped>
svg {
  position: relative;
  bottom: 1px;
  right: 1px;
}
</style>
