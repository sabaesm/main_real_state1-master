<template>
<v-app>
<Header></Header>
  <value></value>
  <grouping></grouping>
  <new></new>
  </v-app>
</template>
<script>
import  New from './New.vue'
import Header from './Header.vue'
import value from './Value.vue'
import grouping  from './Grouping.vue'
export default {
 components:{
     grouping,
     Header,
     value,
     New
 }
}
</script>


