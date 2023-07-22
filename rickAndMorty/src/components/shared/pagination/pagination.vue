<template>
    <div class="flex justify-center mb-10">
        <div class="container w-1/6">
        <div class=" flex justify-center">
        <!-- Previous Button -->
        <router-link to="" class="pagination-btn btn" @click="prev">
            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            Prev
        </router-link>
        <router-link to="" class="pagination-btn btn" @click="next">
            Next
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </router-link>
        </div>
     </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();

const prev = () => {
    if (store.getters.getInHome) {
        store.commit("homePageDecrement");
    } 
    else if (store.getters.getInLocation) { store.commit("locationPageDecrement"); }
    else if (store.getters.getInEpisode) { store.commit("episodePageDecrement"); }
    else {
        store.commit("decCardNumber")

    }
   setTimeout(() => { window.scrollBy(0, -3500) }, 300)
    
}
        
const next = () => {
    if (store.getters.getInHome) {
        store.commit("homePageIncrement");
    }
     else if (store.getters.getInLocation) { store.commit("locationPageIncrement"); }
    else if (store.getters.getInEpisode) { store.commit("episodePageIncrement"); }
    else {
        store.commit("incCardNumber")
    }
    setTimeout(()=> { window.scrollBy(0, -3500) },300)
   
}
</script>
