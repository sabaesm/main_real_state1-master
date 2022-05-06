<template>
<v-app>
  <div class="mainPage">
    <Header2></Header2>
<weblogCard></weblogCard>
    </div>
</v-app>
</template>
<script>
import Header2 from './Header2.vue'
import weblogCard from './weblogCard.vue'

export default {
    components:{
Header2,
weblogCard,

        
    }
}
</script>
<style   >
.mainPage{

}
.mainSection__cards .mainCard__weblog , .search_main_section{
   margin-top: -100px;
   background-color: #ffff;
    border-radius: 30px!important;
}

</style>