<template>
  <v-app>
    <div>
      <navbar class="test1"></navbar>
      <Nuxt />
      <custoMfooter></custoMfooter>
    </div>
  </v-app>
</template>
<script>
import navbar from "./navbar.vue";
import custoMfooter from "./footer.vue";
export default {
  components: {
    navbar,
    custoMfooter,
  },
};
</script>

<style>
.test1 {
  position: absolute;
  background-color: #ffff;
  top: 30px;
  z-index: 3;
  overflow: hidden;
  box-sizing: border-box !important;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 97%;
  left: 1.5%;
}

.test1 .main_nav {
  height: 90px;
}
</style>
