<template>
    <div class="flex flex-col ">
        <navbar/>
        <info/>
        <cardSection/>
        <pagination/>
        <pageInfo/>
        <footerSection/>
    </div>
</template>
<script setup>
import { defineComponent,onMounted } from 'vue';
import footerSection from '../shared/footer/footerSection.vue';
import navbar from "../shared/navbar/navbar.vue";
import info from './infoSection/info.vue';
import cardSection from "./cardSection/cardMain.vue"
import pagination from "../shared/pagination/pagination.vue"
import pageInfo from "./pageInfo/pageInfo.vue"
import axios from 'axios';
defineComponent({
  components: {
    footerSection,
    navbar,
    info,
    cardSection,
    pagination,
    pageInfo
    
},

});
import { useStore } from '../../store/index';
const store = useStore();
onMounted(async () => {
    const response = await axios.get(store.getUrl + "character")
    store.setCharPageInfo(response.data.info);
});
</script>