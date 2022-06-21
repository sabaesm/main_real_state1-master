<template>
  <v-app>
    <div class="mainPage">
      <Header2></Header2>
      <div class="medium_container">
        <div class="mainSection__cards mb-5">
          <v-row>
            <v-col cols="12 " md="7">
              <card v-bind="getBlog " :data="getBlog"
             
              ></card
            >
                <v-col cols="6" md="4" lg="4" class="pa-0 ma-0 mt-5 mb-5">
      <div v-bind="next" :key="next">
      next: {{ next }}
        <ul class="d-flex pa-0 ma-1 cards_pagination" v-if="next">
          <li>
            
           
            <v-btn
            @click="next2"
  elevation="2"
  :loading="loading"
>            مشاهده ی بیشتر
</v-btn>
          </li>
        </ul>
      </div>
    </v-col>
            </v-col>
         
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

import axios from 'axios';
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
      count:[],
      next:'',
    loading:false
    };
  },
    methods:{
next2(){
  this.loading=true
  axios.get(this.next).then(res=>(
     this.next=res.data.next,
    //  this.getBlog.push(res.data.results),
    res.data.results.forEach(ele => {
      this.getBlog.push(ele)
    }),
     this.loading=false,
     console.log(res.data.next)
  )).catch(err=>console.log(err))
  }
  },

  mounted() {
     getBlog().then((res) => {
       this.getBlog = res.data.results
       this.next = res.data.next
     }
     );
      // getBlog().then((res) => (this.next = res.data.next));
    // getBlog().then((res) => (this.count = res.data.count));
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
<style scoped>
.cards_pagination {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.cards_pagination li {
  border: 1px solid rgba(0, 0, 0, 0.219);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 150px !important;
  height: 50px;
  margin: 0 5px;
}
.cards_pagination li .pagination__number {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.53);
}
.cards_pagination li:hover {
  background: rgba(81, 159, 255, 0.12);
  transition: all ease-in-out 0.2s;
}
.cards_pagination li:hover .pagination__number {
  color: rgba(81, 159, 255, 1);
  transition: all ease-in-out 0.2s;
}
.cards_pagination li:hover svg path {
  stroke: rgba(81, 159, 255, 1);
  transition: all ease-in-out 0.2s;
}
</style>
