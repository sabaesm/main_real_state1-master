<template>
<v-app >
<div  class="main  m-0 p-0">
<header2></header2>
<card2 v-bind="AboutUs "  :data="AboutUs"></card2>
<slider></slider>
</div >
</v-app>


</template>
<script>
import {AboutUs} from '../../service/getApi'
import card2 from '../../components/aboutUs/card2.vue'
import  header2 from '../../components/aboutUs/Header2.vue'
import slider from '../../components/aboutUs/slider.vue'
export default ({
   components: {
        card2,
        header2,
        slider,
        
    },
    data(){
return{
    AboutUs:[]
}
    },
    mounted() {
        AboutUs().then(res=>this.AboutUs=res.data)
        .then(res=>console.log(res.data))
    },
    layout:'user'
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