<script lang="ts" setup></script>
<template>
  <nav class="bg-gray-900 text-white py-2 border-b border-gray-700">
    <div class="container flex flex-col items-center justify-center gap-3 px-4 py-2 mx-auto sm:px-0 sm:flex-row sm:gap-0 sm:justify-between">
      <NuxtLink to="/" class="text-1xl font-medium">Nuxt 3 Blog</NuxtLink>
      <ul class="flex gap-5 items-center justify-end">
        <li>
          <NuxtLink to="/" class="text-1xl text-gray-300 hover:text-gray-50">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="text-1xl text-gray-300 hover:text-gray-50">Categories</NuxtLink>
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