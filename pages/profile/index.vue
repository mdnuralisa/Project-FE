<script setup lang="ts">
import { nextTick } from 'vue'
import { callWithNuxt } from 'nuxt/app';

definePageMeta({
  middleware: 'auth'
})

let form = ref({
    email: "",
    newPassword: ""
})

const confirmPassword = ref("");
const errorMessage = ref("");

const validateForm = () => {
  if (form.value.newPassword !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match!";
    return false;
  }
  errorMessage.value = "";
  return true;
};

const config = useRuntimeConfig();

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const updateData = () => {
    
    nextTick(async () => {
        
        const { data, pending, error, refresh } = await useFetch(`${config.public.apiBase}show`,{
            method: "get",
            
            headers: {
                
                Authorization: `Bearer ${token}`,
            },
            onResponse({ request, response, options }) {
                console.log(response);
                // Process the response data
                
                form.value = response._data.data
                // window.$cookies.set('token', response._data.data.token);
                
            },
            onResponseError({ request, response, options }) {
                console.log(response);
                // Handle the response errors
            }
        });
    })
}

const  updatePassword = async  () => {
    
    return await callWithNuxt(
    useNuxtApp(),
    async ()=> await useFetch(`${config.public.apiBase}update`,{
        method: "put",
        body: form,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
            console.log(response);
            // Process the response data
            navigateTo('/home');
            
            // window.$cookies.set('token', response._data.data.token);
            
        },
        onResponseError({ request, response, options }) {
            console.log(response);
            // Handle the response errors
        }
    })
    );
    
}

onMounted(() => {
    updateData()
});

</script>

<template>
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path></svg>
          </div>
          &nbsp;&nbsp;Your Personal Inventory-Space    
      </a>
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label for="disabled-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your registered email</label>
                  <input v-model="form.email" type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input v-model="form.newPassword" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input v-model="confirmPassword" @input="validateForm" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  <p v-if="errorMessage" class="block mb-2 text-sm font-semibold text-red-500 dark:text-white">{{ errorMessage }}</p>
              </div>
              <button @click.stop.prevent="updatePassword" type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </form>
      </div>
  </div>
</section>
</template>