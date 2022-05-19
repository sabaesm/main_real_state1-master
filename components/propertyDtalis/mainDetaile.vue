<template> 
<v-app>
  <div class="test">
        <div v-bind="data " :key="data.id">
<div>{{data.title}}</div>
      <detaileHeader class="mb-4"></detaileHeader>
      <div class="medium_container">
      <div class="d-flex flex-row">
      <rightsection></rightsection>
      <leftsetion></leftsetion>
      
   </div>
      </div>
      </div>
      <slider></slider>
     
    </div>
</v-app>
</template> 
<script>
import detaileHeader from './header.vue'
import leftsetion from './leftsetion.vue'
import rightsection from './rightsection.vue'
import slider from './slider.vue'
export default {
    components:{
     detaileHeader,
     leftsetion,
     rightsection,
     slider
    },
    props:[
        'data'
    ]
    
}
</script>
<style  scoped >
    .test{
        
    }
</style>