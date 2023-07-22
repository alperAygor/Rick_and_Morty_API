import { createStore } from "vuex";
export const store=createStore({
    state:{
        url:"https://rickandmortyapi.com/api/",
        charList:[],
        pageNumber:1,
        inHome: true,
        info: {
            "Tür":"Macera,Bilim Kurgu,Komedi",
            "Proje tasarımcısı": "Justin Roiland,Dan Harmon",
            "Ülke": "ABD",
            "Dil":"İngilizce",
            "Sezon Sayısı":"6",
            "Bölüm sayısı":"61",
            "Yayın Tarihi":"2 Aralık 2013-Günümüz",
    
        },
        cardNumber: 1,
        inEpisode: false,
        inLocation:false,
        locationNumber: 1,
        episodeNumber:1,
        inDetails: false
    },
    mutations:{
        homePageIncrement: (state) => {
            if (state.pageNumber == 42) state.pageNumber = 42; 
            else state.pageNumber++;
        },
         locationPageIncrement: (state) => {
            if (state.locationNumber == 7) state.locationNumber = 7; 
            else state.locationNumber++;
        },
          episodePageIncrement: (state) => {
            if (state.episodeNumber == 3) state.episodeNumber = 3; 
            else state.episodeNumber++;
        },
        homePageDecrement: (state) => {
            if (state.pageNumber == 1) state.pageNumber = 1;
            else state.pageNumber--;
        },
        locationPageDecrement: (state) => {
            if (state.locationNumber == 1) state.locationNumber = 1;
            else state.locationNumber--;
        },
        episodePageDecrement: (state) => {
            if (state.episodeNumber == 1) state.episodeNumber = 1;
            else state.episodeNumber--;
        },
        setCharList: (state, charList) => {
            state.charList = charList;
        }
         ,setInHome: (state,status) => {
             state.inHome=status;
        },
         setInLocation: (state,status) => {
             state.inLocation=status;
        },
         setInEpisode: (state,status) => {
             state.inEpisode=status;
        },
         setInDetails: (state,status) => {
             state.inDetails=status;
        },
        decCardNumber: (state) => {
            if (state.cardNumber == 0)  state.cardNumber = 1;
            else state.cardNumber--;  
        },
        incCardNumber: (state) => {
            if (state.cardNumber == 826) state.cardNumber = 826;
            else state.cardNumber++;   
        },
        customSetCardNumber: (state,number) => {
            state.cardNumber = number;
        }
    },
    actions:{

    },
    getters:{
        getUrl:(state)=>{return state.url;},   
        
        getPageNumber: (state) => { return state.pageNumber; },
        
        getCharList: (state) => { return state.charList; },
        
        getInHome: (state) => { return state.inHome; },
        
        getInfoObj: (state) => { return state.info; },
        
        getCardNumber: (state) => { return state.cardNumber || 1; },
        
        getInLocation: (state) => { return state.inLocation },
        
        getInEpisode: (state) => { return state.inEpisode },
        
        getLocationNumber: (state) => { return state.locationNumber; },
    
        getEpisodeNumber: (state) => { return state.episodeNumber; },
    }            
    
});