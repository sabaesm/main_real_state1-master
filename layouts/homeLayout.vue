<template>
  <v-app>
    <div>
      <navbar   id="navbar" class="test1 is-fixed-top"></navbar>
      <Nuxt />
      <custoMfooter></custoMfooter>
    </div>
  </v-app>
</template>
      
<script>
import navbar from "./navbar.vue";
import custoMfooter from "./footer.vue";
 import $ from 'jquery'
export default {
  components: {
    navbar,
    custoMfooter,
  },
    created() {
    if (process.client) {
      $(document).on('scroll', function() {
        if ($(document).scrollTop() > 250) {
          $('#navbar').addClass('shrink'),
         $('#navbar').removeClass('test1')

        } else {
          $('#navbar').removeClass('shrink'),
          $('#navbar').addClass('test1')
        }
      })
    }
  }
};



</script>

<style >

.shrinkNav{
width: 30px;
  top: 0px!important;
  background-color: aquamarine;
}

.test1 {
  position: absolute;
  top: 30px;
  z-index: 22;
  overflow: hidden;
  box-sizing: border-box !important;
  border-radius: 15px;
  align-items: center;
  width: 97%;
  left: 1.5%;
  border-radius: 15px !important;
  overflow: hidden;
  transition: all ease-in-out .5s;
}

.is-fixed-top{
     position: fixed;
    top: 0;
    left: 0;
height: 30px;
    z-index: 222;
}
.shrink{
  position: absolute;
  top: 0px;
  z-index: 22;
  border-radius: 0px;
  width: 100%;
  left: 0px;
  right: 0px;
  border-radius: 0px !important;
  overflow: hidden;
  transition: all ease-in-out .5s; 
   z-index: 223;
}

.test1 .main_nav {
  height: 90px;
  overflow: hidden;
  border-radius: 15px !important;
}

.test1 .fixed_nav {
  border-radius: 15px;
  align-items: center;
  width: 97% !important;
  left: 1.5%;
  top: 20px;
}



nav {
  padding: 1rem;
  transition: all 0.5s;
  background: white;
  border-bottom: #ddd 1px solid;
}
nav.shrink {
  padding: 0.3rem;
  background: gray;
}


/*  */

</style>
