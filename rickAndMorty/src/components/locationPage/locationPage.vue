<template>
    <div class="flex flex-col">
         <navbar/>
        <infoCard :list="store.getLocationList" />
        <div class="mb-20"><pagination/></div>
         <footerSection/>
    </div>
</template>
<script setup>
import { defineComponent, watch,onMounted } from 'vue';
import footerSection from '../shared/footer/footerSection.vue';
import navbar from "../shared/navbar/navbar.vue";
import pagination from "../shared/pagination/pagination.vue";
import infoCard from "../shared/İnfoCard/info.vue"
import axios from 'axios';
defineComponent({
    components: footerSection, navbar,pagination,infoCard

})
import { useStore } from '../../store/index';
const store = useStore();
watch(() => {
    store.updateList("location",store.getLocationNumber);
    console.log(store.getLocationList)
});
onMounted(async () => {
    const response = await axios.get(store.getUrl + "location")
    store.setLocPageInfo(response.data.info);
})

</script>
