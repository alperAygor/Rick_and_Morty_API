<template>
    <div class="card">
        <card-header :cardImg="card.image" />
        <card-body :card="card"/>
    </div>
</template>
<script setup>
import cardHeader from "./card-header.vue";
import cardBody from "./card-body.vue";
import { defineComponent,defineProps } from 'vue';

defineComponent({
    components:{
        cardBody,
        cardHeader
    }
});
const props = defineProps(["card"]);
const card =props.card


</script>