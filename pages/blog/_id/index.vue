<template>
  <v-app>
    <div class="mainPage">
      text : {{ $route.params.id }}
      <Header2 class="mb-5"></Header2>
      <div class="medium_container">
        <div class="mb-5">
          <v-row class="mainSection_weblog__cards">
            <v-col cols="12 " md="8" class="ma-0 pa-0">
              <cardDtaile v-bind="getBlogDynamic" :data="getBlogDynamic"  ></cardDtaile>
            </v-col>
            <v-col cols="12 " md="4" class="ma-0 pa-0 d-none d-md-flex">
              <search></search>
            </v-col>
          </v-row>
        </div>
        <div
          
          class="tset"
        >
     
        </div>
        <slider class="mt-5 pt-5"> </slider>
      </div>
    </div>
  </v-app>
</template>
<script>
import Blog from "../../../components/blogDtailes/MainDetailBlog.vue";
import Header2 from "../../../components/blogDtailes/Header2.vue";
import weblogCard from "../../../components/blogDtailes/weblogCard.vue";
import search from "../../../components/blogDtailes/dtaileSearch.vue";
import cardDtaile from "../../../components/blogDtailes/dtailesCard.vue";
import { getBlogDynamic } from "../../../service/getApi";
export default {
  components: {
    Blog,
    Header2,
    weblogCard,
    search,
    cardDtaile,
  },
  data() {
    return {
      getBlogDynamic: [],
    };
  },

  /* extracting url params */
  mounted() {
  
    getBlogDynamic(this.$route.params.id).then((res) =>this.getBlogDynamic=res.data)

    

  },
  layout: "user",
};
</script>
<style>
@media only screen and (max-width: 960px) {
  .mainSection_weblog__cards {
    border-radius: 30px;
  }
}
</style>
