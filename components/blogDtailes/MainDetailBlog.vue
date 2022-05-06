<template>
<v-app>
  <div class="mainPage ">
    <Header2 class="mb-5"></Header2>
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
<style  >
.mainPage{
}

.blog_detailes___search_main_section{
}
.mainSection_weblog__cards{

}
@media only screen and (max-width: 960px) {
    .mainSection_weblog__cards{
border-radius: 30px;
}
}
</style>
