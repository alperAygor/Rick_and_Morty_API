<template>
    <div class="flex justify-center mt-20">
        <div class="container mt-4 w-full">
            <div class="card-title">
                <h1 class="flex justify-center ">Tüm Karakterler</h1>
            </div>
            <div class=" w-full flex flex-wrap justify-center">
                <div v-for="card in store.getCharList" :key="card.id" class=" container w-1/3 flex justify-center">
                    <card :card="card" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent, watchEffect } from 'vue';
import card from './card.vue';
import { useStore } from '../../../store/index';

defineComponent({
    components: {
        card
    }

});

const store = useStore();
watchEffect(() => {
    store.updateList("character",store.getPageNumber);
    console.log(store.getCharList)
});

</script>