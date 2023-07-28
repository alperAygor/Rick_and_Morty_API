<template>
     <div class="card-body flex flex-col">
        <div><h3>{{ card.name }}</h3></div>   
        <div class="my-3">
            {{ card.status }}
        </div>
        <div class="my-3 flex justify-center">
            <router-link :to="{ name: 'detailsPage', params: { cardid: card.id  } ,query:{}}" class="card-btn btn " :key="card.id">
                Detaylar
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(["card"]);
</script>