<script setup lang="ts">

import { nextTick } from 'vue'
import { callWithNuxt } from 'nuxt/app';

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()

let id = route.params.id

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;


let categories = ref([])

const config = useRuntimeConfig();

const updateData = () => {
    
  nextTick(async () => {
const { data, pending, error, refresh } = await useFetch(`${config.public.apiBase}categories/listing`, {
        method: "get",
        
        headers: {
            
            Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
            console.log(response);
            // Process the response data

            categories.value = response._data.data
            // window.$cookies.set('token', response._data.data.token);
                
        },
        onResponseError({ request, response, options }) {
                console.log(response);
            // Handle the response errors
        }
    });
  })

}
    const  deleteCategory = async  (index: any, id: string) => {
    
    return await callWithNuxt(
        useNuxtApp(),
        async ()=> await useFetch(`${config.public.apiBase}categories/delete/${id}`,{
            method: "delete",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            onResponse({ request, response, options }) {
                // categories.splice(index, 1)
                // alert('woi')
                console.log(response);
                updateData()
                // Process the response data
                // navigateTo('/window');
                // window.location.reload();

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
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Categories</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Inventories based on your home-space.
                        <!-- Try button -->
                        <a href="/categories/new">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Categories</button>
                        </a>
                        <!-- try button above -->
                    </p>
                </div> 
                <div class="grid gap-8 lg:grid-cols-4 flex flex-row justify-items-center">
                    <div v-for="(category, index) in categories" class="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 class="hover:text-sky-500 text-center mb-8 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#" @click.stop.prevent="navigateTo('/categories/'+ category.id + '/items')">{{ category.name }}</a></h2>
                        <div class="mt-2 gap-4 flex justify-between items-center">
                    <div class="flex items-center space-x-3 sm:space-x-4">
                        <button type="button" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                            <a href="#" @click.stop.prevent="navigateTo('/categories/'+category.id)">Edit</a> 
                        </button>               
                    </div>              
                    <button @click.stop.prevent="deleteCategory(index, category.id)" type="button" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        Delete
                    </button>
                </div>
                    </div> 
                    </div>
            </div>
        </section>
    </div>
</template>