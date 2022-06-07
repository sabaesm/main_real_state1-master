<template>
  <v-row class="d-flex flex-row pa-0 ma-0">
    <v-col cols="12" class="gallery-container">
      <ul   class=" gallery">
      <li class="gallery_img" v-for=" items in detaileHeader " :key="items.id">
      <div class="overlay"></div>
      <img :src="items.imges" alt="">
      </li>
      </ul>
    </v-col>
  
  </v-row>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["detaileHeader"]),
};
</script>
<style scoped>
.gallery{
    width: 100%;
    height: 410px;
    overflow: hidden!important;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
}
.gallery_img{
height: 300px;
    opacity: 1;
    width: 24%;
    height: 200px;
    cursor: pointer;
    position: relative;
    border-radius: 10px!important;
}
.gallery:hover .overlay{
position: absolute;
left: 0;
top: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background-color: #FFFF;
opacity: .4;
transition: all ease-in-out .3s;
display: block;
}
.gallery_img:hover .overlay{
display: none;
transition: all ease-in-out .3s;
}
.gallery_img .overlay{
display: none;
transition: all ease-in-out .3s;
}
.gallery_img img{
width: 100%;
height: 100%;
object-fit: cover;
 border-radius: 10px!important;
}
.gallery .gallery_img:first-child{
      height: 100%;
    width: 50%;
}
.gallery-container{
padding: 50px;
}

@media screen and (max-width: 600px) {

.gallery{
    width: 100%;
    height: 370px;
    flex-direction: row;
    overflow: hidden!important;

}  .gallery .gallery_img:first-child{
      height: 75%!important;
    width: 100%!important;
}
 .gallery_img{
height:27%!important;
    opacity: 1;
    width: 33%!important;
    cursor: pointer;
    padding: 7px 2px;
}
}
</style>
