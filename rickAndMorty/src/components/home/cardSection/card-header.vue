<template>
    <div class="card-header">
    <img  alt="" :src="props.cardImg" class="w-full mx-auto">
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps(["cardImg"])
</script>