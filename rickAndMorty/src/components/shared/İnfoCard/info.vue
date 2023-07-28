<template>
    <div class="container  w-4/5 my-28 flex mx-auto flex-wrap">
        <div class="info-card" v-for="card in props.list">
            <div class="info-card-body" v-if="store.inLocation" >
               <div class="flex flex-col mx-2">
                 <div class="my-2">
                        Lokasyon numarası:
                        {{ card.id }}
                    </div>
                    <div class="my-2">
                        Lokasyon yeri:
                        {{ card.name }}
                    </div>
                    <div class="my-2">
                        Lokasyon türü:
                    </div>
                        {{ card.type }}
                    <div class="my-2">
                        Lokasyon boyutu:   
                        {{ card.dimension }}
                     </div>      
               </div>      
            </div>
           <div v-if="store.inEpisode" class="info-card-body">
             <div class="flex flex-col mx-2">
                        <div class="my-2">
                            Bölüm numarası:
                            {{ card.id }}
                        </div>
                        <div class="my-2">
                            Bölüm adı:
                            {{ card.name }}
                        </div>
                        <div class="my-2">
                            Çıkış tarihi:
                            {{ card.air_date }}
                        </div>
                        <div class="my-2">
                            Hikaye:   
                            {{ card.episode }}
                         </div>            
                </div>
           </div>
        </div>
    </div>

</template>
<script setup>
import { useStore } from '../../../store/index';
import { defineProps } from 'vue';
const store = useStore();
const props = defineProps(["list"]);
</script>