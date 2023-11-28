<script setup lang="ts">

import { nextTick } from 'vue'
import { callWithNuxt } from 'nuxt/app';

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()

let id = route.params.id

let form = ref({
    name: ""
})

const config = useRuntimeConfig();

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const updateData = () => {
    
    nextTick(async () => {
        
        const { data, pending, error, refresh } = await useFetch(`${config.public.apiBase}categories/show/${id}`, {
            method: "get",
            
            headers: {
                
                Authorization: `Bearer ${token}`,
            },
            onResponse({ request, response, options }) {
                // console.log(response);
                // Process the response data
                
                form.value = response._data.data
                // window.$cookies.set('token', response._data.data.token);
                
            },
            onResponseError({ request, response, options }) {
                // console.log(response);
                // Handle the response errors
            }
        });
    })
}

const  update = async  () => {
    
    return await callWithNuxt(
    useNuxtApp(),
    async ()=> await useFetch(`${config.public.apiBase}categories/update/${id}`,{
        method: "put",
        body: form,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
            // console.log(response);
            // Process the response data
            navigateTo('/categories');
            
            // window.$cookies.set('token', response._data.data.token);
            
        },
        onResponseError({ request, response, options }) {
            // console.log(response);
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
        <div class="flex justify-center">
            <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-700">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center ">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Categories</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Rename categories based on your home-space.</p>
                    </div>
                </div>
                
                
                <div>
                    <label for="default-input" class="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Rename categories</label>
                    <input type="text" v-model="form.name" id="default-input" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <button type="button" @click.stop.prevent="update" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Submit</button>
                </div>
            </div>
        </div>
    </section>
</template>
