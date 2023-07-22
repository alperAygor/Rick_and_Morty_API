<template>
     <div class="flex justify-center mt-20">
        <div class="container mt-4 w-full">
            <div class="card-title"><h1 class="flex justify-center ">Tüm Karakterler</h1></div>
            <div class=" w-full flex flex-wrap justify-center" >
                <div v-for="card in toRaw(store.getters.getCharList)" :key="card.id" class=" container w-1/3 flex justify-center"><card :card="card"/></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent,toRaw,ref, watchEffect } from 'vue';
import card from './card.vue';
import { useStore } from 'vuex';
import axios from "axios"
defineComponent({
    components:{
        card
    }

});
const charList = ref([]);
const store = useStore();
const url = store.getters.getUrl;


const updateCharList = async(pageNumber) => {
    try {
        const response = await axios.get(url + `character?page=${pageNumber}`);
        const charListData = response.data.results;
        charList.value = charListData;
        store.commit("setCharList", charList.value);
    } catch (error) {
        alert("404 not found")
    }
}

watchEffect( () => {
    var pageNumber = store.getters.getPageNumber;   
    updateCharList(pageNumber);
    
});


</script>