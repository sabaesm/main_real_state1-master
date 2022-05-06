<template>
<div>
<v-app>
<div  class="main">
<Header2></Header2>
<div class="resp_car"></div>
<card></card>
<slider></slider>
</div >
</v-app>
</div>
</template>
<script>
import card from './card.vue'
import Header2 from './Header2.vue'
import slider from './slider.vue'
export default ({
   components: {
        card,
      Header2,
      slider
    },
})
</script>
<style scoped >
@import '../../assets/css/aboutUs/aboutMain.css';
.main{
    background-color: #fcfaf7;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0!important;
}
.main .mainCard{
    position: relative;
}
 @media only screen and (max-width: 600px) {
}
</style>
