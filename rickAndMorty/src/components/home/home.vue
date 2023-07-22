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
import { defineComponent } from 'vue';
import footerSection from '../shared/footer/footerSection.vue';
import navbar from "../shared/navbar/navbar.vue";
import info from './infoSection/info.vue';
import cardSection from "./cardSection/cardMain.vue"
import pagination from "../shared/pagination/pagination.vue"
import pageInfo from "./pageInfo/pageInfo.vue"
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

</script>