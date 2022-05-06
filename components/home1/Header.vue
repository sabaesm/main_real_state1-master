<template>
  <div class="main_section" >
    <div class="header-info" v-for="data in data" :key="data.id">
    <h5 > {{data.homePage_header}}   </h5>
    <h2> {{data.homePage_title}}    </h2>
    <p> {{data.homePage_text}}</p>
  </div>
  <div class="d-flex flex-row  justify-space-between">  
  
<v-btn class="search_home">  جستجوی ملک</v-btn>
    </div>
    </div>
</template>
<script>  
import search from './Search.vue'
export default {
  components:{
search

  },
  props:[
'data'
  ]
}
</script>
<style  scoped>
.main_section {
  padding: 50px;
  background-image: url('~/assets/images/headerimg.png');
  object-fit: cover;
  width: 100%;
}
.main_section h5,h2,p{
padding: 15px;
color: #000!important;
}
h2{
font-size: 57px;
font-weight: 800;
line-height: 80px;
letter-spacing: -0.025em;
}
.header-info{
padding-top: 80px;
width: 25%;
}
p{
  font-weight: 100;
font-size: 13px;
width: 35%!important;
}
h5{
font-size: 23px;
font-weight: 700;
line-height: 38px;
letter-spacing: -0.035em;
}
.search_home{
background: #519FFF!important;
border-radius: 9px;
color: #ffff!important;
padding: 15px!important;
font-size: 17px;
font-weight: 800;
line-height: 28px;
letter-spacing: -0.01em;
}
</style>
