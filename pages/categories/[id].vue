<script setup lang="ts">
const route = useRoute()
const router = useRouter()

let id = route.params.id

let currentRoute = router.currentRoute;

</script>

<template>
    <div>
      <Section>
        {{ id }}
        <!-- {{ currentRoute }} -->
      </Section>
    </div>
  </template>