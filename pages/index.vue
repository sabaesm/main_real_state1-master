<template>
  <div>
    <v-app class="main">
      <hed v-bind="HomePage" :data="HomePage"></hed>
      <value></value>
      <grouping></grouping>
      <new1 v-bind="cases" :data="cases"></new1>
      <banner v-bind="homePage_banner_v" :data="homePage_banner_v"></banner>
      <new_vila v-bind="beach" :data="beach"></new_vila>
      <offer v-bind="special" :data="special"></offer>
      <favplace></favplace>
      <cons v-bind="getContactUs" :data="getContactUs"></cons>
      <weblog></weblog>
      <banner v-bind="homePage_banner_s" :data="homePage_banner_s"></banner>
    </v-app>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
import { HomePage } from "../service/getApi";
import { getContactUs } from "../service/getApi";
import { cases } from "../service/getApi";
import { beach } from "../service/getApi";
import { special } from "../service/getApi";

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
  computed: {
    ...mapState(["homePage_banner_v"]),
    ...mapState(["homePage_banner_s"]),
  },
  data() {
    return {
      HomePage: [],
      getContactUs: [],
      cases: [],
      beach: [],
      special:[]
    };
  },
  mounted() {
    HomePage().then((res) => (this.HomePage = res.data));
    getContactUs().then((res) => (this.getContactUs = res.data));
    cases().then((res) => (this.cases = res.data.results));
    beach().then((res) => (this.beach = res.data.results));
    special().then((res) => (this.special = res.data.results));
  },
  layout: "user",
};
</script>

<style scoped>
.main {
  overflow: hidden;
}
</style>
