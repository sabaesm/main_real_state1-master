<template>
<v-app >
<div  class="main  m-0 p-0">
<header2></header2>
<card2></card2>
<slider></slider>
</div >
</v-app>


</template>
<script>
import card2 from '../../components/aboutUs/card2.vue'
import  header2 from '../../components/aboutUs/Header2.vue'
import slider from '../../components/aboutUs/slider.vue'
export default ({
       components: {
        card2,
        header2,
        slider,
        
    },
     layout:'user'
})
</script>
