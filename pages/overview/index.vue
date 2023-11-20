<script setup lang="ts">
import type { PassThrough } from 'stream';
import { nextTick } from 'vue'

let categories = ref({
    name: "",
    id: 0,
})

const config = useRuntimeConfig();

let items = ref([])

const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const updateData = () => {
    
    nextTick(async () => {
        
        await useFetch(`${config.public.apiBase}categories/listing`,{
            method: "get",
            
            headers: {
                
                Authorization: `Bearer ${token}`,
            },
            onResponse({ request, response, options }) {
                console.log(response._data.data);
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

onMounted(() => {
    updateData()
});

// const category = (item_id: string) => {
    //      array.forEach(element => {
        
        //      });
        // }
    </script>
    
    <template>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Your inventory summary list
                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Explore Your Inventory at a Glance: Everything You Need in One Snapshot.</p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Categories
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Items 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Unit
                        </th>
                    </tr>
                </thead>
                <tbody v-for="(category, index) in categories">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ category.name }}
                        </th>
                        <td class="px-6 py-4">
                            -
                        </td>
                        <td class="px-6 py-4">
                            -
                        </td>
                        <td class="px-6 py-4">
                            -
                        </td>
                    </tr>
                    <tr v-for="(item, index) in category.items" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            -
                        </th>
                        <td class="px-6 py-4">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.quantity }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.unit }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>