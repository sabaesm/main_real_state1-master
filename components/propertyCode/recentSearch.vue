<template>
  <div>
    <h4 class="pt-4 pb-3">جستجو های اخیر</h4>
    <ul class="">
      <li
        v-for="propertycode__recentsearch in propertycode__recentsearch"
        :key="propertycode__recentsearch.id"
        class="mb-5 
        d-flex flex-row align-center"
      >
        <v-row class="d-flex  ma-0 pa-0 align-center">
          <v-col cols="5" class="poperty__img pa-0 ma-0 mr-0 pr-0 ">
            <img :src="propertycode__recentsearch.img" alt="" />
          </v-col>
          <v-col cols="7" class="d-flex flex-column pa-0 ma-0 px-2">
            <span class="sale__vila"> {{ propertycode__recentsearch.detaile }}</span>
            <v-row class="price__row d-flex flex-row align-center justify-space-between  ma-0 px-0   py-2 ">
              <span class="value d-flex flex-row align-center">
              <span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8.84724 3.62993V5.99036C8.84724 7.40203 8.04057 8.00701 6.83057 8.00701H2.80182C2.59557 8.00701 2.39849 7.9887 2.21515 7.94745C2.10057 7.92912 1.99057 7.89703 1.88974 7.86037C1.20224 7.6037 0.785156 7.00786 0.785156 5.99036V3.62993C0.785156 2.21826 1.59182 1.61328 2.80182 1.61328H6.83057C7.85724 1.61328 8.59516 2.0487 8.79224 3.04328C8.82432 3.22661 8.84724 3.41451 8.84724 3.62993Z" fill="#237E48"/>
<path d="M10.2219 5.00511V7.36554C10.2219 8.7772 9.41526 9.38219 8.20526 9.38219H4.17651C3.83734 9.38219 3.53026 9.33638 3.26443 9.23555C2.71901 9.03388 2.34776 8.6168 2.21484 7.94763C2.39818 7.98888 2.59526 8.00719 2.80151 8.00719H6.83026C8.04026 8.00719 8.84693 7.4022 8.84693 5.99054V3.63011C8.84693 3.41469 8.8286 3.22221 8.79193 3.04346C9.66276 3.22679 10.2219 3.84094 10.2219 5.00511Z" fill="#237E48"/>
<path d="M4.81157 6.02255C5.47983 6.02255 6.02158 5.48081 6.02158 4.81255C6.02158 4.14428 5.47983 3.60254 4.81157 3.60254C4.1433 3.60254 3.60156 4.14428 3.60156 4.81255C3.60156 5.48081 4.1433 6.02255 4.81157 6.02255Z" fill="#237E48"/>
<path d="M2.19141 3.78125C2.00349 3.78125 1.84766 3.93708 1.84766 4.125V5.5C1.84766 5.68792 2.00349 5.84375 2.19141 5.84375C2.37932 5.84375 2.53516 5.68792 2.53516 5.5V4.125C2.53516 3.93708 2.38391 3.78125 2.19141 3.78125Z" fill="#237E48"/>
<path d="M7.42969 3.78125C7.24177 3.78125 7.08594 3.93708 7.08594 4.125V5.5C7.08594 5.68792 7.24177 5.84375 7.42969 5.84375C7.6176 5.84375 7.77344 5.68792 7.77344 5.5V4.125C7.77344 3.93708 7.62219 3.78125 7.42969 3.78125Z" fill="#237E48"/>
</svg>
</span>
              {{ propertycode__recentsearch.value }}
              <span class="toman">تومان</span>
              </span>
              
              <span class="price">({{ propertycode__recentsearch.price }})</span>
            </v-row>
          </v-col>
        </v-row>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["propertycode__recentsearch"]),
  },
};
</script>
<style  scoped>
h4{
font-size: 21px;
font-weight: 700;
line-height: 30px;
letter-spacing: -0.04em;
text-align: right;
}
.poperty__img{
height: 100px;
}
.poperty__img img {
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
}
.sale__vila{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.021em;
}
.value{
font-size: 10px;
font-weight: 800;
line-height: 15px;
letter-spacing: -0.021em;
color: rgba(83, 83, 83, 1);
}
.h{
font-family: IRANYekanWeb;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 15px;
letter-spacing: -0.021em;
text-align: right;}
.price{
color: rgba(129, 129, 129, 1);
font-size: 10px;
font-weight: 700;
line-height: 15px;
letter-spacing: -0.021em;
}

.toman{
font-size: 10px;
font-weight: 400;
line-height: 15px;
letter-spacing: -0.021em;
}
</style>
