<template>
    <div class="flex flex-col">
        <navbar />
        <infoCard :list="store.getEpisodeList"/>
        <div class="mb-20"><pagination/></div>
        <footerSection />
    </div>
</template>
<script setup>
import { defineComponent , watchEffect, onMounted } from 'vue';
import footerSection from '../shared/footer/footerSection.vue';
import navbar from "../shared/navbar/navbar.vue";
import pagination from "../shared/pagination/pagination.vue";
import infoCard from "../shared/İnfoCard/info.vue"


defineComponent({
    components: footerSection, navbar, pagination, infoCard

})

import { useStore } from '../../store/index';
import axios from 'axios';
const store = useStore();

watchEffect(() => {
    console.log(store.getEpisodeNumber)
    store.updateList("episode", store.getEpisodeNumber);
});
onMounted(async() => {
    const response =await axios.get(store.getUrl+"episode")
    store.setEpiPageInfo(response.data.info); 
})


</script>

