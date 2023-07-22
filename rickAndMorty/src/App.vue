<template>
  <router-view></router-view>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    store.commit('setInHome', true);
    store.commit('setInDetails', false);
    store.commit('setInLocation', false);
    store.commit('setInEpisode', false);
  } else if (to.path === '/de // Başka bir sayfaya yönlendirme durumunda tüm değerleri sıfırlatails') {
    store.commit('setInHome', false);
    store.commit('setInDetails', true);
    store.commit('setInLocation', false);
    store.commit('setInEpisode', false);
  } else if (to.path === '/locations') {
    store.commit('setInHome', false);
    store.commit('setInDetails', false);
    store.commit('setInLocation', true);
    store.commit('setInEpisode', false);
  } else if (to.path === '/episodes') {
    store.commit('setInHome', false);
    store.commit('setInDetails', false);
    store.commit('setInLocation', false);
    store.commit('setInEpisode', true);
  } else {
    store.commit('setInHome', false);
    store.commit('setInDetails', false);
    store.commit('setInLocation', false);
    store.commit('setInEpisode', false);
  }

  next();
});

</script>
