<template>
   <div class="search_main_section " >
   <v-col cols="12 "> 
   <h4 class="home_title py-4 ">جستجوی پست </h4>
   <div class="topnav">
    <form action="/action_page.php">
      <input type="text" placeholder="جستجو.." name="search">
      <button type="submit" class="" >
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6602 7.09375H29.1602" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6602 11.3438H24.9102" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.5768 16.3021C30.5768 23.7396 24.556 29.7604 17.1185 29.7604C9.68099 29.7604 3.66016 23.7396 3.66016 16.3021C3.66016 8.86458 9.68099 2.84375 17.1185 2.84375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.9935 31.1771L29.1602 28.3438" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </form>
</div>
<h4 class="home_title resp-mode-title py-5">جستجوی های اخیر </h4>
<recentSearch></recentSearch>
   </v-col>
   <h4 class="home_title  py-4" >دسته بندی های محبوب</h4>
   <category></category>
<h4 class="home_title py-5 ">  برچسب های محبوب
 </h4>
 <div>
 <v-col cols="10" class="label"> 
<ul v-for="lables in lables" :key="lables.id" class="ma-1">
<li class=""> 
{{lables.lable}}
</li></ul>
 </v-col>
 </div>
   </div>
  
</template>
<script>
import {mapState} from 'vuex'
import recentSearch from './recentSearch.vue'
import category from './favoritCategory.vue'
export default {
     computed: mapState(["lables"]),
    components:{
        recentSearch,
        category
    }
}
</script>
<style scoped>
.home_title{
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: 30px;
letter-spacing: -0.04em;
color: rgba(16, 23, 55, 1);;
}
.topnav {
  overflow: hidden;
  background-color: #F5F3F3;
  border-radius: 10px;
  width: 90%;
}
.topnav form{
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
}
.topnav input[type=text] {
padding: 10px;
  font-size: 17px;
 width: 100%;
    border:1px solid rgba(202, 195, 195, 0.31);
    border-left: none;
}
.topnav  button {
  background: #519FFF;
  font-size: 17px;
  border: none;
  cursor: pointer;
  padding: 10px 20px  ;
}
/*cards*/
.label{
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
.label ul li{
background-color:rgba(196, 196, 196, 0.2);
color: #555454BA;
padding: 10px 25px;
border-radius: 10px;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: 15px;
letter-spacing: -0.021em;
text-align: right; }
@media screen and (max-width: 960px){
  .search_main_section{
  margin-top: 5px!important;
  padding: 0 7px!important;
  }
 .resp-mode-title{
 margin-top: 30px;
 }

}
.recent__home .home__date{}
@media screen and (max-width: 600px) {
  .topnav  {
    float: none;
  }

  .topnav .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
  .search_main_section{
  margin-top: 5px!important;
  padding: 0 7px!important;
  }
    .home_title {
font-size: 16px;
font-weight: 700;
line-height: 23px;
letter-spacing: -0.04em;
text-align: right;
  }
  form svg{
  width: 21px;
  height: 21px;
  }
  .label ul li{
font-size: 10px;

}
}
</style>