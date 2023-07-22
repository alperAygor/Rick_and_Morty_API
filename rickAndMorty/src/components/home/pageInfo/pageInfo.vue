<template>
<div class="page-info">
    <i class="fa-solid fa-book"></i>
    <h3>{{ store.getters.getPageNumber }}. Sayfa gösterilmektedir</h3>
</div>
</template>
<script setup>
import { useStore } from 'vuex';

const store = useStore();

</script>