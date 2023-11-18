<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-lg mb-8 lg:mb-16">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Your Home's Guardian: Household Inventory</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We understand that your home is more than just a space; it's a sanctuary filled with memories, valuables, and the essence of your life. Introducing our Personal Household Inventory feature—a powerful tool designed to bring you unparalleled advantages and safeguard what matters most.</p>
      </div> 
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v2H7V2ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 4H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Z" clip-rule="evenodd"></path></svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Effortless Organization</h3>
          <p class="text-gray-500 dark:text-gray-400">Maintain a comprehensive inventory of items in your personal space, making it easy to find what you need. Keep track of pantry and fridge items to minimize waste and prevent overbuying</p>
        </div>
        <div>
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"></path></svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Time-Saving</h3>
          <p class="text-gray-500 dark:text-gray-400">Quickly locate items in your laundry room, ensuring that you never run out of essential supplies like detergent or dryer sheets.</p>
        </div>
        <div>
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>                    
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Customizable Categories</h3>
          <p class="text-gray-500 dark:text-gray-400">Tailor your inventory to suit your lifestyle, whether you're managing a collection of spices in the kitchen or various cleaning supplies in the laundry room.</p>
        </div>
      </div>
    </div>
  </section>
</template>