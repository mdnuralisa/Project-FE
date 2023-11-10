<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
    <div>
      <NuxtWelcome />
    </div>
  </template>