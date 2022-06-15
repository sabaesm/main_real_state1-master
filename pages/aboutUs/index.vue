<template>
<v-app >
<div  class="main  m-0 p-0">
<header2></header2>
<card2 v-bind="AboutUs "  :data="AboutUs"></card2>
<slider v-bind="consultants" :data="consultants"></slider>
</div >
</v-app>


</template>
<script>
import {AboutUs} from '../../service/getApi'
import {consultants} from '../../service/getApi'
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
    AboutUs:[],
    consultants:[]
}
    },
    mounted() {
        AboutUs().then(res=>this.AboutUs=res.data)
        // .then(res=>console.log(res.data))
        consultants().then(res=>this.consultants=res.data)

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
    background: #F7F9FC!important;

}
.main .mainCard{
    position: relative;
}
.section{
}
</style>
<style >

</style>