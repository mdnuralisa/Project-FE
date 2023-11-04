<script setup lang="ts">
const route = useRoute()

let id = route.params.id

</script>

<template>
    <div>
      <Section>
        {{ id }}
      </Section>
    </div>
  </template>