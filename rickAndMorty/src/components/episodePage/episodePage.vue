<template>
    <div class="flex flex-col">
        <navbar />
        <infoCard :list="reactiveData.episodeList" :title="reactiveData.title"/>
        <div class="mb-20"><pagination/></div>
        <footerSection />
    </div>
</template>
<script setup>
import { defineComponent } from 'vue';
import footerSection from '../shared/footer/footerSection.vue';
import navbar from "../shared/navbar/navbar.vue";
import pagination from "../shared/pagination/pagination.vue";
import infoCard from "../shared/İnfoCard/info.vue"


defineComponent({
    components: footerSection, navbar, pagination, infoCard

})
import axios from 'axios';
import { watchEffect, reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const reactiveData = reactive({
    episodeList: [],
    title:false,
})
watchEffect(async () => {
    var pageNumber = store.getters.getEpisodeNumber;
    try {
        const response = await axios.get(store.getters.getUrl + `episode?page=${pageNumber}`)
        reactiveData.episodeList = response.data.results

    } catch (error) {
        alert("404 not found")
    }
})


</script>

