<template>
    <div>
      <ul class="nav nav-pills nav-fill sticky-top bg-white">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Inventories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log Out</a>
        </li>
      </ul>
      <slot />
      
    </div>
  </template>
  