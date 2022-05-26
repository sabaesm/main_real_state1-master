<template>
  <v-app>
    <div class="mainPage">
      <Header2></Header2>
      <div class="medium_container">
        <div class="mainSection__cards mb-5">
          <v-row>
            <v-col cols="12 " md="7">
              <card v-bind="'getBlog,count' " :data="getBlog"
              :data2="count"
              ></card
            ></v-col>
            <v-col cols="12 " md="5">
              <search
                v-bind="'MostViewWeblogs,tags ,weblogTypes'"
                :data1="tags"
                :data2="MostViewWeblogs"
                :data3="weblogTypes"
              ></search
            ></v-col>
          </v-row>
        </div>
        <slider></slider>
      </div>
    </div>
  </v-app>
</template>
<script>
import Header2 from "../../components/blog/Header2.vue";
import weblogCard from "../../components/blog/weblogCard.vue";
import card from "../../components/blog/cards.vue";
import search from "../../components/blog/search.vue";
import slider from "../../components/blog/slider.vue";
import { getBlog } from "../../service/getApi";
import { tags } from "../../service/getApi";
import { weblogTypes } from "../../service/getApi";
import { MostViewWeblogs } from "../../service/getApi";
import { mapActions } from "vuex";
export default {
  components: {
    weblogCard,
    Header2,
    card,
    search,
    slider,
  },
  data() {
    return {
      getBlog: [],
      tags: [],
      weblogTypes: [],
      MostViewWeblogs: [],
      count:[]
    };
  },
  mounted() {
    getBlog().then((res) => (this.getBlog = res.data.results));
    getBlog().then((res) => (this.count = res.data.count));
    tags().then((res) => (this.tags = res.data))
    weblogTypes().then((res) => (this.weblogTypes = res.data));
    MostViewWeblogs().then((res) => (this.MostViewWeblogs = res.data));
    // .then((res)=>console.log(res.find(i=> i.id === 1)))
  },

  layout: "user",
};
</script>

<style>

.mainSection__cards .mainCard__weblog,
.search_main_section {
  margin-top: -100px;
  background-color: #ffff;
  border-radius: 30px !important;
  position: sticky;
}
</style>
