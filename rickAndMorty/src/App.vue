<template>
  <router-view></router-view>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from './store/index';
import { watchEffect } from 'vue';
const router = useRouter();
const store = useStore();
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    store.setInHome(true);
    store.setInDetails(false);
    store.setInLocation(false);
    store.setInEpisode(false);
  } else if (to.path === '/details') {
    store.setInHome(false);
    store.setInDetails(true);
    store.setInLocation(false);
    store.setInEpisode(false);
  } else if (to.path === '/locations') {
    store.setInHome(false);
    store.setInDetails(false);
    store.setInLocation(true);
    store.setInEpisode(false);
  } else if (to.path === '/episodes') {
    store.setInHome(false);
    store.setInDetails(false);
    store.setInLocation(false);
    store.setInEpisode(true);
  } else {
    store.setInHome(false);
    store.setInDetails(false);
    store.setInLocation(false);
    store.setInEpisode(false);
  }

  next();
});
</script>
