<script lang="ts" setup></script>

<template>
  <div>
    <AppHeader />
    <div class="w-screen bg-gray-100 px-3 py-3 mx-auto sm:px-0">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped></style>