<template>
<div class="flex">
     <div class="flex flex-col container w-full text-xl">
                <div class="flex my-3 ms-2 mt-6">
                        <h3>Kart Numarası:</h3>
                        {{ props.card.id }}
                </div>
                <div class="flex my-3 ms-2 mt-6">
                    <h3>İsim:</h3>
                    {{ props.card.name }}
                </div>
                <div class="my-3 flex ms-2">
                    <h3>Durumu: </h3>
                    {{ props.card.status }}
                </div>
                <div class="my-3 flex ms-2">
                <h3>Cinsiyet:</h3>{{ props.card.gender }}
                </div>          
                <div class="my-3 flex ms-2">
                    <h3>Tür:</h3>
                {{ props.card.species }} 
                </div>
                <hr class=""> 
                <div class="my-3 flex ms-2">
                        <p>Tip:</p>
                    {{ props.card.type }} 
                </div>
                <div class="detail-card-btn card-btn btn">
                    <router-link to="/" >
                        Geri Dön
                    </router-link>
                </div>
    </div>    
</div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps(["card"]);

</script>