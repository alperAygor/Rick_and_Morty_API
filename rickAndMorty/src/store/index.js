import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    url: "https://rickandmortyapi.com/api/",
    charList: [],
    locationList: [],
    episodeList:[],
    pageNumber: 1,
    inHome: true,
    info: {
      "Tür": "Macera,Bilim Kurgu,Komedi",
      "Proje tasarımcısı": "Justin Roiland,Dan Harmon",
      "Ülke": "ABD",
      "Dil": "İngilizce",
      "Sezon Sayısı": "6",
      "Bölüm sayısı": "61",
      "Yayın Tarihi": "2 Aralık 2013-Günümüz",
    },
    cardNumber: 1,
    inEpisode: false,
    inLocation: false,
    locationNumber: 1,
    episodeNumber: 1,
    inDetails: false,
      characterPageInfo: {
          count: "",
          pages:""
    },
      locationPageInfo: {
          pages:""
    },
      episodePageInfo: {
          pages:""
      },
    cardDetails:{}
  }),
  
    actions: {
    homePageIncrement() {
      if (this.pageNumber == Number(this.characterPageInfo.pages)) this.pageNumber=Number(this.characterPageInfo.pages);
      else this.pageNumber++;
    },
    locationPageIncrement() {
      if (this.locationNumber == Number(this.locationPageInfo.pages)) this.locationNumber=Number(this.locationPageInfo.pages);
      else this.locationNumber++;
    },
    episodePageIncrement() {
      if (this.episodeNumber == Number(this.episodePageInfo.pages)) this.episodeNumber=Number(this.episodePageInfo.pages);
      else this.episodeNumber++;
    },
    homePageDecrement() {
      if (this.pageNumber == 1) this.pageNumber=1;
      else this.pageNumber--;
    },
    locationPageDecrement() {
      if (this.locationNumber == 1) this.locationNumber=1;
      else this.locationNumber--;
    },
    episodePageDecrement() {
      if (this.episodeNumber == 1) this.episodeNumber=1;
      else this.episodeNumber--;
    },
    setCharList(list) {
      this.charList = list;
      },
    setEpisodeList(list) {
      this.episodeList = list;
      },
    setLocationList(list) {
      this.locationList = list;
    },
    setInHome(status) {
      this.inHome = status;
    },
    setInLocation(status) {
      this.inLocation = status;
    },
    setInEpisode(status) {
      this.inEpisode = status;
    },
    setCharPageInfo(object) {
        this.characterPageInfo = object;    
        },
    setLocPageInfo(object) {
        this.locationPageInfo = object;    
        },
    setEpiPageInfo(object) {
        this.episodePageInfo = object;    
    },
    setInDetails(status) { this.inDetails = status; },
    
      decCardNumber() {
      if (this.cardNumber == 1) this.cardNumber = 1;
      else this.cardNumber--;
    },
    incCardNumber() {
      if (this.cardNumber ==Number(this.characterPageInfo.count) ) this.cardNumber =Number(this.characterPageInfo.count) ;
      else this.cardNumber++;
    },
    customSetCardNumber(number) {
      this.cardNumber = number;
      },
      setCardDetails(card) {
        this.cardDetails = card;
    },
     async updateList(type,pageNumber){
    try {
        const response = await axios.get(this.url + `${type}?page=${pageNumber}`);
        if (type === "character") {
            this.setCharList(response.data.results);
        }
        else if (type === "location") { 
            this.setLocationList(response.data.results);
        }
        else if (type === "episode") { 
            this.setEpisodeList(response.data.results);
        }
        else {
            alert("404 not found")
        }
    } catch (error) {
        alert("404 not found")
    }
      },
      async updateDetailPage(){
   try {
    const response = await axios.get(this.url + `character/${this.cardNumber}`);
     this.setCardDetails(response.data);
   } catch (error) {
        alert("404 not found")
   }
  },
    },
  getters: {
    getUrl(state) { return state.url; },
    getPageNumber(state) { return state.pageNumber; },
    getEpisodeList(state) { return state.episodeList; },
    getLocationList(state) { return state.locationList; },
    getCharList(state){ return state.charList; },
    getInHome(state) { return state.inHome; },
    getInfoObj(state) { return state.info; },
    getCardNumber(state) { return state.cardNumber || 1; },
    getInLocation(state) { return state.inLocation },
    getInEpisode(state) { return state.inEpisode },
    getLocationNumber(state) { return state.locationNumber; },
    getEpisodeNumber(state) { return state.episodeNumber; },
    getCardDetails(state) {return state.cardDetails}
  }
});
