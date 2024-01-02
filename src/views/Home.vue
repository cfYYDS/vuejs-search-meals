<template>
    <div class="flex flex-col p-8 ">
       
        <div class="flex justify-center gap-2">
            <router-link to="/" v-for="letter of letters">
            {{ letter }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue'
import store from '../../store';
import axiosClient from '../../axiosClient';
const meals = computed(()=> store.state.meals)
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
const ingredients = ref([])

onMounted(async()=>{
    const res = await axiosClient.get('/list.php?i=list')
    console.log(res.data);
    ingredients.value = res.data.meals
})
</script>