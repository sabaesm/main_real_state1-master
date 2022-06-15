<template>
<div >
    <ul v-for="category in category" :key="category.id" class="ma-0 py-2" >
<li>
<v-col  cols="12" class=" ma-0 pa-0">
<div class="  category__itmes " >
<p class=" col-11 mb-0">
{{category.name}}
<span>({{category.counter}})</span>
</p>
<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.78681 10.0852L1.10768 6.54823C0.673185 6.13052 0.636698 5.4127 1.0266 4.95309L4.32812 1.06128" stroke="#292D32" stroke-opacity="0.44" stroke-width="1.28644" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</v-col>
</li>
</ul>
</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["category"]),
};
</script>
<style  >
.category__itmes{
background-color: rgba(196, 196, 196, 0.2);
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 3px 10px;
}
.category__itmes p{
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.04em;
color: #0000008F;
}
.category__itmes:hover {
background-color: #519FFF;
transition: all ease-in-out .2s;
}
.category__itmes:hover p {
color: #ffffff;
transition: all ease-in-out .2s;
}
.category__itmes:hover svg  path {
stroke: #ffffff;
width: 40px;
}
@media   screen and (max-width: 600px) {
.category__itmes{
padding:  5px 10px!important;
border-radius: 10px;
}
  .category__itmes p,span{
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: -0.04em;
text-align: right;
}
}
</style>