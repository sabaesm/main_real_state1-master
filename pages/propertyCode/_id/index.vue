<template>
  <v-app>
    <div class="test">
      <div >
        <detaileHeader class="mb-4"></detaileHeader>
        <div class="medium_container">
          <div class="d-flex flex-row">
            <rightsection v-bind="getSearchDynamic" :data="getSearchDynamic"></rightsection>
            <leftsetion ></leftsetion>
          </div>
        </div>
      </div>
      <slider></slider>
    </div>
    {{ $route.params.id }}
  </v-app>

  <!-- <mainDetaile v-bind="getSearchDynamic" :data="getSearchDynamic"></mainDetaile> -->
</template>
<script>
// import mainDetaile from "../../../components/propertyDtalis/mainDetaile.vue";
import { getSearchDynamic } from "../../../service/getApi";
import { consultants } from "../../../service/getApi";
import detaileHeader from "../../../components/propertyDtalis/header.vue";
import leftsetion from "../../../components/propertyDtalis/leftsetion.vue";
import rightsection from "../../../components/propertyDtalis/rightsection.vue";
import slider from "../../../components/propertyDtalis/slider.vue";

export default {
  components: {
    detaileHeader,
    leftsetion,
    rightsection,
    slider,
  },
  data() {
    return {
      getSearchDynamic: [],
    };
  },
  mounted() {
    // console.log(this.$route.query);
    // console.log(this.$route.query.unit_price__gte);
    // console.log(this.$route.query.unit_price__lte);
    // console.log(this.$route.query.estate_type);
    // getSearch({ ...this.$route.query }).then((res) => console.log(res.data.results));
    // getSearch({ ...this.$route.query }).then(
    //   (res) => (this.getSearch = res.data.results)
    // );
    getSearchDynamic(this.$route.params.id)
      .then((res) => (this.getSearchDynamic = res.data.results))
      .then((res) => console.log(res));
    //   consultants().then(res=>console.log(res))
  },
  layout: "user",
};
</script>
