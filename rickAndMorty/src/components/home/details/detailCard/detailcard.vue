<template>
    <div class="detail-box  ">
        <div class="detail-card">
            <detailCardHeader class="flex-1" :cardImg="store.getCardDetails.image"/>
            <detailCardBody class="flex-1" :card="store.getCardDetails"/>
        </div>
    </div>
</template>
<script setup>
import detailCardBody from './detailCard-body.vue';
import detailCardHeader from './detailCard-header.vue';
import { defineComponent, watchEffect } from 'vue';

import { useStore } from '../../../../store/index';

import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
defineComponent({
    components: {
        detailCardBody,
        detailCardHeader

    }
});
watchEffect(() => {
    router.push(`/detail/${store.cardNumber}`)
    store.updateDetailPage();
})

</script>
