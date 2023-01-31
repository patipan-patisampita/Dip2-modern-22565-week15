<script lang="ts" setup></script>
<template>
  <nav class="py-2 text-white bg-gray-900 border-b border-gray-700">
    <div class="container flex flex-col items-center justify-center gap-3 px-4 py-2 mx-auto sm:px-0 sm:flex-row sm:gap-0 sm:justify-between">
      <NuxtLink to="/" class="font-medium text-1xl">Nuxt 3 Blog</NuxtLink>
      <ul class="flex items-center justify-end gap-5">
        <li>
          <NuxtLink to="/" class="text-gray-300 text-1xl hover:text-gray-50">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="text-gray-300 text-1xl hover:text-gray-50">Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-gray-300 text-1xl hover:text-gray-50">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a.router-link-active {
  color: teal;
}
</style>