<template>
<v-app>
<div  class="main ">
<svg class="right_circle" width="246" height="514" viewBox="0 0 246 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<circle cx="257" cy="257" r="256" stroke="#BCBCBC" stroke-opacity="0.76" stroke-width="2"/>
<circle opacity="0.5" cx="257" cy="257" r="238" fill="url(#paint0_linear_562_6118)"/>
</g>
<defs>
<linearGradient id="paint0_linear_562_6118" x1="257" y1="19" x2="257" y2="495" gradientUnits="userSpaceOnUse">
<stop offset="0.229142" stop-color="#519FFF" stop-opacity="0.47"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
<svg class="left_circle" width="212" height="514" viewBox="0 0 212 514" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<circle cx="-45" cy="257" r="256" transform="rotate(-180 -45 257)" stroke="#BCBCBC" stroke-opacity="0.76" stroke-width="2"/>
<circle opacity="0.5" cx="-45" cy="257" r="238" transform="rotate(-180 -45 257)" fill="url(#paint0_linear_562_6121)"/>
</g>
<defs>
<linearGradient id="paint0_linear_562_6121" x1="-45" y1="19" x2="-45" y2="495" gradientUnits="userSpaceOnUse">
<stop offset="0.229142" stop-color="#519FFF" stop-opacity="0.47"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
<header2></header2>
<map2></map2>
<h3 class="my-5 py-5"> ویلا یاب  </h3>
<card></card> 
<div class="medium_container ">
<v-col  cols="12"  >
<div class="banner">
<h3 class="mb-4">هوم لند ، تیمی سربلند</h3>
<v-col cols="">
<div class="pictur " > </div>
</v-col>
</div>
</v-col >
</div>
</div>
</v-app>
</template>
<script>
import  header2 from './Header2.vue'
import card from './card.vue'
import map2 from './Map2.vue'
export default ({
   components: {
        header2,
          card,
          map2
    },
})
</script>
<style >
.main{
    background-color: #F7F9FC;
   
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 120px;
    position: relative;
}
 h3{

font-size: 30px;
font-style: normal;
font-weight: 800;
line-height: 61px;
letter-spacing: -0.02em;
text-align: right;
color: #121939;
padding: 0!important;
margin-top: 100px;
}
 .banner{
 width: 100%;
   display: flex !important;
    align-items: center;
    object-fit: cover;
    flex-direction: column;}
.main .banner .pictur{
height: 300px;
width: 100%;
object-fit: cover;
background-image:url("../../assets/images/mainbanner.png") !important;
margin: 0px;
border-radius: 30px;
}
.right_circle{
position: absolute;
top: 50%;

right: 0;
}
.left_circle{

position: absolute;
top: 10%;

left:  0;
}
@media only screen and (max-width: 800px) {

h3{
margin: 0!important;
text-align: center!important;

}

}
</style>
