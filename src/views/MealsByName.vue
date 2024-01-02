<template>
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" @change="searchMeals"
            placeholder="Search for Meals" />
    </div>
    <div class="grid grid-cols md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
            <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl h-48 w-full object-cover">
            </router-link>
            <div class="p-3">
                <h3 class=" font-bold">{{ meal.strMeal }}</h3>
                <p class="py-4">{{ meal.strInstructions }}</p>
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../../store';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})
</script>