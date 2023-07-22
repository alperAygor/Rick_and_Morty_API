<template>
    <div class="flex flex-col">
        <navbar/>
        <detailCard/>
        <div class="mt-20"><pagination/></div>
        <footerSection/>
    </div>
</template>
<script setup>
import { defineComponent, onMounted } from 'vue';
import footerSection from '../../shared/footer/footerSection.vue';
import navbar from "../../shared/navbar/navbar.vue"
import detailCard from "./detailCard/detailcard.vue"
import pagination from '../../shared/pagination/pagination.vue';
import { useStore } from 'vuex';
const store = useStore();
import { useRoute } from 'vue-router';
const {params} = useRoute();


defineComponent({
  components: {
    footerSection,
    navbar,
    detailCard,
    pagination
   
    }
});
onMounted(() => {
    store.commit("customSetCardNumber", Number(params.cardid));
})

</script>

