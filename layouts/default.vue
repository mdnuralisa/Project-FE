<script setup lang="ts">
// const router = useRouter()


// function checkCurrentRoute(route: string) {
//   let currentRoute = router.currentRoute;

//   route.includes(currentRoute.name);
// }
</script>
<template>
    <div>
      <ul class="nav nav-pills nav-fill sticky-top bg-white">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/categories">Inventories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log Out</a>
        </li>
      </ul>
      <div class="w-100 h-100">
      <slot />
    </div>
    </div>
  </template>
  