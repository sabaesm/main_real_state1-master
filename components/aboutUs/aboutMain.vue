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

import card2 from './card2.vue'
import  header2 from './Header2.vue'
import slider from './slider.vue'
import navbar from '../../layouts/navbar.vue'
export default ({
   components: {
        card2,
        header2,
        slider,
        navbar
    },
})
</script>
<style >
@import '../../assets/css/aboutUs/aboutMain.css';
.main{
    
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.main .mainCard{
    position: relative;
}
.section{
background: #F7F9FC;
}
</style>
<style >

</style>