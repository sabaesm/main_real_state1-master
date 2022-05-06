<template>
<div>
<p>salam</p>

</div>

</template>

<script>

import {mapState} from 'vuex'

export default {

 
  computed : mapState(['users']),

};
</script>

<style scoped>
li{
background-color: red;
width: 60px;
}

</style>