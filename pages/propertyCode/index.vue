<template>
  <v-app>
    <div class="main__property">
      <header2 class="pb-5"></header2>
      <div class="medium_container">
        <v-col cols="12">
          <v-row class="d-flex flex-column flex-lg-row test">
            <v-col cols="12" md="4">
              <filterSearch></filterSearch>
              
              <recentSearch class="d-none d-lg-block"></recentSearch>
              
            </v-col>
            <v-col cols="12" md="8">
              <salecard v-bind="getSearch" :data="getSearch"></salecard>
            </v-col>
            <v-col cols="12" md="4">
              <recentSearch class="d-block d-lg-none" v-bind="getSearch" :data="getSearch"></recentSearch>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </div>
  </v-app>
</template>

<script>
import header2 from "../../components/propertyCode/Header2.vue";
import salecard from "../../components/propertyCode/salecard.vue";
import filterSearch from "../../components/propertyCode/filterSearch.vue";
import recentSearch from "../../components/propertyCode/recentSearch.vue";
import { getSearch } from "../../service/getApi";
export default {
  components: {
    header2,
    salecard,
    filterSearch,
    recentSearch,
  },
  data() {
    return {
      getSearch: [],
    };
  },
  mounted() {
    // console.log(this.$route.query);
    // console.log(this.$route.query.unit_price__gte);
    // console.log(this.$route.query.unit_price__lte);
    // console.log(this.$route.query.estate_type);
    getSearch({...this.$route.query}).then((res) => console.log(res.data.results))
    getSearch({...this.$route.query}).then((res) => this.getSearch=res.data.results)

  },

  layout: "user",
};
</script>
<style scoped>
.test {
  overflow: hidden;
  background-color: #ffff;
  margin-top: -100px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  position: sticky;
}
</style>
