<template>
<v-app>

    <div>
   
    <navbar></navbar>
    <Nuxt />
    <custoMfooter></custoMfooter>
    </div>
    </v-app>

</template>
<script>
import navbar from './navbar.vue'
import  custoMfooter from './footer.vue'
export default ({
    components: {
        navbar,
        custoMfooter
    },
})
</script>
