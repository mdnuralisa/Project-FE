<script setup lang="ts">

import { nextTick } from 'vue'
import { callWithNuxt } from 'nuxt/app';

const route = useRoute()

let id = route.params.category_id

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

let items = ref([])


const navigateEdit = (item_id: string) => {
    navigateTo('/categories/'+ id + '/items/'+item_id)
}

const updateData = () => {
    
  nextTick(async () => {
const { data, pending, error, refresh } = await useFetch('http://localhost:8080/categories/'+id+'/items/listing', {
        method: "get",
        
        headers: {
            
            Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
            console.log(response);
            // Process the response data

            items.value = response._data.data
            // window.$cookies.set('token', response._data.data.token);
                
        },
        onResponseError({ request, response, options }) {
                console.log(response);
            // Handle the response errors
        }
    });
  })

}
    const  deleteItem = async  (index: any, itemId: string) => {
    
    return await callWithNuxt(
        useNuxtApp(),
        async ()=> await useFetch('http://localhost:8080/categories/'+id+'/items/delete/'+itemId,{
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
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mb-8 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">{{ id }}'s Items </h2>
                <p class="mb-4 font-light">Maintaining a personal inventory list for your household is a practical way to stay organized, track possessions, and streamline daily tasks by ensuring you have a clear overview of your belongings.</p>
            </div>
            <div class="mb-2 relative bg-white shadow sm:rounded-lg">
                <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required>
                            </div>
                        </form>
                    </div>
                    <a href="#" @click.stop.prevent="navigateTo('/categories/'+ id + '/items/new')">
                        <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                            <button type="button" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                Add new item
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Item name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Unit
                            </th>
                            <th scope="col" class="px-6 py-3 w-64">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in items">
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.name }}
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                for unit
                            </td>
                            <td class="px-6 py-4 gap-2 flex items-center">
                                <button type="button" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                    <a href="#" @click.stop.prevent="navigateEdit (item.id)" >Edit</a> 
                                </button>                          
                                <button @click.stop.prevent="deleteItem(index, item.id)"  type="button" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                    Delete
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    </section>
</template>