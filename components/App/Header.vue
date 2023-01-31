<script lang="ts" setup></script>
<template>
  <nav class="py-5 text-white bg-gray-900 border-b border-gray-700">
    <div class="container flex flex-col items-center justify-center gap-3 px-4 py-2 mx-auto sm:px-0 sm:flex-row sm:gap-0 sm:justify-between">
      <NuxtLink to="/"
        class="text-xl font-medium">Nuxt 3 Blog</NuxtLink>
      <ul class="flex items-center justify-end gap-5">
        <li>
          <NuxtLink to="/" class="text-xl text-gray-300 hover:text-gray-50">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="text-xl text-gray-300 hover:text-gray-50">Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-xl text-gray-300 hover:text-gray-50">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

ul > li > a {
  color: rgb(209,213,219);
}

ul > li > a.router-link-exact-active {
  color: rgb(56,189,248);
}

a.router-link-active {
  color: teal;
}
</style>