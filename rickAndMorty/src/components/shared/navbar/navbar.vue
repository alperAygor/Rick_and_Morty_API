<template>
    <div class="navbar fixed top-0">
        <nav class="flex justify-between">
            <div class=" w-1/12 my-auto"><img  src="./images.jpeg" alt="" class="navbar-img"></div>
            <div class="my-auto me-3">
                <router-link to="/locations" class="btn navbar-home-btn mx-3" >Lokasyonlar
                </router-link>
                <router-link to="/episodes" class="btn navbar-home-btn mx-3" >Hikayeler
                </router-link>
                <router-link to="/" class="btn navbar-home-btn mx-3"><i class="fa-solid fa-house" ></i>
                </router-link>
            </div>
        </nav>
    </div>
</template>
