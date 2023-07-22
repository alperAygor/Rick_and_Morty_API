<template>
    <div class="">
        <img :src="props.cardImg" alt="" class="w-full h-full">
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(["cardImg"]);
</script>