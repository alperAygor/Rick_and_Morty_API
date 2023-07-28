<template>
    <div class="detail-box  ">
        <div class="detail-card">
            <detailCardHeader class="flex-1" :cardImg="reactiveData.card.image"/>
            <detailCardBody class="flex-1" :card="reactiveData.card"/>
        </div>
    </div>
</template>
<script setup>
import detailCardBody from './detailCard-body.vue';
import detailCardHeader from './detailCard-header.vue';
import {  reactive,defineComponent, watchEffect } from 'vue';

import { useStore } from '../../../../store/index';
import axios from 'axios';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
defineComponent({
    components: {
        detailCardBody,
        detailCardHeader

    }
});
const reactiveData = reactive({
    card: {}
})
const updateDetailPage = async (cardId) => {
   try {
     const url = store.getUrl + `character/${cardId}`;
    const response = await axios.get(url);
    reactiveData.card = response.data
   } catch (error) {
        alert("404 not found")
   }
}

watchEffect(() => {

    var cardNumber = store.getCardNumber;
    router.push(`/detail/${cardNumber}`)
    updateDetailPage(cardNumber)
})

</script>