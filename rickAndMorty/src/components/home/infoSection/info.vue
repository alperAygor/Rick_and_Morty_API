<template>
    <div class="home-info-card">
        <div class="home-property-card">
            <div class="h-full">
                <img src="./rmIMG.jpg" alt="" class="h-full" />
            </div>
            <div>
                <div class="grid grid-cols-1 " v-for="(value, key) in info" :key="key">
                    <div class="my-2">{{ key }} : {{ value }}</div>
                </div>
            </div>
        </div>
         <div class="home-details-card">
                            <h1>RİCK AND MORTY</h1>
                            <p class="m-7">Rick and Morty, Justin Roiland ve Dan Harmon tarafından Adult Swim için yaratılan bir yetişkin animasyon televizyon dizisidir.

                    Dizi, kendi zamanlarını aile hayatı ve boyutlar arası yolculuk arasında bölüştürmüş alkolik bilim insanı Rick ve onun torunu Morty'nin maceralarını anlatır. Dizide Chris Parnell, Spencer Grammer ve Sarah Chalke'in sesi başroldeki karakterleri seslendirken diğer karakterleri Roiland seslendirir. Dizinin ilk halleri Roiland tarafından Channel 101 film festivali için hazırlanmıştır. Adult Swim, televizyon şovu fikirleri için Harmon ile görüştü; o ve Roiland iki karaktere dayalı televizyon programını hazırlamaya başladılar.

                    Dizi, 2 Aralık 2013 tarihinde eleştirel övgüyle galasını yaptı. 26 Temmuz 2015 tarihinde dizi ikinci bir sezon için, Ağustos 2015'te dizi üçüncü bir sezon için yenilendi. Dördüncü sezon 10 Kasım 2019'da gösterime girdi. Beşinci sezon ise 20 Haziran 2021'de başladı ve on bölümden oluşuyor. </p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '../../../store/index';
const store = useStore();
const info = store.getInfoObj;
</script>
