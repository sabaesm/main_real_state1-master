<template>
  <div>
    <v-app class="main">
      <hed v-bind="HomePage" :data="HomePage"></hed>
      <value></value>
      <grouping></grouping>
      <new1></new1>
      <banner v-bind="getContactUsBanner" :data="getContactUsBanner"></banner>
      <new_vila></new_vila>
      <offer></offer>
      <banner v-bind="getContactUsBanner" :data="getContactUsBanner"></banner>
      <favplace></favplace>
         <cons v-bind="getContactUs" :data="getContactUs"></cons>
         <weblog></weblog>
               <banner v-bind="getContactUsBanner" :data="getContactUsBanner"></banner>
    </v-app>
  </div>
</template>
<script>
import hed from "../components/home1/Header.vue";
import grouping from "../components/home1/Grouping.vue";
import value from "../components/home1/Value.vue";
import banner from "../components/home1/banner.vue";
import new1 from "../components/home1/New.vue";
import cons from "../components/home1/Consultants.vue";
import offer from "../components/home1/offer.vue";
import favplace from "../components/home1/favorit_place.vue";
import new_vila from "../components/home1/new_vila.vue";
import weblog from "../components/home1/weblog.vue";
import { getContactUsBanner } from "../service/getApi";
import { HomePage } from "../service/getApi";
import { getContactUs } from "../service/getApi";

export default {
  components: {
    hed,
    grouping,
    banner,
    cons,
    new1,
    new_vila,
    value,
    offer,
    favplace,
    weblog,
  },
  data() {
    return {
      getContactUsBanner: [],
      HomePage: [],
      getContactUs:[]
    };
  },
  mounted() {
    getContactUsBanner().then((res) => (this.getContactUsBanner = res.data));
    HomePage().then((res) => (this.HomePage = res.data));
    getContactUs().then((res)=>(this.getContactUs=res.data))
     
  },
  layout: "user",
};
</script>

<style scoped>
.main{
overflow: hidden;

}
</style>