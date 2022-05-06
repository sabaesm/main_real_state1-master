<template>
   <div class="medium_container ">
   <div class=" mb-5" >
   <v-row class=" mainSection_weblog__cards "  >
   <v-col cols="12 " md="8"  class="ma-0 pa-0">
   <cardDtaile></cardDtaile> 
   </v-col>
     <v-col cols="12 " md="4" class="ma-0 pa-0 d-none d-md-flex"> 
     <search></search>
     </v-col> 
   </v-row>
   </div>
    <slider class="mt-5 pt-5">
    </slider>
 </div>
</template>
<script>
import search from './dtaileSearch.vue'
import cardDtaile from './dtailesCard.vue';
import slider from '../blog/slider.vue'
export default {
    components:{
        search,
        cardDtaile,
        slider
    }
}
</script>
<style scoped >
.mainSection_weblog__cards {
background-color: #ffff!important;
position: sticky!important;
margin-top: -100px!important;
border-radius:30px ;
}
@media (min-width:960px) and (max-width:1000px){
.recent__home{
display: flex!important;
flex-direction: column;
}
.mainSection_weblog__cards {
background-color: #ffff!important;
}
}
</style>