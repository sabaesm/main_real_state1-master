<template>
<v-app>
  <div class="main__property">
    <header2 class="pb-5"></header2>
    <div class="medium_container">
    <v-col cols="12">
    <row class="d-flex flex-column flex-lg-row test ">
    <v-col cols="12" md="4">
   <filterSearch></filterSearch>
<recentSearch class="d-none d-lg-block"></recentSearch>
    </v-col>
    <v-col cols="12" md="8">
    <salecard></salecard>
    </v-col>
     <v-col cols="12" md="4">
<recentSearch class="d-block d-lg-none"></recentSearch>
    </v-col>
    </row>
     </v-col>
    </div>
  </div>
</v-app>

</template>
<script>
import header2 from "./Header2.vue";
import salecard from './salecard.vue'
import filterSearch from './filterSearch.vue'
import recentSearch from './recentSearch.vue'
export default {
  components: {
    header2,
    salecard,
    filterSearch,
    recentSearch
  },
};
</script>
